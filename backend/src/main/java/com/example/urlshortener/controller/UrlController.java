package com.example.urlshortener.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.urlshortener.dto.CreateUrlRequest;
import com.example.urlshortener.dto.CreateUrlResponse;
import com.example.urlshortener.service.UrlShortenerService;

@RestController
@RequestMapping("/api/v1/urls")
public class UrlController {

    private final UrlShortenerService service;

    public UrlController(UrlShortenerService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<CreateUrlResponse> createUrl(
            @RequestBody CreateUrlRequest request) {

        String shortUrl = service.createShortUrl(request.getUrl());

        return ResponseEntity
                .status(201)
                .body(new CreateUrlResponse(shortUrl));
    }
}