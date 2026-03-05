package com.spring.todo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.spring.todo.web.TaskWebServices;

@Component
public class CommandRunner implements CommandLineRunner{

	TaskWebServices service;
	CommandRunner(TaskWebServices service){
		this.service=service;
	}
	@Override
	public void run(String... args) throws Exception {
		service.addTask("This is task","ronie");
		service.addTask("This is task","ron");
		service.addTask("This is task","ronie");
		service.addTask("This is task","ronie");

	}

}
