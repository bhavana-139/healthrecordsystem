package com.healthrecord.repository;

import com.healthrecord.model.MedicalHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface MedicalHistoryRepository extends JpaRepository<MedicalHistory, Long> {
    List<MedicalHistory> findByPatientId(Long patientId);
    List<MedicalHistory> findByDoctorId(Long doctorId);
    List<MedicalHistory> findByPatientIdAndDoctorId(Long patientId, Long doctorId);
} 