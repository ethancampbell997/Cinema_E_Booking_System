package com.yourgroup.cinemaebooking;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class MovieObject {
    @Id
    private int id;
    private String title;
    private String status;
    private String link;

    public MovieObject() {
        id = -1;
        title = "ERR";
        status = "ERR";
        link = "ERR";
    }

    public MovieObject(String t) {
        id = MovieAccess.getID(t);
        if (id == -1) {
            /* Error when querying database */
            title = "ERR";
            status = "ERR";
            link = "ERR";

        } else if (id == 0) {
            /* Movie with title t does not exist */
            title = "DNE";
            status = "DNE";
            link = "DNE";

        } else {
            title = t;
            status = MovieAccess.getStatus(id);
            link = MovieAccess.getLink(id);

        } // if

    } // MovieObject

    public String getTitle() {
        return title;

    } // getTitle

    public String getStatus() {
        return status;

    } // getStatus

    public String getLink() {
        return link;

    } // getLink

    public String toString() {
        String temp = title + ", " + link;
        return temp;

    } // toString

} // MovieObject

