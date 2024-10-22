package com.yourgroup.cinemaebooking;

import com.yourgroup.cinemaebooking.accessors.MovieAccess;

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
    private String rating;
    private String genre;

    public MovieObject() {
        id = -1;
        title = "ERR";
        status = "ERR";
        trailerLink = "ERR";
        trailerPic = "ERR";
        rating = "ERR";
        genre = "ERR";
    }
    public MovieObject(int id, String title, String status, String trailerLink, String trailerPic, String rating, String genre) {
        this.id = id;
        this.title = title;
        this.status = status;
        this.trailerLink = trailerLink;
        this.trailerPic = trailerPic;
        this.rating = rating;
        this.genre = genre;
    }

    public MovieObject(String t) {
        id = MovieAccess.getID(t);
        if (id == -1) {
            /* Error when querying database */
            title = "ERR";
            status = "ERR";
            trailerLink = "ERR";
            trailerPic = "ERR";
            rating = "ERR";
            genre = "ERR";
        } else if (id == 0) {
            /* Movie with title t does not exist */
            title = "DNE";
            status = "DNE";
            trailerLink = "DNE";
            trailerPic = "DNE";
            rating = "DNE";
            genre = "DNE";
        } else {
            title = t;
            status = MovieAccess.getStatus(id);
            trailerLink = MovieAccess.getTrailerLink(id);
            trailerPic = MovieAccess.getTrailerPic(id);
            rating = MovieAccess.getRating(id);
            genre = MovieAccess.getGenre(id);
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

    public String getRating() {
        return rating;
    } // getRating

    public String getGenre() {
        return genre;
    } // getGenre

    public String toString() {
        String temp = title + ", " + status + ", " + trailerLink + ", " + trailerPic + ", " + rating + ", " + genre;
        return temp;
    } // toString

} // MovieObject

