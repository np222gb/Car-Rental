package com.example.rental.controller;

import com.example.rental.model.CarsBooked;
import com.example.rental.repository.CarsBookedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class CarsBookedController {

	@Autowired
    private CarsBookedRepository carsBookedRepository;

    // get all cars booked
    @GetMapping("carsbooked")
    public List<CarsBooked> getAllCarsBookings() {
              return this.carsBookedRepository.findAll();
        }

    // save cars booked rest api
    @PostMapping("carsbooked")
    public CarsBooked createCarsBooked(@RequestBody CarsBooked carsbooked) {
        return this.carsBookedRepository.save(carsbooked);
    }

}
