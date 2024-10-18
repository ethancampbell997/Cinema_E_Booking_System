package com.yourgroup.cinemaebooking;

public class LoggedInUser {
  private int user_id;
  private String full_name;
  private String password;
  private String email;
  private String phone;
  private String street;
  private String city;
  private String state;
  private String zip;
  private String role;
  private boolean promotional_opt_in;

  public String toStringEdit() {

    String string = "'" + full_name + "', ";
    string += "'" + phone + "', ";
    string += "'" + street + "', ";
    string += "'" + city + "', ";
    string += "'" + state + "', ";
    string += "'" + zip + "', ";
    string += "'User', ";

    return string;

  } // toString

  public int getUser_id() {
    return user_id;
  }
} // LoggedInUser
