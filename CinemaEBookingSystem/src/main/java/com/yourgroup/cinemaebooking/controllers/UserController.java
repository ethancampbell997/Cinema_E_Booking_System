package com.yourgroup.cinemaebooking.controllers;

import com.yourgroup.cinemaebooking.EmailSenderService;
import com.yourgroup.cinemaebooking.LoggedInUser;
import org.springframework.web.bind.annotation.*;

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
      emailSenderService.sendEmail("kazemiazad1@gmail.com", "New User Created", "A new user has been created");
      System.out.println("Email sent successfully");
    } catch (Exception e) {
      System.err.println("Failed to send email: " + e.getMessage());
      e.printStackTrace();
    }
  }

@PostMapping("/profile")
  public String returnProfile(@RequestBody LoggedInUser user) {
        return user.toStringEdit();
    } // return profile

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

