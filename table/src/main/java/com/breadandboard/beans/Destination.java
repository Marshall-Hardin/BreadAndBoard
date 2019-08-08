package com.breadandboard.beans;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * 
 * @author Paul Hudspeth
 *
 */

@Entity 
@Table(name="destinations")
public class Destination 
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int destId;
	
	@ManyToOne
	@JoinColumn(name="dest_trip_id")
	private Trip tripId;
	
	@Column(name = "dest_number")
	private int destNumber;
	
	@Column(name = "dest_date")
	private Date destDate;
	
	@Column(name = "dest_location")
	private String location;
	
	@Column(name = "dest_lat")
	private double destLat;
	
	@Column(name = "dest_long")
	private double destLong;
	
	public int getDestId() {
		return destId;
	}

	public void setDestId(int destId) {
		this.destId = destId;
	}

	public double getDestLat() {
		return destLat;
	}

	public void setDestLat(double destLat) {
		this.destLat = destLat;
	}

	public Destination() {}
	
	public Destination(int destId, Trip tripId, int destNumber, Date destDate, String location, double destLat,
			double destLong) {
		super();
		this.destId = destId;
		this.tripId = tripId;
		this.destNumber = destNumber;
		this.destDate = destDate;
		this.location = location;
		this.destLat = destLat;
		this.destLong = destLong;
	}

	public Destination(Trip tripId, int destNumber, Date destDate, String location, double destLat, double destLong) {
		super();
		this.tripId = tripId;
		this.destNumber = destNumber;
		this.destDate = destDate;
		this.location = location;
		this.destLat = destLat;
		this.destLong = destLong;
	}

	public Trip getTripId() {
		return tripId;
	}
	public void setTripId(Trip tripId) {
		this.tripId = tripId;
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
