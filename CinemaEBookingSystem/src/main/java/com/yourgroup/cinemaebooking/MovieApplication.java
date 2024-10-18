package com.yourgroup.cinemaebooking;

import com.yourgroup.cinemaebooking.accessors.UserAccess;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.web.bind.annotation.RequestBody;

@SpringBootApplication
public class MovieApplication {
	@Autowired
	private EmailSenderService emailSenderService;

	public static void main(String[] args) {
		SpringApplication.run(MovieApplication.class, args);
	}
}
