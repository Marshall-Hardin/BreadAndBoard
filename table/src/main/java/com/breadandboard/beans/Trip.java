package com.breadandboard.beans;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name="trips")
public class Trip 
{
	@Id
	@GeneratedValue
	@Column(name="trip_id")
	int tripId;
	
	@ManyToOne
	@JoinColumn(name="account_id")
	User accountId;
	
	@Column(name="access_timestamp")
	@Temporal(value = TemporalType.TIMESTAMP)
	Date accessTimestamp;
	
	@Column(name="trip_name")
	String tripName;
	
	@OneToMany(mappedBy="destinations")
	private Destination destination;
	
	public Destination getDestination() {
		return destination;
	}

	public void setDestination(Destination destination) {
		this.destination = destination;
	}

	public Trip () {}

	public Trip(User accountId, Date accessTimestamp, String tripName) {
		super();
		this.accountId = accountId;
		this.accessTimestamp = accessTimestamp;
		this.tripName = tripName;
	}

	public Trip(int tripId, User accountId, Date accessTimestamp, String tripName) {
		super();
		this.tripId = tripId;
		this.accountId = accountId;
		this.accessTimestamp = accessTimestamp;
		this.tripName = tripName;
	}

	public int getTripId() {
		return tripId;
	}

	public void setTripId(int tripId) {
		this.tripId = tripId;
	}

	public User getAccountId() {
		return accountId;
	}

	public void setAccountId(User accountId) {
		this.accountId = accountId;
	}

	public Date getAccessTimestamp() {
		return accessTimestamp;
	}

	public void setAccessTimestamp(Date accessTimestamp) {
		this.accessTimestamp = accessTimestamp;
	}

	public String getTripName() {
		return tripName;
	}

	public void setTripName(String tripName) {
		this.tripName = tripName;
	}
}