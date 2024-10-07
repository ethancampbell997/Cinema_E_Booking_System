package com.yourgroup.cinemaebooking;

import org.mindrot.jbcrypt.BCrypt;

public class PasswordUtility {
  
  public static String hashPass(String pass) {

    return BCrypt.hashpw(pass, BCrypt.gensalt());

  } // hashPass

} // PasswordUtility
