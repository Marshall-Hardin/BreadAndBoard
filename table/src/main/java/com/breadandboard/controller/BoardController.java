package com.breadandboard.controller;

import javax.validation.Valid;

import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.breadandboard.beans.User;
import com.breadandboard.services.UserService;

/**
 * 
 * @author Zev
 *
 */

@RestController
@Scope("session")
public class BoardController {
	
	private static final Logger log = Logger.getLogger(BoardController.class);
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/register")
	public ResponseEntity<User> save(@Valid @RequestBody User user) {
		return new ResponseEntity<User>(userService.save(user), HttpStatus.CREATED);
	}
	
	@RequestMapping(value = "/login", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public User login(@Valid @RequestBody User user) {
		User login = userService.findByUsername(user.getAccountUsername());
		if(user.getAccountUsername().equals(login.getAccountUsername())) {
			if(user.getAccountPassword().equals(login.getAccountPassword())) {
				return login;
			}
		} 
		login = new User("Trey", "123", "Trey", 1);
		return login;
	}
	
	
	
	
}
