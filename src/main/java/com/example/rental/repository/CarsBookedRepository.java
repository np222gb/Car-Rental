package com.example.rental.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.rental.model.CarsBooked;
import org.springframework.stereotype.Repository;

@Repository
public interface CarsBookedRepository extends JpaRepository<CarsBooked, Long> {

}
