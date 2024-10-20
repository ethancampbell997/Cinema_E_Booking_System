package com.yourgroup.cinemaebooking.controllers;

import org.springframework.web.bind.annotation.*;

import com.yourgroup.cinemaebooking.MovieObject;
import com.yourgroup.cinemaebooking.accessors.MovieAccess;

import java.util.List;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/movies")
public class MovieController {
    
    @PostMapping("/search") // Change to POST
    public String searchTitle(@RequestBody MovieRequest request) {
        String title = request.getTitle(); // Extract title from request body
        if (title.isEmpty()) {
            return "Title parameter is required.";
        }

        MovieObject m = new MovieObject(title);
        if (m.getTitle().equalsIgnoreCase("ERR")) {
            return "ERR";
        } else if (m.getTitle().equalsIgnoreCase("DNE")) {
            return "DNE";
        }

        return m.toString();
    }
    @GetMapping("/all")
    public List<MovieObject> getAllMovies() {
        return MovieAccess.getAllMovies();
    }
}

// Create a DTO for the request
class MovieRequest {
    private String title;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
