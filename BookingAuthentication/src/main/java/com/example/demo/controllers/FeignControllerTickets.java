package com.example.demo.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.NoProperDataException;
import com.example.demo.exception.TicketNotFoundException;
import com.example.demo.models.Ticket;
import com.example.demo.services.SequenceGeneratorService;
import com.example.demo.util.FiegnClientUtilTicket;

@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/api/v3")
public class FeignControllerTickets {
	
	@Autowired
	private FiegnClientUtilTicket feignclientutilticket;

	@Autowired
	private SequenceGeneratorService service;
	
	@GetMapping("/alltickets") 
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<List<Ticket>> getAllTickets(@RequestHeader("Authorization") String token) throws TicketNotFoundException {
	{
		
		return feignclientutilticket.getAllTickets(token);
		
	}
	
	}
	
@PostMapping("/addTickets")
	@PreAuthorize("hasRole('USER') ")
	public ResponseEntity<Ticket> addTickets(@RequestBody Ticket ticket) throws NoProperDataException {
	
		ticket.setBookingOrderId(service.getSequenceNumberForOrder(Ticket.SEQUENCE_NAME));
		return feignclientutilticket.addTickets(ticket);
	}



	@DeleteMapping(path="/tickets/{id}")
	@PreAuthorize("hasRole('ADMIN') ")
	public ResponseEntity<String> deleteOrder(@RequestHeader("Authorization") String token,@PathVariable Integer id) throws TicketNotFoundException {
			return feignclientutilticket.deleteTicket(token,id);
	}

}



