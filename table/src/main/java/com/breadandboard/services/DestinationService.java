package com.breadandboard.services;

import java.util.List;

import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.breadandboard.beans.Destination;
import com.breadandboard.beans.Trip;
import com.breadandboard.data.DestinationRepository;

@Service
public class DestinationService 
{
	
	private static final Logger log = Logger.getLogger(TripService.class);
	
	@Autowired
	DestinationRepository repo;
	
	public Destination save(Destination dest) 
	{
		return repo.save(dest);
	}
	
	public void delete(Destination dest) 
	{
		repo.delete(dest);
	}
	
	public List<Destination> findByTrip (Trip trip)
	{
		return repo.findAllByTrip(trip);
	}
}
