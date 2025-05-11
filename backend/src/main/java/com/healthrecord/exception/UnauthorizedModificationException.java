package com.healthrecord.exception;

public class UnauthorizedModificationException extends RuntimeException {
    public UnauthorizedModificationException(String message) {
        super(message);
    }
} 