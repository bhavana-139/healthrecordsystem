package com.healthrecord.repository;

import com.healthrecord.model.LabReport;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface LabReportRepository extends JpaRepository<LabReport, Long> {
    List<LabReport> findByPatientId(Long patientId);
    List<LabReport> findByDoctorId(Long doctorId);
    List<LabReport> findByPatientIdAndIssue(Long patientId, String issue);
    List<LabReport> findByStatus(String status);
} 