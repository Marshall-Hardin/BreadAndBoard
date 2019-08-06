package com.breadandboard.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.breadandboard.beans.Trip;

@Repository
public interface TripRepository extends JpaRepository<Trip, Integer>
{
	public List<Trip> findByAccountId(int accountId);
}
