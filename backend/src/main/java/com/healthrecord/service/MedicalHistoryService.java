package com.healthrecord.service;

import com.healthrecord.model.MedicalHistory;
import com.healthrecord.model.User;
import com.healthrecord.repository.MedicalHistoryRepository;
import com.healthrecord.repository.UserRepository;
import com.healthrecord.exception.UnauthorizedModificationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class MedicalHistoryService {
    @Autowired
    private MedicalHistoryRepository medicalHistoryRepository;
    
    @Autowired
    private UserRepository userRepository;
    
    public MedicalHistory createMedicalHistory(MedicalHistory medicalHistory) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByUsername(auth.getName())
            .orElseThrow(() -> new RuntimeException("User not found"));
            
        if (!"DOCTOR".equals(user.getRole())) {
            throw new UnauthorizedModificationException("Only doctors can create medical history records");
        }
        
        return medicalHistoryRepository.save(medicalHistory);
    }
    
    public MedicalHistory updateMedicalHistory(MedicalHistory medicalHistory) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByUsername(auth.getName())
            .orElseThrow(() -> new RuntimeException("User not found"));
            
        if (!"DOCTOR".equals(user.getRole())) {
            throw new UnauthorizedModificationException("Only doctors can update medical history records");
        }
        
        MedicalHistory existingHistory = medicalHistoryRepository.findById(medicalHistory.getId())
            .orElseThrow(() -> new RuntimeException("Medical History not found"));
        
        existingHistory.setDiagnosis(medicalHistory.getDiagnosis());
        existingHistory.setSymptoms(medicalHistory.getSymptoms());
        existingHistory.setTreatment(medicalHistory.getTreatment());
        existingHistory.setNotes(medicalHistory.getNotes());
        existingHistory.setFollowUpRequired(medicalHistory.getFollowUpRequired());
        existingHistory.setFollowUpDate(medicalHistory.getFollowUpDate());
        
        return medicalHistoryRepository.save(existingHistory);
    }
    
    public List<MedicalHistory> getMedicalHistoryByPatient(Long patientId) {
        return medicalHistoryRepository.findByPatientId(patientId);
    }
    
    public List<MedicalHistory> getMedicalHistoryByDoctor(Long doctorId) {
        return medicalHistoryRepository.findByDoctorId(doctorId);
    }
    
    public List<MedicalHistory> getMedicalHistoryByPatientAndDoctor(Long patientId, Long doctorId) {
        return medicalHistoryRepository.findByPatientIdAndDoctorId(patientId, doctorId);
    }
} 