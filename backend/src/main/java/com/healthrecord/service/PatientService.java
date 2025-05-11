package com.healthrecord.service;

import com.healthrecord.model.Patient;
import com.healthrecord.model.Doctor;
import com.healthrecord.repository.PatientRepository;
import com.healthrecord.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PatientService {
    @Autowired
    private PatientRepository patientRepository;
    
    @Autowired
    private DoctorRepository doctorRepository;
    
    public Patient createPatient(Patient patient) {
        return patientRepository.save(patient);
    }
    
    public Patient updatePatient(Patient patient) {
        Patient existingPatient = patientRepository.findById(patient.getId())
            .orElseThrow(() -> new RuntimeException("Patient not found"));
        
        existingPatient.setBloodGroup(patient.getBloodGroup());
        existingPatient.setAllergies(patient.getAllergies());
        existingPatient.setChronicConditions(patient.getChronicConditions());
        
        return patientRepository.save(existingPatient);
    }
    
    public List<Patient> getPatientsByDoctor(Long doctorId) {
        return patientRepository.findByAssignedDoctorsId(doctorId);
    }
    
    public Patient getPatientByUserId(Long userId) {
        return patientRepository.findByUserId(userId);
    }
    
    public void assignDoctorToPatient(Long patientId, Long doctorId) {
        Patient patient = patientRepository.findById(patientId)
            .orElseThrow(() -> new RuntimeException("Patient not found"));
        Doctor doctor = doctorRepository.findById(doctorId)
            .orElseThrow(() -> new RuntimeException("Doctor not found"));
        
        patient.getAssignedDoctors().add(doctor);
        patientRepository.save(patient);
    }
} 