package com.example.urlshortener.entity;
import jakarta.persistence.*;

@Entity 
@Table(name = "shortened_urls")
public class ShortenedUrl {
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "orignal_url", nullable = false)
    private String original_irl;

    
}
