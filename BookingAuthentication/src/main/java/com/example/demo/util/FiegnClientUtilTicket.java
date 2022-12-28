package com.example.demo.util;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;

import com.example.demo.models.Ticket;

@FeignClient(value="Booking-details",url="http://localhost:8081/api/v3")
public interface FiegnClientUtilTicket {
	
	@GetMapping("/alltickets") 
	public ResponseEntity<List<Ticket>> getAllTickets(@RequestHeader("Authorization") String token);
	

	@PostMapping("/addTickets") 
	public ResponseEntity<Ticket> addTickets(@RequestBody Ticket ticket);


	@DeleteMapping(path="/tickets/{id}")
	public ResponseEntity<String> deleteTicket(@RequestHeader("Authorization") String token,@PathVariable int id);
	

}