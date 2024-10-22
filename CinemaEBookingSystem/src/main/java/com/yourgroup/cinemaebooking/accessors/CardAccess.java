package com.yourgroup.cinemaebooking.accessors;

// For SQL Date
import java.sql.*;
import java.text.SimpleDateFormat; // For date formatting

import com.yourgroup.cinemaebooking.PaymentCard;

public class CardAccess {
    private static String url = "jdbc:mysql://cinema-booking.cfysagqmu79l.us-east-2.rds.amazonaws.com:3306/cinema_booking";
    private static String username = "cameran";
    private static String password = "Candawg34!";

    public static PaymentCard[] getAllCards(String email) {
        PaymentCard[] cards = new PaymentCard[4];
        int user_id = getUserId(email); // gets user_id associated with email
        String sql = "SELECT * FROM cards WHERE user_id = '";
        sql += user_id;
        sql += "';";
        try {
            Connection con = DriverManager.getConnection(url, username, password);
            PreparedStatement ps = con.prepareStatement(sql);
            ResultSet rs = ps.executeQuery();
            int count = 0;
            while (rs.next()) {
                int card_id = rs.getInt("card_id");
                int card_number = Integer.parseInt(rs.getString("card_number"));
                String exp_date = sqlDateToString(rs.getDate("expiration_date"));
                String card_type = rs.getString("card_type");
                cards[count] = new PaymentCard(card_id, card_number, exp_date, user_id, card_type);
                count++;
            } // while
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        } // try

        return cards;
    }

    private static int getUserId(String email) {
        String sql = "SELECT user_id FROM users WHERE email = '";
        sql += email;
        sql += "';";
        try {
            Connection con = DriverManager.getConnection(url, username, password);
            PreparedStatement ps = con.prepareStatement(sql);
            ResultSet rs = ps.executeQuery();
            rs.next();
            int user_id = rs.getInt("user_id");
            return user_id;
        } catch (SQLException e) {
            e.printStackTrace();
            return -1;
        } // try
    } // getUserId

    private static String sqlDateToString(Date sqlDate) {
        // Define the desired date format
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd"); // Change format as needed
        return formatter.format(sqlDate);
    }
} // CardAccess
