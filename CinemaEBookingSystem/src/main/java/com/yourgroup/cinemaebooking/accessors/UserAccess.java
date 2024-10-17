package com.yourgroup.cinemaebooking.accessors;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.ResultSet;
import java.lang.Class;
import java.util.*;

import com.yourgroup.cinemaebooking.NewUser;

public class UserAccess {

  private static String url = "jdbc:mysql://cinema-booking.cfysagqmu79l.us-east-2.rds.amazonaws.com:3306/cinema_booking";
  private static String username = "cameran";
  private static String password = "Candawg34!";

  public static int saveUser(NewUser user) {
    String sql = "INSERT INTO users (full_name, email, password, phone, street, city, state, zip, role, promotional_opt_in) VALUES (";
    sql += (user.toString() + ")");
    Statement st = null;

    try {
      Connection con = DriverManager.getConnection(url, username, password);
      ResultSet generatedKeys = null;
      if (con == null) {
        return -1;            
      } // if

      st = con.createStatement();
      if (st == null) {
        return -1;
      } // if

      st.executeUpdate(sql, Statement.RETURN_GENERATED_KEYS);

      if (!(user.cardToString().isEmpty())) {
        generatedKeys = st.getGeneratedKeys();
        int userId = 0;
        if (generatedKeys.next()) {
          userId = generatedKeys.getInt(1);

        } // if
        
        String cardSql = "INSERT INTO cards (card_type, card_number, expiration_date, user_id) VALUES (";
        cardSql += user.cardToString();
        cardSql += "'" + userId + "'";
        cardSql += ")";

        st = con.createStatement();
        if (st == null) {
          return -1;
        } // if

        st.executeUpdate(cardSql);

      } // if
      
    } catch (SQLException e) {
      e.printStackTrace();
      return -1;
    }

    return 0;
  } // saveUser

  public static int checkForEmail(String email) {
    String sql = "SELECT * FROM users WHERE email = '" + email + "';";
    Statement st = null;

    try {
      Connection con = DriverManager.getConnection(url, username, password);

      if (con == null) {
        return -1;            
      } // if

      st = con.createStatement();
      if (st == null) {
        return -1;
      } // if

      ResultSet rs = st.executeQuery(sql);
      if (rs.next()) {
        /* Case for if the email is in the database */
        return 1;

      } // if

    } catch (SQLException e) {
      e.printStackTrace();
      return -1;
    }

    /* Case for if the email is NOT in the database */
    return 0;

  } // checkForEmail

  public static String getHashedPass(String email) {
    String sql = "SELECT password FROM users WHERE email = '" + email + "';";
    Statement st = null;
    String hashedPass = null;

    try {
      Connection con = DriverManager.getConnection(url, username, password);

      if (con == null) {
        return null;            
      } // if

      st = con.createStatement();
      if (st == null) {
        return null;
      } // if

      ResultSet rs = st.executeQuery(sql);
      if (rs.next()) {
        hashedPass = rs.getString("password");
      } // if

    } catch (SQLException e) {
      e.printStackTrace();
      return null;
    }

    return hashedPass;

  } // getHashedPass

} // UserAccess
