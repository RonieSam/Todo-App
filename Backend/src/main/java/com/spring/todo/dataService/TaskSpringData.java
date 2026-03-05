package com.spring.todo.dataService;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.todo.Task;

public interface TaskSpringData extends JpaRepository<Task,Integer>{

	public List<Task> findByUsername(String username);
	public Task findByUsernameAndId(String username,Integer id);
	public void deleteByUsernameAndId(String username,Integer id);
	public boolean existsByUsernameAndId(String username,Integer id);
	
}
