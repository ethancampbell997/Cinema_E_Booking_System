package com.yourgroup.cinemaebooking;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/users")
public class UserController {

  @PostMapping
  public void createUser(@RequestBody NewUser user) {
    System.out.println("here2");
    user.hashPassword();
    UserAccess.saveUser(user);
  } // createUser

} // UserController
