package com.example.demo.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "db_sequence")
	
		public class DbSequenceTicket {
		    @Id
		    private String  id;
		    private int seq;
			public String getId() {
				return id;
			}
			public void setId(String id) {
				this.id = id;
			}
			public int getSeq() {
				return seq;
			}
			public void setSeq(int seq) {
				this.seq = seq;
			}
		

	}



