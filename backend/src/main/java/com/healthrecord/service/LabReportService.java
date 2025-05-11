package com.healthrecord.service;

import com.healthrecord.model.LabReport;
import com.healthrecord.repository.LabReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class LabReportService {
    @Autowired
    private LabReportRepository labReportRepository;
    
    public LabReport createLabReport(LabReport labReport) {
        return labReportRepository.save(labReport);
    }
    
    public LabReport updateLabReport(LabReport labReport) {
        LabReport existingLabReport = labReportRepository.findById(labReport.getId())
            .orElseThrow(() -> new RuntimeException("Lab Report not found"));
        
        existingLabReport.setTestName(labReport.getTestName());
        existingLabReport.setTestResults(labReport.getTestResults());
        existingLabReport.setNotes(labReport.getNotes());
        existingLabReport.setIssue(labReport.getIssue());
        existingLabReport.setLabName(labReport.getLabName());
        existingLabReport.setStatus(labReport.getStatus());
        
        return labReportRepository.save(existingLabReport);
    }
    
    public List<LabReport> getLabReportsByPatient(Long patientId) {
        return labReportRepository.findByPatientId(patientId);
    }
    
    public List<LabReport> getLabReportsByDoctor(Long doctorId) {
        return labReportRepository.findByDoctorId(doctorId);
    }
    
    public List<LabReport> getLabReportsByPatientAndIssue(Long patientId, String issue) {
        return labReportRepository.findByPatientIdAndIssue(patientId, issue);
    }
    
    public List<LabReport> getLabReportsByStatus(String status) {
        return labReportRepository.findByStatus(status);
    }
} 