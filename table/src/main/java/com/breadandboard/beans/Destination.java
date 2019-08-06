package com.breadandboard.beans;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * 
 * @author Paul Hudspeth
 *
 */

@Entity @IdClass(DestinationId.class)
@Table(name="destinations")
public class Destination 
{
	
	@Id
	@Column(name = "dest_trip_id")
	@ManyToOne
	@JoinColumn(name="trip_id")
	Trip trip;
	@Id
	@Column(name = "dest_number")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int destNumber;
	@Column(name = "dest_date")
	Date destDate;
	@Column(name = "dest_location")
	String location;
	
	public Destination() {}
	
	public Destination(int destNumber, Date destDate, String location) {
		super();
		this.destNumber = destNumber;
		this.destDate = destDate;
		this.location = location;
	}

	public Destination(Trip trip, int destNumber, Date destDate, String location) {
		super();
		this.trip = trip;
		this.destNumber = destNumber;
		this.destDate = destDate;
		this.location = location;
	}
	
	public Trip getTripId() {
		return trip;
	}
	public void setTripId(Trip tripId) {
		this.trip = tripId;
	}
	public int getDestNumber() {
		return destNumber;
	}
	public void setDestNumber(int destNumber) {
		this.destNumber = destNumber;
	}
	public Date getDestDate() {
		return destDate;
	}
	public void setDestDate(Date destDate) {
		this.destDate = destDate;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	
}
