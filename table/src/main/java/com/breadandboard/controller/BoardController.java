package com.breadandboard.controller;

import java.util.Date;
import java.util.List;

//import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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
@RequestMapping(value = "api/v1/table" )

public class BoardController {
	
	//private static final Logger log = Logger.getLogger(BoardController.class);
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private DestinationService destService;
	
	@Autowired
	private TripService tripService;
	
	@PostMapping("/register")
	public ResponseEntity<User> saveUser(@RequestParam int accessLevel, @RequestParam String username, @RequestParam String password, @RequestParam String name ) {
		User user = new User(name,username,password,accessLevel);
		return new ResponseEntity<User>(userService.save(user), HttpStatus.CREATED);
	}
	
	@PostMapping("/login")
	public User login( @RequestParam String username, @RequestParam String password) {
		User login = userService.findByUsername(username);
		if(login != null) {
			if(password.equals(login.getAccountPassword())) {
				return login;
			}
		} 
		login = new User("Bad User", "Bad User", "Bad User", 0);
		return login;
	}
	
	@GetMapping("/tripDest")
	public List<Destination> getTripDestinations(@RequestParam int tripId){
		List<Destination> destList = destService.findByTrip(tripId);
		return destList;
	}
	
	@PostMapping("/newTrip")
	public Trip saveTrip(@RequestParam int accountId, @RequestParam String tripName) {
		Trip trip = new Trip(accountId, tripName);
		return tripService.save(trip);
	}
	
	
	
	
}
