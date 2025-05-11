package com.healthrecord.service;

import com.healthrecord.model.Appointment;
import com.healthrecord.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class AppointmentService {
    @Autowired
    private AppointmentRepository appointmentRepository;
    
    public Appointment createAppointment(Appointment appointment) {
        return appointmentRepository.save(appointment);
    }
    
    public Appointment updateAppointment(Appointment appointment) {
        Appointment existingAppointment = appointmentRepository.findById(appointment.getId())
            .orElseThrow(() -> new RuntimeException("Appointment not found"));
        
        existingAppointment.setDateTime(appointment.getDateTime());
        existingAppointment.setType(appointment.getType());
        existingAppointment.setStatus(appointment.getStatus());
        existingAppointment.setNotes(appointment.getNotes());
        existingAppointment.setReason(appointment.getReason());
        
        return appointmentRepository.save(existingAppointment);
    }
    
    public List<Appointment> getAppointmentsByPatient(Long patientId) {
        return appointmentRepository.findByPatientId(patientId);
    }
    
    public List<Appointment> getAppointmentsByDoctor(Long doctorId) {
        return appointmentRepository.findByDoctorId(doctorId);
    }
    
    public List<Appointment> getAppointmentsByDoctorAndDateRange(Long doctorId, LocalDateTime start, LocalDateTime end) {
        return appointmentRepository.findByDoctorIdAndDateTimeBetween(doctorId, start, end);
    }
    
    public List<Appointment> getAppointmentsByPatientAndDateRange(Long patientId, LocalDateTime start, LocalDateTime end) {
        return appointmentRepository.findByPatientIdAndDateTimeBetween(patientId, start, end);
    }
} 