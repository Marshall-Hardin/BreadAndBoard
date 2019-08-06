package com.breadandboard.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.breadandboard.beans.Destination;
import com.breadandboard.beans.Trip;

public interface DestinationRepository extends JpaRepository<Destination, Integer>
{
	public List<Destination> findAllByTrip (Trip trip);
}
