package com.example.urlshortener.entity;
import java.time.Instant;

import jakarta.persistence.*;

@Entity 
@Table(name = "shortened_urls")
public class ShortenedUrl {
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "original_url", nullable = false)
    private String originalUrl;

    @Column(name = "created_at", nullable = false)
    private Instant createdAt; 
}
