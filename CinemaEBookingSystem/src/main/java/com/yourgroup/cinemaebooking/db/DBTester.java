package com.yourgroup.cinemaebooking.db;

import java.sql.SQLException;
import com.yourgroup.cinemaebooking.MovieAccess;
import com.yourgroup.cinemaebooking.MovieObject;

public class DBTester {
    public static void main(String[] args) throws Exception {
        MovieObject M = new MovieObject("The Matrix");
        System.out.println("Title: " + M.getTitle());
        System.out.println("Status: " + M.getStatus());
        System.out.println("Link: " + M.getLink());
    }
}
