package com.yourgroup.cinemaebooking;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/movies")
public class MovieController {
    @Autowired

    @GetMapping("/search")
    public String searchTitle(@RequestBody String title) {
        MovieObject m = new MovieObject(title);
        if (MovieObject.getTitle().equalsIgnoreCase("ERR")) {
            return "ERR";
        } else if (MovieObject.getTitle().equalsIgnoreCase("DNE")) {
            return "DNE";
        }

        return MovieObject.toString();
    }
}
