package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.exception.NoProperDataException;
import com.example.demo.exception.BookingNotFoundException;
import com.example.demo.model.Booking;
import com.example.demo.repository.BookingRepository;

import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
@Service
@Slf4j
public class BookingServiceImpl implements BookingService{
	@Autowired
	private BookingRepository bookingRepository;
	Logger logger = LoggerFactory.getLogger(BookingService.class);
	@Override
	public List<Booking> getAllBooking() throws BookingNotFoundException {
		// TODO Auto-generated method stub
		List<Booking> booking =new ArrayList<>();
		booking =bookingRepository.findAll();
		try {
		if(booking.size()==0){
			throw new BookingNotFoundException("Booking is empty");
		}
		}catch(BookingNotFoundException e)
		{
			logger.error(e.getMessage());
		}
		return booking;
	}

	@Override
	public Booking getBookingById(int id) throws BookingNotFoundException {
		Booking booking=bookingRepository.findById(id).orElseThrow(()-> new  BookingNotFoundException("booking Not Found"+id));

		return booking;
	}

	@Override
	public Booking addBooking(Booking booking) throws NoProperDataException {
		logger.info("start");
		if(booking!=null) 
		{
			bookingRepository.save(booking);
			logger.debug("booking added");
		}
		else
		{
			throw new NoProperDataException("Please fill fields");
		}
		return booking;	
	}

	@Override
	public Booking updateBooking(Booking booking, Integer id) throws BookingNotFoundException {
		Booking book=bookingRepository.findById(id).orElseThrow(()-> new BookingNotFoundException("booking not "+id));
    	booking.setBookingId(booking.getBookingId());
		booking.setTrainName(booking.getTrainName());
     	booking.setSource(booking.getSource());
		booking.setDestination(booking.getDestination());
		booking.setSeatNum(booking.getSeatNum());
		booking.setCost(booking.getCost());
		booking.setBookingDate(booking.getBookingDate());
		
		final Booking updatedBooking = bookingRepository.save(book);
		return updatedBooking;
	}

	@Override
	public String deleteBooking(Integer id) throws BookingNotFoundException {
		logger.info("Start delete");
		Optional isRemoved = bookingRepository.findById(id);
		if(isRemoved.isPresent())
		{
			bookingRepository.deleteById(id);
			logger.debug("deleted successfully {}",isRemoved.get());
		}
		else
		{
			throw new BookingNotFoundException("Id Not Available");
		}
		logger.info(" deleted End");
		return " deleted successfully";
	}

	
	}

