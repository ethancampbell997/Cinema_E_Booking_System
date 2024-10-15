package com.yourgroup.cinemaebooking.utilities;

import org.mindrot.jbcrypt.BCrypt;

public class PasswordUtility {
  
  public static String hashPass(String pass) {

    return BCrypt.hashpw(pass, BCrypt.gensalt());

  } // hashPass

  public static boolean verifyPass(String pass, String hashedPass) {

    return BCrypt.checkpw(pass, hashedPass);

  } // verifyPass

} // PasswordUtility
