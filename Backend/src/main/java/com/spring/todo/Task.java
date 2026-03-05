package com.spring.todo;


import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Task {
	@Id
	Integer id;
	String username;
	String desc;
	LocalDate targetDate;
	boolean done;
	
	
	public Task() {
		
	}


	public Task(Integer id, String username, String desc, LocalDate targetDate, boolean done) {
		super();
		this.id = id;
		this.username = username;
		this.desc = desc;
		this.targetDate = targetDate;
		this.done = done;
	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getDesc() {
		return desc;
	}


	public void setDesc(String desc) {
		this.desc = desc;
	}


	public LocalDate getTargetDate() {
		return targetDate;
	}


	public void setTargetDate(LocalDate targetDate) {
		this.targetDate = targetDate;
	}


	public boolean isDone() {
		return done;
	}


	public void setDone(boolean done) {
		this.done = done;
	}
	
	

	

	
}
