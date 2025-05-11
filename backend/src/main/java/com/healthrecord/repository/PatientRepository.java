package com.healthrecord.repository;

import com.healthrecord.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface PatientRepository extends JpaRepository<Patient, Long> {
    List<Patient> findByAssignedDoctorsId(Long doctorId);
    Patient findByUserId(Long userId);
} 