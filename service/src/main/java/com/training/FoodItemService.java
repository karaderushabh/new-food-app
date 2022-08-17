package com.training;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.training.repo.FoodItemRepo;

@Service
public class FoodItemService {

	@Autowired
	FoodItemRepo repo;;
	
	public List<FoodItem> getFoodItems(){
		return repo.findAll();
	}
}
