package com.healthrecord.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable()
            .authorizeHttpRequests(auth -> auth
                // Public endpoints
                .requestMatchers("/api/auth/**").permitAll()
                
                // Doctor endpoints
                .requestMatchers("/api/doctors/**").hasRole("DOCTOR")
                .requestMatchers("/api/patients/**/update").hasRole("DOCTOR")
                .requestMatchers("/api/medical-histories/**/update").hasRole("DOCTOR")
                .requestMatchers("/api/appointments/**/update").hasRole("DOCTOR")
                .requestMatchers("/api/prescriptions/**/update").hasRole("DOCTOR")
                .requestMatchers("/api/lab-reports/**/update").hasRole("DOCTOR")
                
                // Patient endpoints (read-only)
                .requestMatchers("/api/patients/**/view").hasAnyRole("PATIENT", "DOCTOR")
                .requestMatchers("/api/medical-histories/**/view").hasAnyRole("PATIENT", "DOCTOR")
                .requestMatchers("/api/appointments/**/view").hasAnyRole("PATIENT", "DOCTOR")
                .requestMatchers("/api/prescriptions/**/view").hasAnyRole("PATIENT", "DOCTOR")
                .requestMatchers("/api/lab-reports/**/view").hasAnyRole("PATIENT", "DOCTOR")
                
                // Default deny
                .anyRequest().authenticated()
            )
            .httpBasic();
        
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
} 