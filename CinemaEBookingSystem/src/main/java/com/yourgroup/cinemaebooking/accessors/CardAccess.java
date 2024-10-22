package com.yourgroup.cinemaebooking.accessors;

// For SQL Date
import java.sql.*;
import java.text.SimpleDateFormat; // For date formatting
import java.util.ArrayList;
import java.util.List;

import com.yourgroup.cinemaebooking.PaymentCard;
import com.yourgroup.cinemaebooking.utilities.CardUtility;

public class CardAccess {
    private static String url = "jdbc:mysql://cinema-booking.cfysagqmu79l.us-east-2.rds.amazonaws.com:3306/cinema_booking";
    private static String username = "cameran";
    private static String password = "Candawg34!";


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
    /*public static List<PaymentCard> getAllCards(String email) {
        List<PaymentCard> cards = new ArrayList<>();
        int user_id = getUserId(email); // gets user_id associated with email
        String sql = "SELECT * FROM cards WHERE user_id = ?";

        try (Connection con = DriverManager.getConnection(url, username, password);
             PreparedStatement ps = con.prepareStatement(sql)) {
            ps.setInt(1, user_id);
            ResultSet rs = ps.executeQuery();
            
            while (rs.next()) {
                int card_id = rs.getInt("card_id");
                String card_number = rs.getString("card_number");
                String exp_date = sqlDateToString(rs.getDate("expiration_date"));
                String card_type = rs.getString("card_type");
                cards.add(new PaymentCard(card_id, card_number, exp_date, user_id, card_type));
            }
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }

        return cards; // Return List<PaymentCard>
    }*/
    public static List<PaymentCard> getCardsByEmail(String email) {
        String sql = "SELECT * FROM cards WHERE user_id = (SELECT user_id FROM users WHERE email = ?)";
        List<PaymentCard> cards = new ArrayList<>();
    
        try (Connection con = DriverManager.getConnection(url, username, password);
             PreparedStatement ps = con.prepareStatement(sql)) {
            ps.setString(1, email);
            ResultSet rs = ps.executeQuery();
    
            while (rs.next()) {
                PaymentCard card = new PaymentCard();
                card.setCardType(rs.getString("card_type"));
                card.setCardNumber(rs.getString("card_number"));
                card.setExpirationDate(rs.getString("expiration_date"));
                String encryptedCardNumber = rs.getString("card_number");
                String decryptedCardNumber = CardUtility.decryptCreditCard(encryptedCardNumber);
                card.setCardNumber(decryptedCardNumber);
                // Avoid fetching sensitive data like CVC
                cards.add(card);
            }
        } catch (SQLException e) {
            e.printStackTrace();
            return null; // Handle error accordingly
        }
    
        return cards.isEmpty() ? null : cards;
    }
} // CardAccess
