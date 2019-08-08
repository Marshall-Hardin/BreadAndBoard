package com.breadandboard.services;

import java.util.Optional;

import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.breadandboard.beans.User;
import com.breadandboard.data.UserRepository;

/**
 * 
 * @author Zev
 *
 */

@Service
public class UserService {

	private static final Logger log = Logger.getLogger(UserService.class);

	@Autowired
	private UserRepository repo;
	
	public User findById(int id) {
		Optional<User> optional = repo.findById(id);
		if(optional.isPresent()) {
			return optional.get();
		} else {
			log.warn("User " + id + " not found!");
			return null;
		}
	}
	
	public User save(User user) {
		return repo.save(user);
	}
	
	public User findByUsername(String username) {
		return repo.findByUsername(username);
	}
}
