package com.example.urlshortener.service;
import java.time.Instant;
import org.springframework.stereotype.Service;
import com.example.urlshortener.entity.ShortenedUrl;
import com.example.urlshortener.repository.ShortenedUrlRepository;
import com.example.urlshortener.util.Base62Encoder;

@Service
public class UrlShortenerService {

    private final ShortenedUrlRepository repository;
    private final Base62Encoder base62Encoder;

    public UrlShortenerService(
            ShortenedUrlRepository repository,
            Base62Encoder base62Encoder) {

        this.repository = repository;
        this.base62Encoder = base62Encoder;
    }

    public String createShortUrl(String originalUrl) {

        ShortenedUrl shortenedUrl = new ShortenedUrl();

        shortenedUrl.setOriginalUrl(originalUrl);
        shortenedUrl.setCreatedAt(Instant.now());

        ShortenedUrl savedUrl = repository.save(shortenedUrl);

        Long id = savedUrl.getId();

        String shortCode = base62Encoder.encode(id);

        return "http://localhost:8080/" + shortCode;
    }
}