package com.breadandboard.beans;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

import com.fasterxml.jackson.annotation.JsonManagedReference;

/**
 * 
 * @author Zev
 *
 */

@Entity
@Table(name = "DBusers")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_generator" )
	@SequenceGenerator(name="user_generator", sequenceName = "account_id_seq", allocationSize=1)
	@Column(name = "account_Id")
	private int accountId;
	
	@Column(name = "account_username", nullable = false, unique = true)
	private String username;
	
	@Column(name = "account_password")
	private String password;
	
	@Column(name = "account_name")
	private String name;
	
	@Column(name = "access_level")
	@Min(0)
	@Max(3)
	private int accessLevel;
	
	@Column(name = "ban_desc")
	private String banDesc;
	
	@OneToMany(mappedBy = "accountId")
	@JsonManagedReference
	private List<Trip> trips;
	
	@OneToMany(mappedBy = "userId")
	@JsonManagedReference
	private List<Review> reviews;
	
	
	public User() {}

	public User(String username, String password, String name, @Min(1) @Max(3) int accessLevel, String banDesc) {
		super();
		this.username = username;
		this.password = password;
		this.name = name;
		this.accessLevel = accessLevel;
		this.banDesc = banDesc;
	}
	
	public User(String username, String password, String name, @Min(1) @Max(3) int accessLevel) {
		super();
		this.username = username;
		this.password = password;
		this.name = name;
		this.accessLevel = accessLevel;
	}



	public User(Integer accountId, String username, String password, String name,
			@Min(1) @Max(3) int accessLevel, String banDesc) {
		super();
		this.accountId = accountId;
		this.username = username;
		this.password = password;
		this.name = name;
		this.accessLevel = accessLevel;
		this.banDesc = banDesc;
	}
	
	public int getAccountId() {
		return accountId;
	}

	public void setAccountId(int accountId) {
		this.accountId = accountId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAccessLevel() {
		return accessLevel;
	}

	public void setAccessLevel(int accessLevel) {
		this.accessLevel = accessLevel;
	}

	public String getBanDesc() {
		return banDesc;
	}

	public void setBanDesc(String banDesc) {
		this.banDesc = banDesc;
	}

	public List<Trip> getTrips() {
		return trips;
	}

	public void setTrips(List<Trip> trips) {
		this.trips = trips;
	}

	public List<Review> getReviews() {
		return reviews;
	}

	public void setReviews(List<Review> reviews) {
		this.reviews = reviews;
	}

	@Override
	public String toString() {
		return "User [accountId=" + accountId + ", username=" + username + ", password=" + password + ", name=" + name
				+ ", accessLevel=" + accessLevel + ", banDesc=" + banDesc + "]";
	}
}
