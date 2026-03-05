package com.spring.todo.web;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.spring.todo.Task;
import com.spring.todo.dataService.TaskSpringData;
import com.spring.todo.exception.TaskNotFoundException;

import jakarta.transaction.Transactional;

@Service
public class TaskWebServices {
	
	@Autowired
	TaskSpringData repository;
	int id=1;
	public void addTask(String desc,String username) {
		repository.save(new Task(id++,username,desc,LocalDate.now(),false));
	}
	
	public List<Task> getTasks(String username){
		return repository.findByUsername(username);
	}
	
	public Task getTasksById(String username,Integer id) throws TaskNotFoundException{
		if(!repository.existsByUsernameAndId(username, id))throw new TaskNotFoundException("There is no task with Task Id-"+id);
		return repository.findByUsernameAndId(username, id);
	}
	
	@Transactional
	public ResponseEntity<String> deleteById(String username,Integer id) throws TaskNotFoundException{
		if(!repository.existsByUsernameAndId(username, id))throw new TaskNotFoundException("There is no task with Task Id-"+id);
		repository.deleteByUsernameAndId(username, id);
		return ResponseEntity
				.status(200)
				.body("The Task has been deleted with task id-"+id);
	}
	
	
	public ResponseEntity<String> addTask(Task t){
		repository.save(new Task(id,t.getUsername(),t.getDesc(),t.getTargetDate(),t.isDone()));
		return ResponseEntity
				.status(200)
				.body("The Task has been created with task id-"+id++);
	}
	
	@Transactional
	public ResponseEntity<String> updateTask(Task t){
		Task task=repository.findByUsernameAndId(t.getUsername(),t.getId());
		task.setDesc(t.getDesc());
		task.setTargetDate(t.getTargetDate());
		task.setDone(t.isDone());
		return ResponseEntity
		.status(200)
		.body("The Task has been updated with task id-"+t.getId());
	}

}
