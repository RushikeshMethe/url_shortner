package com.example.urlshortener.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.urlshortener.entity.ShortenedUrl;

public interface ShortenedUrlRepository extends JpaRepository< ShortenedUrl, Long> {
    
}
