package com.yourgroup.cinemaebooking;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.ResultSet;
import java.lang.Class;
import java.util.*;

public class UserAccess {

  public static int saveUser(NewUser user) {
    String sql = "INSERT INTO users (full_name, email, password, phone, street, city, state, zip, role) VALUES (";
    sql += user.toString();
    sql += ")";
    String url = "jdbc:mysql://cinema-booking.cfysagqmu79l.us-east-2.rds.amazonaws.com:3306/cinema_booking";
    String username = "cameran";
    String password = "Candawg34!";
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

      if (!user.cardToString().equalsIgnoreCase("")) {
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

} // UserAccess
