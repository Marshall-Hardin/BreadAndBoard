package com.breadandboard.controller;

import javax.validation.Valid;

//import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.breadandboard.beans.User;
import com.breadandboard.services.UserService;

/**
 * 
 * @author Zev
 *
 */


@RestController
@RequestMapping()

public class BoardController {
	
	//private static final Logger log = Logger.getLogger(BoardController.class);
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/register")
	public ResponseEntity<User> save(@Valid @RequestBody User user) {
		return new ResponseEntity<User>(userService.save(user), HttpStatus.CREATED);
	}
	
	@GetMapping("/login")
	public User login( @RequestParam String username, @RequestParam String password) {
		User login = userService.findByUsername(username);
		if(login != null) {
			if(password.equals(login.getAccountPassword())) {
				return login;
			}
		} 
		login = new User("Trey", "123", "Trey", 1);
		return login;
	}
	
	
	
	
}
