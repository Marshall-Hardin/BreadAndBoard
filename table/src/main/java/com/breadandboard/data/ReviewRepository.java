package com.breadandboard.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.breadandboard.beans.Review;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Integer> {
	public List<Review> findByReview_User_Id(int userId);
	public List<Review> findByReview_Location(int locationId);
}