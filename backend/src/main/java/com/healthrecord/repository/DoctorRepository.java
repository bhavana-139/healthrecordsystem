package com.healthrecord.repository;

import com.healthrecord.model.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {
    List<Doctor> findBySpecialization(String specialization);
    Doctor findByUserId(Long userId);
    List<Doctor> findByPatientsId(Long patientId);
} 