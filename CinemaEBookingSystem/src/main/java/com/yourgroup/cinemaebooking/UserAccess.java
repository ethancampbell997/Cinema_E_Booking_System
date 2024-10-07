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
      if (con == null) {
        return -1;            
      } // if

      st = con.createStatement();
      if (st == null) {
        return -1;
      } // if

      st.executeUpdate(sql);
      
    } catch (SQLException e) {
      e.printStackTrace();
      return -1;
    }

    return 0;
  } // saveUser

} // UserAccess
