package com.healthrecord.service;

import com.healthrecord.model.Prescription;
import com.healthrecord.repository.PrescriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PrescriptionService {
    @Autowired
    private PrescriptionRepository prescriptionRepository;
    
    public Prescription createPrescription(Prescription prescription) {
        return prescriptionRepository.save(prescription);
    }
    
    public Prescription updatePrescription(Prescription prescription) {
        Prescription existingPrescription = prescriptionRepository.findById(prescription.getId())
            .orElseThrow(() -> new RuntimeException("Prescription not found"));
        
        existingPrescription.setDrug(prescription.getDrug());
        existingPrescription.setDosage(prescription.getDosage());
        existingPrescription.setFrequency(prescription.getFrequency());
        existingPrescription.setStartDate(prescription.getStartDate());
        existingPrescription.setEndDate(prescription.getEndDate());
        existingPrescription.setNotes(prescription.getNotes());
        existingPrescription.setIssue(prescription.getIssue());
        
        return prescriptionRepository.save(existingPrescription);
    }
    
    public List<Prescription> getPrescriptionsByPatient(Long patientId) {
        return prescriptionRepository.findByPatientId(patientId);
    }
    
    public List<Prescription> getPrescriptionsByDoctor(Long doctorId) {
        return prescriptionRepository.findByDoctorId(doctorId);
    }
    
    public List<Prescription> getPrescriptionsByPatientAndIssue(Long patientId, String issue) {
        return prescriptionRepository.findByPatientIdAndIssue(patientId, issue);
    }
} 