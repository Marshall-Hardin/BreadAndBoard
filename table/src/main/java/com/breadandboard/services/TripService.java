package com.breadandboard.services;

import java.util.List;
import java.util.Optional;

import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.breadandboard.beans.Trip;
import com.breadandboard.beans.User;
import com.breadandboard.data.TripRepository;

@Service
public class TripService 
{
	
	private static final Logger log = Logger.getLogger(TripService.class);

	@Autowired
	TripRepository repo;
	
	public Trip save(Trip trip) 
	{
		return repo.save(trip);
	}
	
	public Trip findById(int i) 
	{
		Optional<Trip> opt = repo.findById(i);
		if(opt.isPresent()) 
		{
			return opt.get();
		}
		else 
		{
			log.warn("Invalid Trip id " + i + " was part of an operation.");
			return null;
		}
	}
	
	public void delete(int id) 
	{
		repo.deleteById(id);
	}
	
	public List<Trip> findByAccountId(User accountId)
	{
		return repo.findByAccountId(accountId);
	}
	
	public void deleteByTripId(int tripId)
	{
		repo.deleteByTripId(tripId);
	}
	
}
