package com.healthrecord.service;

import com.healthrecord.model.Doctor;
import com.healthrecord.model.Patient;
import com.healthrecord.repository.DoctorRepository;
import com.healthrecord.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class DoctorService {
    @Autowired
    private DoctorRepository doctorRepository;
    
    @Autowired
    private PatientRepository patientRepository;
    
    public Doctor createDoctor(Doctor doctor) {
        return doctorRepository.save(doctor);
    }
    
    public Doctor updateDoctor(Doctor doctor) {
        Doctor existingDoctor = doctorRepository.findById(doctor.getId())
            .orElseThrow(() -> new RuntimeException("Doctor not found"));
        
        existingDoctor.setSpecialization(doctor.getSpecialization());
        existingDoctor.setLicenseNumber(doctor.getLicenseNumber());
        existingDoctor.setExperience(doctor.getExperience());
        existingDoctor.setEducation(doctor.getEducation());
        existingDoctor.setHospital(doctor.getHospital());
        
        return doctorRepository.save(existingDoctor);
    }
    
    public List<Doctor> getDoctorsBySpecialization(String specialization) {
        return doctorRepository.findBySpecialization(specialization);
    }
    
    public Doctor getDoctorByUserId(Long userId) {
        return doctorRepository.findByUserId(userId);
    }
    
    public List<Doctor> getDoctorsByPatient(Long patientId) {
        return doctorRepository.findByPatientsId(patientId);
    }
} 