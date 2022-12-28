package com.example.demo.models;

import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


	@Data
	@AllArgsConstructor
	@NoArgsConstructor
	@Document(collection="booking_details")
	public class Ticket {
		
		public static final String SEQUENCE_NAME = "order_sequence";
		@Id
	    private int bookingOrderId;
	   private String bookingDate;
	    private String transactionMode;
		private int quantity;
		double totalCost;
		public int getBookingOrderId() {
			return bookingOrderId;
		}
		public void setBookingOrderId(int bookingOrderId) {
			this.bookingOrderId = bookingOrderId;
		}
		public String getBookingDate() {
			return bookingDate;
		}
		public void setBookingDate(String bookingDate) {
			this.bookingDate = bookingDate;
		}
		public String getTransactionMode() {
			return transactionMode;
		}
		public void setTransactionMode(String transactionMode) {
			this.transactionMode = transactionMode;
		}
		public int getQuantity() {
			return quantity;
		}
		public void setQuantity(int quantity) {
			this.quantity = quantity;
		}
		public double getTotalCost() {
			return totalCost;
		}
		public void setTotalCost(double totalCost) {
			this.totalCost = totalCost;
		}
}
