package com.yourgroup.cinemaebooking.controllers;

import org.springframework.web.bind.annotation.*;

import com.yourgroup.cinemaebooking.NewUser;
import com.yourgroup.cinemaebooking.accessors.UserAccess;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/users")
public class UserController {

  @PostMapping
  public void createUser(@RequestBody NewUser user) {
    System.out.println("here2");
    user.hashPassword();
    user.fixDate();
    user.encryptCard();
    UserAccess.saveUser(user);
  } // createUser

} // UserController
