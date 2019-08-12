package com.breadandboard.data;

import org.springframework.data.jpa.repository.JpaRepository;

import com.breadandboard.beans.Location;

/**
 * 
 * @author Zev
 *
 */

public interface LocationRepository extends JpaRepository<Location, Integer>{}
