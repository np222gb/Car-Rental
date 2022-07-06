package com.example.rental;

import com.example.rental.model.CarsBooked;
import com.example.rental.repository.CarsBookedRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.util.Assert;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@SpringBootTest
@AutoConfigureMockMvc
@TestPropertySource(
	locations = "classpath:application-integrationtest.properties")
class RentalApplicationTests {

	@Autowired
	private MockMvc mvc;

	@Autowired
	CarsBookedRepository carsBookedRepository;

	@Test
	void shouldReturnCarBookingsFromDatabase() throws Exception {
		this.mvc.perform(get("http://localhost:8080/api/v1/carsbooked"))
			.andDo(print())
			.andExpect(status().isOk());
	}

	@Test
	public void shouldCreateCarBookingToDatabase(){
		CarsBooked carsBooked = new CarsBooked();
		carsBooked.setId(100);
		carsBooked.setDriverName("Rodhy");
		carsBooked.setCar("Volvo");
		carsBooked.setPickDate("2022-06-23");
		carsBooked.setReturnDate("2022-06-26");
		carsBooked.setPrice("3000");
		Assert.notNull(carsBookedRepository.save(carsBooked));//created object to the database and must not be null
	}

}
