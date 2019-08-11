package com.breadandboard.beans;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;


@Entity
@Table(name="trips")
public class Trip 
{
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "trip_generator" )
	@SequenceGenerator(name="trip_generator", sequenceName = "trip_id_seq", allocationSize=1)
	@Column(name="trip_id")
	private int tripId;
	
	@ManyToOne
	@JsonBackReference
	@JoinColumn(name="account_id")
	private User accountId;
	
	@Column(name="trip_name")
	private String tripName;
	
	@JsonIgnore
	@OneToMany(mappedBy="tripId")
	@JsonManagedReference
	private List<Destination> destinations;
	

	public Trip () {}

	public Trip(User accountId, String tripName) {
		super();
		this.accountId = accountId;
		this.tripName = tripName;
	}

	public Trip(int tripId, User accountId, String tripName) {
		super();
		this.tripId = tripId;
		this.accountId = accountId;
		this.tripName = tripName;
	}

	public int getTripId() {
		return tripId;
	}

	public void setTripId(int tripId) {
		this.tripId = tripId;
	}

	public List<Destination> getDestination() {
		return destinations;
	}
	
	public void setDestination(List<Destination> destinations) {
		this.destinations = destinations;
	}

	public User getAccountId() {
		return accountId;
	}

	public void setAccountId(User accountId) {
		this.accountId = accountId;
	}

	public String getTripName() {
		return tripName;
	}

	public void setTripName(String tripName) {
		this.tripName = tripName;
	}

	public List<Destination> getDestinations() {
		return destinations;
	}

	public void setDestinations(List<Destination> destinations) {
		this.destinations = destinations;
	}
	
}
