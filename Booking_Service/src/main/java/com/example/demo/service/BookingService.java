package com.example.demo.service;
import java.util.List;

import com.example.demo.exception.NoProperDataException;
import com.example.demo.exception.BookingNotFoundException;
import com.example.demo.model.Booking;

public interface BookingService {
	public Booking getBookingById( int id) throws BookingNotFoundException;
	public Booking addBooking( Booking booking)  throws  NoProperDataException;
	public Booking updateBooking(Booking booking,Integer id)  throws BookingNotFoundException;
	public String deleteBooking( Integer id) throws BookingNotFoundException;
	public List<Booking> getAllBooking() throws BookingNotFoundException;
	

}
