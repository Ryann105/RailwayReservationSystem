package com.example.demo.model;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection="booking_tickets")
public class Booking {
	public static final String SEQUENCE_NAME = "booking_sequence";
	@Id
	private	Integer bookingId;
	public Integer getBookingId() {
		return bookingId;
	}

	public void setBookingId(Integer bookingId) {
		this.bookingId = bookingId;
	}

	@NotNull
	private	String trainName;
	
	public String getTrainName() {
		return trainName;
	}

	public void setTrainName(String trainName) {
		this.trainName = trainName;
	}

	@NotBlank(message="source")
	@Size(max=20)
	private String source;
	
	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	@NotBlank(message="destination")
	@Size(max=40)
	private String destination;
	
	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	@NotBlank(message="NumberOfSeats")
	@Size(min=30)
	private Integer seatNum;
	
	public Integer getSeatNum() {
		return seatNum;
	}

	public void setSeatNum(Integer seatNum) {
		this.seatNum = seatNum;
	}

	@NotBlank(message="cost")
	@Size(min=10)
	private	double cost;
	
	 public double getCost() {
		return cost;
	}

	public void setCost(double cost) {
		this.cost = cost;
	}

	@Pattern(regexp = "^\\d{2}-\\d{2}-\\d{4}$", message = "Only digits are allowed for date in the format dd-mm-yyyy")
	    private String bookingDate;
	public String getBookingDate() {
		return bookingDate;
	}

	public void setBookingDate(String bookingDate) {
		this.bookingDate = bookingDate;
	}

	


}



