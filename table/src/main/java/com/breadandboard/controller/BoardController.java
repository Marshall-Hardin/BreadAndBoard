package com.breadandboard.controller;

import java.util.List;

//import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.breadandboard.beans.Destination;
import com.breadandboard.beans.Trip;
import com.breadandboard.beans.User;
import com.breadandboard.services.DestinationService;
import com.breadandboard.services.TripService;
import com.breadandboard.services.UserService;

/**
 * 
 * @author Zev
 *
 */

@RestController
@CrossOrigin
@RequestMapping(value = "api/v1/table" )

public class BoardController {
	
	//private static final Logger log = Logger.getLogger(BoardController.class);
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private DestinationService destService;
	
	@Autowired
	private TripService tripService;
	
	/*----------user calls----------*/
	@PostMapping("/register")
	public User saveUser(@RequestBody User user ) {
		return userService.save(user);
	}
	
	@PostMapping(path="/login")
	public User login(@RequestBody User user) {
		System.out.println("Logging in");
		User login = userService.findByUsername(user.getUsername());
		if(login != null) {
			if(user.getPassword().equals(login.getPassword())) {
				System.out.println("Valid Login");
				login.setTrips(null);
				return login;
			}
		} 
		login = new User("Bad User", "Bad User", "Bad User", 0);
		System.out.println("Invalid login");
		return login;
	}
	
	/*----------trip calls----------*/
	@PostMapping("/newtrip")
	public Trip newTrip(@RequestBody Trip trip) {
		return tripService.save(trip);
	}
	
	@PostMapping("/edittrip")
	public Trip saveTrip(@RequestBody Trip trip) {
		return tripService.save(trip);
	}
	
	@PostMapping("/usertrips")
	public List<Trip> getTrips(@RequestParam int accountId){
		User user = userService.findById(accountId);
		List<Trip> trips = tripService.findByAccountId(user);
		return trips;
	}
	
	@PostMapping("/deletetrip")
	public void deleteTrip(@RequestParam int tripId) {
		tripService.delete(tripId);
	}
	
	/*----------destination calls----------*/
	@PostMapping("/tripdest")
	public List<Destination> getTripDestinations(@RequestParam int tripId){
		List<Destination> destList = destService.findByTrip(tripId);
		return destList;
	}
	
	@PostMapping("/savedest")
	public Destination saveDest(@RequestBody Destination dest) {
		return destService.save(dest);
	}
	
	@PostMapping("/deletedest")
	public void deletDest(@RequestBody Destination dest) {
		destService.delete(dest);
	}
	
	/*----------location calls----------*/
	
	/*----------review calls----------*/
	
	
	
}
