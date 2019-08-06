package com.breadandboard;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.breadandboard.services.TripService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TableApplicationTests {

	@Test
	public void contextLoads() {
	}

	@Test
	public void tripRetrievalTest() 
	{
		TripService trip = new TripService();
		trip.findById(1);
		trip.findByAccountId(3);
	}
	
}
