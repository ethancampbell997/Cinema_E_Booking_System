package com.yourgroup.cinemaebooking.accessors;

import java.sql.*;
import java.lang.Class;
import java.util.*;

import com.yourgroup.cinemaebooking.LoggedInUser;
import com.yourgroup.cinemaebooking.NewUser;

public class UserAccess {

  private static String url = "jdbc:mysql://cinema-booking.cfysagqmu79l.us-east-2.rds.amazonaws.com:3306/cinema_booking";
  private static String username = "cameran";
  private static String password = "Candawg34!";

  public static int updateUser(NewUser user) {
    String sql = "UPDATE users SET full_name = ?, phone = ?, street = ?, city = ?, state = ?, zip = ?, promotional_opt_in = ? WHERE email = ?";
    
    try (Connection con = DriverManager.getConnection(url, username, password);
         PreparedStatement ps = con.prepareStatement(sql)) {
        ps.setString(1, user.getName());
        ps.setString(2, user.getPhone());
        ps.setString(3, user.getStreet());
        ps.setString(4, user.getCity());
        ps.setString(5, user.getState());
        ps.setString(6, user.getZip());
        ps.setBoolean(7, user.getPromotion());
        ps.setString(8, user.getEmail());

        return ps.executeUpdate(); // Returns the number of affected rows
    } catch (SQLException e) {
        e.printStackTrace();
        return -1; // Indicate an error
    }
}

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


  public static int updatePassword(int id, String uPassword) {
    Connection conn = null;
    Statement st = null;

    try {
      conn = DriverManager.getConnection(url, username, password);
      //st = conn.createStatement();
      String sql = "UPDATE users SET password = ? WHERE user_id = ?";

      PreparedStatement ps = conn.prepareStatement(sql);
      ps.setString(1, uPassword);
      ps.setInt(2, id);

      System.out.println("SQL" + sql);
      int rowsAffected = ps.executeUpdate();

      System.out.println(rowsAffected);
      System.out.println("Update Complete");
      return rowsAffected;

    } catch (SQLException ex) {
      ex.printStackTrace();
      System.out.println("SQL State" + ex.getSQLState());
      System.out.println("Error Code" + ex.getErrorCode());
      System.out.println("Error Message" + ex.getMessage());
      return -1;
    }
  } // updatePassword
  public static NewUser findByEmail(String email) {
    String sql = "SELECT * FROM users WHERE email = ?"; 
    NewUser user = null;

    try (Connection con = DriverManager.getConnection(url, username, password);
         PreparedStatement ps = con.prepareStatement(sql)) {
        ps.setString(1, email);
        ResultSet rs = ps.executeQuery();

        if (rs.next()) {
            user = new NewUser();
            user.setName(rs.getString("full_name"));
            user.setEmail(rs.getString("email"));
            user.setPhone(rs.getString("phone"));
            user.setStreet(rs.getString("street"));
            user.setCity(rs.getString("city"));
            user.setState(rs.getString("state"));
            user.setZip(rs.getString("zip"));
            user.setPromotion(rs.getBoolean("promotional_opt_in"));
            // Handle other user properties like cards
        }
    } catch (SQLException e) {
        e.printStackTrace();
    }

    return user;
}
} // UserAccess
