package com.yourgroup.cinemaebooking.controllers;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import com.yourgroup.cinemaebooking.EmailSenderService;
import com.yourgroup.cinemaebooking.LoggedInUser;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.yourgroup.cinemaebooking.NewUser;
import com.yourgroup.cinemaebooking.accessors.UserAccess;
import com.yourgroup.cinemaebooking.utilities.PasswordUtility;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/users")
public class UserController {

  @Autowired
  private EmailSenderService emailSenderService;

  @PostMapping()
  public void createUser(@RequestBody NewUser user) {
        System.out.println("here2");
        user.hashPassword();
        user.fixDate();
        user.encryptCard();
        UserAccess.saveUser(user);
        try {
            String userEmail = user.getEmail();
            emailSenderService.sendEmail(userEmail, "New User Created", "You have created a new account with e-cinema!");
            System.out.println("Email sent successfully");
        } catch (Exception e) {
            System.err.println("Failed to send email: " + e.getMessage());
            e.printStackTrace();
        }
  }

    @PostMapping("/profile")
    public ResponseEntity<NewUser> returnProfile(@RequestBody Map<String, String> payload) {
        String email = payload.get("email");
        
        // Fetch user from the database using the email
        NewUser user = UserAccess.findByEmail(email);
        
        if (user != null) {
            return ResponseEntity.ok(user); // Return user data as JSON
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    } // returnProfile

    @PostMapping("/edit")
    public ResponseEntity<Map<String, String>> editUser(@RequestBody NewUser user) {
        Map<String, String> response = new HashMap<>();
        try {
            // Ensure password is hashed if changed
            if (user.getPassword() != null) {
                user.setPassword(PasswordUtility.hashPass(user.getPassword()));
            }

            UserAccess.updateUser(user); // Update user in the database

            // Send confirmation email
            emailSenderService.sendEmail(user.getEmail(), "Account Updated", "Your account has been updated successfully!");
            
            response.put("message", "User updated successfully");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            response.put("message", "An error occurred: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    } // editUser
  
    @PostMapping("/changePassword")
    public ResponseEntity<Map<String, String>> changePassword(@RequestBody Map<String, String> payload) {
        System.out.println("Received payload: " + payload);  
        String email = payload.get("email");
        String oldPassword = payload.get("oldPassword");
        String newPassword = payload.get("newPassword");

        Map<String, String> response = new HashMap<>();

        // Validate old password
        if (!validateUser(email, oldPassword)) {
            response.put("success", "false");
            response.put("message", "Old password is incorrect. Try again.");
            return ResponseEntity.status(401).body(response);
        }

        // If old password is correct, update the new password
        NewUser user = UserAccess.findByEmail(email);
        if (user != null) {
            user.setPassword(newPassword);
            user.hashPassword(); // Hash the new password
            UserAccess.updatePassword(user); // Update user in the database
            emailSenderService.sendEmail(user.getEmail(), "Password changed", "Your password has been changed.");

            response.put("success", "true");
            response.put("message", "Password changed successfully!");
            return ResponseEntity.ok(response);
        } else {
            response.put("success", "false");
            response.put("message", "User not found.");
            return ResponseEntity.status(404).body(response);
        }
    } // changePassword

    @PostMapping("/send-code")
    public ResponseEntity<Map<String, String>> forgotPassword(@RequestBody String email) {
        Map<String, String> response = new HashMap<>();

        boolean emailSent = sendVerificationCode(email);

        if (emailSent) {
            response.put("message", "Verification code sent successfully.");
            return ResponseEntity.ok(response); // Returns 200 OK with the message
        } else {
            response.put("message", "Failed to send verification code.");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response); // Returns 500 with error message
        } // if

    } // forgotPassword

    private boolean sendVerificationCode(String email) {
        email = email.substring(10, (email.length() - 2));
        Random random = new Random();
        int min = 100000;
        int max = 999999;
        int randomCode = random.nextInt((max - min) + 1) + min;

        // store code first
        if (!UserAccess.storeResetCode(email, randomCode)) {
            return false;
        } // if

        String body = "Your password reset code is: " + randomCode;
        emailSenderService.sendEmail(email, "Reset Password Code", body);

        return true;

    } // sendVerificationCode

    private boolean validateUser(String email, String password) {
        if (UserAccess.checkForEmail(email) == 1) {
            return PasswordUtility.verifyPass(password, UserAccess.getHashedPass(email));
        }
        return false;
    } // validateUser
}

