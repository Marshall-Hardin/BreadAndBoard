package com.breadandboard.data;

import org.springframework.data.jpa.repository.JpaRepository;

import com.breadandboard.beans.User;

/**
 * 
 * @author Zev
 *
 */

public interface UserRepository extends JpaRepository<User, Integer>{
	public User findByUsername(String username);
}
