package com.breadandboard.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.breadandboard.beans.Destination;

public interface DestinationRepository extends JpaRepository<Destination, Integer>
{
	public List<Destination> findByTripId (int tripId);
	public void deleteByTripId(int tripId);
}
