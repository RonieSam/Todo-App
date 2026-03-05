package com.spring.todo.hello;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
@RestController
public class HelloController {
	
	@GetMapping ("/helloWorld")
	public String helloWorld() {
		return "Hello World";
	}
	
	@GetMapping(path="/hello")
	public HelloBean helloWorldBean(){
		return new HelloBean("Hello World");
	}
	
	@GetMapping(path="/hello/{name}")
	public HelloBean helloWorldBeanName(@PathVariable String name) {
		return new HelloBean("Hello World "+name);
	}
}
