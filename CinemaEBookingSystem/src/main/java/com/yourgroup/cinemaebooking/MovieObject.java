package com.yourgroup.cinemaebooking;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class MovieObject {
    @Id
    private int id;
    private String title;
    private String status;
    private String trailerLink;
    private String trailerPic;

    public MovieObject() {
        id = -1;
        title = "ERR";
        status = "ERR";
        trailerLink = "ERR";
        trailerPic = "ERR";
    }

    public MovieObject(String t) {
        id = MovieAccess.getID(t);
        if (id == -1) {
            /* Error when querying database */
            title = "ERR";
            status = "ERR";
            trailerLink = "ERR";
            trailerPic = "ERR";

        } else if (id == 0) {
            /* Movie with title t does not exist */
            title = "DNE";
            status = "DNE";
            trailerLink = "DNE";
            trailerPic = "DNE";

        } else {
            title = t;
            status = MovieAccess.getStatus(id);
            trailerLink = MovieAccess.getTrailerLink(id);
            trailerPic = MovieAccess.getTrailerPic(id);

        } // if

    } // MovieObject

    public String getTitle() {
        return title;

    } // getTitle

    public String getStatus() {
        return status;

    } // getStatus

    public String getTrailerLink() {
        return trailerLink;

    } // getTrailerLink

    public String getTrailerPic() {
        return trailerPic;

    } // getTrailerPic

    public String toString() {
        String temp = title + ", " + trailerLink + ", " + trailerPic;
        return temp;

    } // toString

} // MovieObject

