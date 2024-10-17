package com.yourgroup.cinemaebooking.controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.yourgroup.cinemaebooking.NewUser;
import com.yourgroup.cinemaebooking.accessors.UserAccess;
import com.yourgroup.cinemaebooking.utilities.PasswordUtility;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/login")
public class LogInController {

    @PostMapping
    public ResponseEntity<Map<String, Object>> login(@RequestBody NewUser user) {
      String username = user.getEmail(); 
      String password = user.getPassword();

      boolean isValidUser = validateUser(username, password);

        if (isValidUser) {
          Map<String, Object> response = new HashMap<>();
          response.put("message", "Login successful");
          response.put("isLoggedIn", true);
          response.put("username", username);
          return ResponseEntity.ok(response);
        } else {
          Map<String, Object> response = new HashMap<>();
          response.put("message", "Invalid username or password");
          response.put("isLoggedIn", false);
          return ResponseEntity.status(401).body(response);
        }

      // return ResponseEntity.ok("Login successful");
    }

    private boolean validateUser(String email, String password) {
      if (UserAccess.checkForEmail(email) == 1) {
        System.out.println("Email found in db");
        if (PasswordUtility.verifyPass(password, UserAccess.getHashedPass(email))) {
          System.out.println("Password matches");
          return true;
        } else {
          System.out.println("Password does NOT match");
          return false;
        } // if
      } else {
        System.out.println("Email NOT found in db");
        return false;
      } // if
  }
}