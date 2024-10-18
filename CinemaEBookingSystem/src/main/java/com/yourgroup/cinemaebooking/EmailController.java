package com.yourgroup.cinemaebooking.controllers;

import com.yourgroup.cinemaebooking.EmailSenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/email")
public class EmailController {
    @Autowired
    private EmailSenderService emailSenderService;

    @PostMapping("/sendMail")
    //@EventListener(ApplicationReadyEvent.class)
    public void sendMail() {
        emailSenderService.sendEmail("kazemiazad1@gmail.com", "Confirmation", "Confirmation");
    }
}
