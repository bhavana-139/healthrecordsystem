package com.healthrecord.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "lab_reports")
public class LabReport {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "patient_id")
    private Patient patient;
    
    @ManyToOne
    @JoinColumn(name = "doctor_id")
    private Doctor doctor;
    
    private LocalDateTime date;
    private String testName;
    private String testResults;
    private String notes;
    private String issue; // The medical issue this lab report is for
    private String labName;
    private String status; // Pending, Completed, Cancelled
} 