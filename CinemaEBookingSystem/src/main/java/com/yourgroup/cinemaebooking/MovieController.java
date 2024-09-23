package com.yourgroup.cinemaebooking;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.ArrayList;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/movies")
public class MovieController {
    @Autowired

    public List<MovieObject> movieDB = new ArrayList<>();

    public MovieController() { // add movies from db to arraylist
        movieDB.add(new MovieObject("Inception"));
        movieDB.add(new MovieObject("The Matrix"));
        movieDB.add(new MovieObject("Interstellar"));
        movieDB.add(new MovieObject("The Dark Knight"));
    }

    @GetMapping("/search")
    public static String searchTitle(List<MovieObject> movieDB, @RequestBody String title) {
        for (MovieObject movie : movieDB) {
            if (movie.getTitle().equalsIgnoreCase(title)) {
                return movie.getTitle();
            }
        }
        return null;
    }
}
