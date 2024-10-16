package com.yourgroup.cinemaebooking;

import com.yourgroup.cinemaebooking.utilities.*;

public class NewUser {

  private String name;
  private String email;
  private String password;
  private String phone;
  private String payment;
  private String cardNumber;
  private String expiration;
  private String street;
  private String city;
  private String state;
  private String zip;
  private boolean promotion;

  public void hashPassword() {

    setPassword(PasswordUtility.hashPass(this.password));

  } // hashPassword

  public String toString() {

    String string = "'" + name + "', ";
    string += "'" + email + "', ";
    string += "'" + password + "', ";
    string += "'" + phone + "', ";
    string += "'" + street + "', ";
    string += "'" + city + "', ";
    string += "'" + state + "', ";
    string += "'" + zip + "', ";
    string += "'User', ";

    String promoAsInt = "";
    if (promotion) {
      promoAsInt = "1";
    } else {
      promoAsInt = "0";
    } // if

    string += "'" + promoAsInt + "'";

    return string;

  } // toString

  public String toStringEdit() {

    String string = "'" + name + "', ";
    string += "'" + phone + "', ";
    string += "'" + street + "', ";
    string += "'" + city + "', ";
    string += "'" + state + "', ";
    string += "'" + zip + "', ";
    string += "'User', ";

    String promoAsInt = "";
    if (promotion) {
      promoAsInt = "1";
    } else {
      promoAsInt = "0";
    } // if

    string += "'" + promoAsInt + "'";

    return string;

  } // toString

  public void encryptCard() {
    if ((!(cardNumber == null)) && (!(cardNumber.isEmpty()))) {
      cardNumber = CardUtility.encryptCreditCard(cardNumber);
      System.out.println(cardNumber);
    } // if
  } // encryptCard

  public String cardToString() {
    System.out.println(payment);
    if ((payment == null) ||
        payment.isEmpty() ||
        (cardNumber == null) ||
        cardNumber.isEmpty() ||
        (expiration == null)) {

      return "";
    
    } // if

    String string = "'" + payment + "', ";
    string += "'" + cardNumber + "', ";
    string += "'" + expiration + "', ";
    
    return string;

  } // cardToString

  public void fixDate() {
    if ((this.expiration != null) && !(this.expiration.isEmpty())) {
      this.expiration = convertDate(expiration);
    } // if
  } // fixDate

  private String convertDate(String temp) {
    String month = temp.substring(0, 2);
    String year = temp.substring(3);
    System.out.println("date = " + year + "-" + month + "-01");
    return (year + "-" + month + "-01");

  } // convertDate

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getPhone() {
    return phone;
  }

  public void setPhone(String phone) {
    this.phone = phone;
  }

  public String getPayment() {
    return payment;
  }

  public void setPayment(String payment) {
    this.payment = payment;
  }

  public String getCardNumber() {
    return cardNumber;
  }

  public void setCardNumber(String cardNumber) {
    this.cardNumber = cardNumber;
  }

  public String getExpiration() {
    return expiration;
  }

  public void setExpiration(String expiration) {
    this.expiration = expiration;
  }

  public String getStreet() {
    return street;
  }

  public void setStreet(String street) {
    this.street = street;
  }

  public String getCity() {
    return city;
  }

  public void setCity(String city) {
    this.city = city;
  }

  public String getState() {
    return state;
  }

  public void setState(String state) {
    this.state = state;
  }

  public String getZip() {
    return zip;
  }

  public void setZip(String zip) {
    this.zip = zip;
  }

  public boolean getPromotion() {
    return promotion;
  }

  public void setPromotion(boolean wantsPromo) {
    this.promotion = wantsPromo;
  }

} // User
