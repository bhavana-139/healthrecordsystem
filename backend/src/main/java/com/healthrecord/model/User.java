package com.healthrecord.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String username;
    private String password;
    private String email;
    private String role; // "PATIENT" or "DOCTOR"
    private String fullName;
    private String phoneNumber;
    private String address;
} 