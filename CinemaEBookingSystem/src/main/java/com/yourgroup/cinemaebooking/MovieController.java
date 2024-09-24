package com.yourgroup.cinemaebooking;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/movies")
public class MovieController {
    @Autowired

    @GetMapping("/search")
    public static String searchTitle(@RequestBody String title) {
        for (MovieObject movie : movieDB) {
            if (movie.getTitle().equalsIgnoreCase(title)) {
                return movie.toString();
            }
        }
        return null;
    }
}
