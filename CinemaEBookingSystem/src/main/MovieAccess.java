package main;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.ResultSet;


public class MovieAccess {
    
    public int getID(String title) {
        String sql = "select movie_id from movies where title=" + title;
        String url = "jdbc:mysql://localhost:3306/cinema_booking_db";
        String username = "root";
        String password = "Candawg34!";
        Statement st = null;
        ResultSet rs = null;

        try {
            Connection con = DriverManager.getConnection(url, username, password);
            if (con == null) {
                return -1;

            } // if

            st = con.createStatement();
            if (st == null) {
                return -1;

            } // if

            rs = st.executeQuery(sql);
            if (rs.next()) {
                /* Movie exists */
                int i = rs.getInt(1);
                return i;

            } // if

        } catch (SQLException e) {
            return -1;

        } // try
        
        return 0; // Movie does not exist

    } // getID
    
    public String getStatus(int id) {
        /* Pre: Movie exists */
        String sql = "select status from movies where id=" + Integer.toString(id);
        String url = "jdbc:mysql://localhost:3306/cinema_booking_db";
        String username = "root";
        String password = "Candawg34!";
        Statement st = null;
        ResultSet rs = null;

        try {
            Connection con = DriverManager.getConnection(url, username, password);
            if (con == null) {
                return "ERR";

            } // if

            st = con.createStatement();
            if (st == null) {
                return "ERR";

            } // if

            rs = st.executeQuery(sql);
            rs.next();
            String status = rs.getString(1);
            return status;

        } catch (SQLException e) {
            return "ERR";

        } // try

    } // getStatus

    public String getLink(int id) {
        /* Pre: Movie exists */
        String sql = "select link from movies where id=" + Integer.toString(id);
        String url = "jdbc:mysql://localhost:3306/cinema_booking_db";
        String username = "root";
        String password = "Candawg34!";
        Statement st = null;
        ResultSet rs = null;

        try {
            Connection con = DriverManager.getConnection(url, username, password);
            if (con == null) {
                return "ERR";

            } // if

            st = con.createStatement();
            if (st == null) {
                return "ERR";

            } // if

            rs = st.executeQuery(sql);
            rs.next();
            String link = rs.getString(1);
            return link;

        } catch (SQLException e) {
            return "ERR";

        } // try

    } // getLink
    
} // MovieAccess