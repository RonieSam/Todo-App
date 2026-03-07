package com.spring.todo.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.todo.Task;
import com.spring.todo.exception.TaskNotFoundException;


@CrossOrigin(origins="http://localhost:5173",allowCredentials="true")
@RestController
public class Controller {
	
	@Autowired
	TaskWebServices service;
	
	
	
	@GetMapping(path="/health")
	public String todo() {
		return "Success";
	}
	
	@GetMapping(path="/basicauth")
	public String basicAuth() {
		return "Sucess";
	}
	
	@GetMapping(path="users/{username}/todos")
	public List<Task> handleGetTodo(@PathVariable String username) {
		return service.getTasks(username);
	}
	
	@GetMapping(path="users/{username}/todos/{id}")
	public Task handleGetTodoId(@PathVariable String username, @PathVariable Integer id) throws TaskNotFoundException {
		return service.getTasksById(username,id);
	}
	
	
	@DeleteMapping(path="users/{username}/todos/{id}")
	public ResponseEntity<String> deleteTask(@PathVariable String username, @PathVariable Integer id) throws TaskNotFoundException{
		return service.deleteById(username,id);
		
	}
	
	@PostMapping(path="users/{username}/todos")
	public ResponseEntity<String> createTask(@PathVariable String username,@RequestBody Task t){
		t.setUsername(username);
		return service.addTask(t);
	}
	
	@PutMapping(path="users/{username}/todos/{id}")
	public ResponseEntity<String> updateTask(@PathVariable String username, @PathVariable Integer id,@RequestBody Task t){
		t.setUsername(username);
		t.setId(id);
		return service.updateTask(t);
	}
	
}
