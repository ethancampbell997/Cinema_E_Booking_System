package com.yourgroup.cinemaebooking.accessors;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.ResultSet;
import java.lang.Class;
import java.util.*;

import com.yourgroup.cinemaebooking.MovieObject;

public class MovieAccess {
    private static String url = "jdbc:mysql://cinema-booking.cfysagqmu79l.us-east-2.rds.amazonaws.com:3306/cinema_booking";
    private static String username = "cameran";
    private static String password = "Candawg34!";
    
    public static int getID(String title) {
        String sql = "select movie_id from movies where title='" + title + "'";
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

    public static String getTitle(int id) throws Exception {
        /* Pre: Movie exists */
        String sql = "select title from movies where movie_id=" + Integer.toString(id);
        Statement st = null;
        ResultSet rs = null;

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
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
            String title = rs.getString(1);
            return title;

        } catch (SQLException e) {
            return "ERR";
        } // try

    } // getTitle
    
    public static String getStatus(int id) {
        /* Pre: Movie exists */
        String sql = "select status from movies where movie_id=" + Integer.toString(id);
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

    public static String getTrailerLink(int id) {
        /* Pre: Movie exists */
        String sql = "select trailer_link from movies where movie_id=" + Integer.toString(id);
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

    } // getTrailerLink

    public static String getTrailerPic(int id) {
        /* Pre: Movie exists */
        String sql = "select trailer_pic from movies where movie_id=" + Integer.toString(id);
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

    } // getTrailerPic

    public static String getRating(int id) {
        /* Pre: Movie exists */
        String sql = "select rating from movies where movie_id=" + Integer.toString(id);
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
            String rating = rs.getString(1);
            return rating;

        } catch (SQLException e) {
            return "ERR";
        } // try

    } // getStatus

    public static String getGenre(int id) {
        /* Pre: Movie exists */
        String sql = "select genre from movies where movie_id=" + Integer.toString(id);
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
            String genre = rs.getString(1);
            return genre;

        } catch (SQLException e) {
            return "ERR";
        } // try

    } // getStatus

    public static ArrayList<MovieObject> getAllMovies() {
        String sql = "SELECT * FROM movies";
        Statement st = null;
        ResultSet rs = null;
        ArrayList<MovieObject> movies = new ArrayList<>();

        try {
            Connection con = DriverManager.getConnection(url, username, password);
            if (con == null) {
                return null;
            }

            st = con.createStatement();
            if (st == null) {
                return null;
            }

            rs = st.executeQuery(sql);
            while (rs.next()) {
                int id = rs.getInt("movie_id");
                String title = rs.getString("title");
                String status = rs.getString("status");
                String trailerLink = rs.getString("trailer_link");
                String trailerPic = rs.getString("trailer_pic");
                String rating = rs.getString("rating");
                String genre = rs.getString("genre");

                System.out.println("ID: " + id + ", Title: " + title + ", Rating: " + rating + ", Genre: " + genre);

                MovieObject movie = new MovieObject(id, title, status, trailerLink, trailerPic, rating, genre);
                movies.add(movie);
            }
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }

        return movies;
    }

} // MovieAccess
