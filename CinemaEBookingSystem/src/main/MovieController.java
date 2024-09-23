package main;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/movies")
public class MovieController {

	public List<Movie> movieDB = new ArrayList<>();
	
	public MovieController() { // add movies from db to arraylist
        movies.add(new Movie("Inception"));
        movies.add(new Movie("The Matrix"));
        movies.add(new Movie("Interstellar"));
        movies.add(new Movie("The Dark Knight"));
    }
	
	@GetMapping("/search")
	public static String searchTitle(List<Movie> movies, String title) {
         for (Movie movie : movies) {
                if (movie.getTitle().equalsIgnoreCase(title)) {
                    return movie.getTitle();
                }
            }
            return null;
     }
}
