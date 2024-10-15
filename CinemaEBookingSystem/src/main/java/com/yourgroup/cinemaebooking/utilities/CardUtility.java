package com.yourgroup.cinemaebooking.utilities;

import io.github.cdimascio.dotenv.Dotenv;
import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.util.Base64;

public class CardUtility {
  private static final Dotenv dotenv = Dotenv.load();
  private static final String ALGORITHM = "AES";

  private static SecretKey loadKeyFromEnv() {
    String base64Key = dotenv.get("AES_KEY");
    byte[] decodedKey = Base64.getDecoder().decode(base64Key);
    return new SecretKeySpec(decodedKey, 0, decodedKey.length, ALGORITHM);
  } // loadKeyFromEnv

  // Method to encrypt credit card information
  public static String encryptCreditCard(String creditCardNumber) {
    try {
        SecretKey secretKey = loadKeyFromEnv();
        Cipher cipher = Cipher.getInstance(ALGORITHM);
        cipher.init(Cipher.ENCRYPT_MODE, secretKey);
        byte[] encryptedData = cipher.doFinal(creditCardNumber.getBytes());
        return Base64.getEncoder().encodeToString(encryptedData);
    } catch (Exception e) {
        e.printStackTrace();
        return null;
    }
  }

// Method to decrypt credit card information
  public static String decryptCreditCard(String encryptedData) {
    try {
        SecretKey secretKey = loadKeyFromEnv();
        Cipher cipher = Cipher.getInstance(ALGORITHM);
        cipher.init(Cipher.DECRYPT_MODE, secretKey);
        byte[] decodedData = Base64.getDecoder().decode(encryptedData);
        byte[] decryptedData = cipher.doFinal(decodedData);
        return new String(decryptedData);
    } catch (Exception e) {
        e.printStackTrace();
        return null;
    }
  } // decryptCreditCard

} // CardUtility
