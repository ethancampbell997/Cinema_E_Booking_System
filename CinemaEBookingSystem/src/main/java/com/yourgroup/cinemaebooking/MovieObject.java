package com.yourgroup.cinemaebooking;

public class MovieObject {
    private int id;
    private String title;
    private String status;
    private String link;
    private MovieAccess M;

    public MovieObject(String t) {
        M = new MovieAccess();
        int id = M.getID(t);
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
            status = M.getStatus(id);
            link = M.getLink(id);

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
