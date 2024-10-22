package com.yourgroup.cinemaebooking;

public class PaymentCard {
    private int card_id;
    private int card_number;
    private String expiration_date;
    private int user_id;
    private String card_type;

    public PaymentCard(int id, int number, String date, int uId, String type) {
        this.card_id = id;
        this.card_number = number;
        this.expiration_date = date;
        this.user_id = uId;
        this.card_type = type;
    } // PaymentCard

    public int getCardId() {
        return this.card_id;
    }

    public void setCardId(int newId) {
        this.card_id = newId;
    }

    public int getCardNumber() {
        return this.card_number;
    }

    public void setCardNumber(int newNumber) {
        this.card_number = newNumber;
    }

    public String getExpirationDate() {
        return this.expiration_date;
    }

    public void setExpirationDate(String newDate) {
        this.expiration_date = newDate;
    }

    public int getUserId() {
        return this.user_id;
    }

    public void setUserId(int newId) {
        this.user_id = newId;
    }

    public String getType() {
        return this.card_type;
    }

    public void setType(String newType) {
        this.card_type = newType;
    }
    
} // PaymentCard
