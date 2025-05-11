package com.healthrecord.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "appointments")
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "patient_id")
    private Patient patient;
    
    @ManyToOne
    @JoinColumn(name = "doctor_id")
    private Doctor doctor;
    
    private LocalDateTime dateTime;
    private String type; // Follow-up, New Patient, Emergency, Consultation
    private String status; // Scheduled, Completed, Cancelled, No Show
    private String notes;
    private String reason;
} 