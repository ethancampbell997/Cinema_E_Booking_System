package com.yourgroup.cinemaebooking;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/login")
public class LogInController {

    @PostMapping
    public ResponseEntity<String> login(@RequestBody NewUser user) {
      String username = user.getEmail(); 
      String password = user.getPassword();

      boolean isValidUser = validateUser(username, password);

        if (isValidUser) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(401).body("Invalid username or password");
        }

      // return ResponseEntity.ok("Login successful");
    }

    private boolean validateUser(String email, String password) {
      return false;
  }
}