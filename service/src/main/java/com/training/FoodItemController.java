package com.training;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:60220")
@RequestMapping("/api")
public class FoodItemController {
 @Autowired
 FoodItemService service;
 @GetMapping("/getfood")
 public List<FoodItem> getfood(){
	return service.getFoodItems();
 }
}
