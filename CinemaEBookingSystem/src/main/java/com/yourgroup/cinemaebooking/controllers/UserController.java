package com.yourgroup.cinemaebooking.controllers;

import java.util.Map;

import com.yourgroup.cinemaebooking.EmailSenderService;
import com.yourgroup.cinemaebooking.LoggedInUser;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.yourgroup.cinemaebooking.NewUser;
import com.yourgroup.cinemaebooking.accessors.UserAccess;

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
}

@PostMapping("/edit")
  public int editUser(@RequestBody LoggedInUser user, @RequestBody String name, @RequestBody String phone,
                        @RequestBody String street, @RequestBody String city, @RequestBody String state, @RequestBody String zip) {
        return UserAccess.updateProfile(user.getUser_id(), name, phone, street, city, state, zip);
    } // edit user
  
@PostMapping("/changePassword")
  public int changePassword(@RequestBody LoggedInUser user, @RequestBody String newPassword) {
        return UserAccess.updatePassword(user.getUser_id(), newPassword);
    } // change password
}

