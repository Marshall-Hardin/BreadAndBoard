package com.breadandboard.services;

import java.util.Optional;

import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import com.breadandboard.beans.Location;
import com.breadandboard.data.LocationRepository;

/**
 * 
 * @author Zev
 *
 */

public class LocationService {
	
	private static final Logger log = Logger.getLogger(Location.class);
	
	@Autowired
	private LocationRepository repo;
	
	public Location findById(int id) {
		Optional<Location> optional = repo.findById(id);
		if(optional.isPresent()) {
			return optional.get();
		} else {
			log.warn("Location " + id + " not found!");
			return null;
		}
	}
	
	public Location save(Location location) {
		return repo.save(location);
	}
}
