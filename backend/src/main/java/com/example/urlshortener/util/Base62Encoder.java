package com.example.urlshortener.util;

import org.springframework.stereotype.Component;
import java.math.BigInteger;

@Component 
public class Base62Encoder {

    public static final String BASE62_CHAR_SET = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    public static final BigInteger BASE = BigInteger.valueOf(62);
    

}
