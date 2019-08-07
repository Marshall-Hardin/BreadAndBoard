package com.breadandboard.services;

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
	 * delete (user)
	 * find by id (individual)
	 * find by location (list)
	 * find by user (list)
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
		repo.deleteById(id);
	}

}
