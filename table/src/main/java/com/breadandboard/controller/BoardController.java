package com.breadandboard.controller;

import javax.validation.Valid;

import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.breadandboard.beans.User;
import com.breadandboard.services.UserService;

/**
 * 
 * @author Zev
 *
 */

@RestController
public class BoardController {
	
	private static final Logger log = Logger.getLogger(BoardController.class);
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/register")
	public ResponseEntity<User> save(@Valid @RequestBody User user) {
		return new ResponseEntity<User>(userService.save(user), HttpStatus.CREATED);
	}
	
	@PostMapping("/login")
	public ResponseEntity<User> login(@Valid @RequestBody User user) {
		User login = userService.findByUsername(user.getAccountUsername());
		if(user.getAccountUsername().equals(login.getAccountUsername())) {
			if(user.getAccountPassword().equals(login.getAccountPassword())) {
				return new ResponseEntity<User>(login, HttpStatus.ACCEPTED);
			}
		} 
		login = null;
		return new ResponseEntity<User>(login, HttpStatus.ACCEPTED);
	}
	
	@GetMapping("/homepage/trips")
	
	
}