package com.breadandboard.beans;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

/**
 * 
 * @author Zev
 *
 */

@Entity
@Table(name = "locations")
public class Location {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int locationId;
	
	@Column(name = "location_name")
	private String name;
	
	@Column(name = "location_address")
	private String address;
	
	@OneToMany(mappedBy = "reviewLocation")
	@JsonManagedReference
	private List<Review> reviews;
	
	public Location() {}

	public Location(int locationId, String name, String address) {
		super();
		this.locationId = locationId;
		this.name = name;
		this.address = address;
	}

	public int getLocationId() {
		return locationId;
	}

	public void setLocationId(int locationId) {
		this.locationId = locationId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public List<Review> getReviews() {
		return reviews;
	}

	public void setReviews(List<Review> reviews) {
		this.reviews = reviews;
	}
	
	
}
