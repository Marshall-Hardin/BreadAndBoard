package com.breadandboard.services;

import java.util.List;
import java.util.Optional;

import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.breadandboard.beans.Review;
import com.breadandboard.data.ReviewRepository;

@Service
public class ReviewService {
	
	/*
	 * create --done
	 * delete (id) --done
	 * delete (user) --done
	 * find by id (individual) --done
	 * find by location (list) 
	 * find by user (list) --done
	 * edit - update title, review text, and rating --done
	 * 
	 */
	
	private static final Logger log = Logger.getLogger(ReviewService.class);
	
	@Autowired
	private ReviewRepository repo;
	
	public Review save(Review review) {
		return repo.save(review);
	}
	
	public void delete(int id) {
		Optional<Review> optional = repo.findById(id);
		if(optional.isPresent()) {
			repo.deleteById(optional.get().getId());
		} else {
			log.warn("Review " + id + " not found!");
		}
	}
	
	public void deleteAllUserReviews(int userId) {
		List<Review> reviews = repo.findByUserId(userId);
		while(!reviews.isEmpty()) {
			repo.deleteById(reviews.get(0).getId());
		}
	}
	
	public Review findById(int id) {
		Optional<Review> optional = repo.findById(id);
		if(optional.isPresent()) {
			return optional.get();
		}
		else {
			log.warn("Review " + id + " not found!");
			return null;
		}
	}
	
	public List<Review> findByUserId(int userId){
		return repo.findByUserId(userId);
	}
	
	public List<Review> findByLocation(int locationId){
		return repo.findByLocation(locationId);
	}

}
