package com.breadandboard.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;


@Entity
@Table(name = "reviews")
public class Review {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@ManyToOne
	@JoinColumn(name = "review_user_id")
	private User userId;
	
	@Column(name = "review_rating")
	@Min(1)
	@Max(6)
	private int rating;
	
	@ManyToOne
	@JoinColumn(name = "review_location")
	private Location location;
	
	@Column(name = "review_title")
	private String title;
	
	@Column(name = "review_text")
	private String reviewText;

	public Review(int id, User userId, @Min(1) @Max(6) int rating, Location location, String title, String reviewText) {
		super();
		this.id = id;
		this.userId = userId;
		this.rating = rating;
		this.location = location;
		this.title = title;
		this.reviewText = reviewText;
	}

	public Review(User userId, @Min(1) @Max(6) int rating, Location location, String title, String reviewText) {
		super();
		this.userId = userId;
		this.rating = rating;
		this.location = location;
		this.title = title;
		this.reviewText = reviewText;
	}



	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public User getUserId() {
		return userId;
	}

	public void setUserId(User userId) {
		this.userId = userId;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public Location getLocation() {
		return location;
	}

	public void setLocation(Location location) {
		this.location = location;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getReviewText() {
		return reviewText;
	}

	public void setReviewText(String reviewText) {
		this.reviewText = reviewText;
	}

}
