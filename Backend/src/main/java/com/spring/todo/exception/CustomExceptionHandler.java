package com.spring.todo.exception;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;


@ControllerAdvice
public class CustomExceptionHandler extends ResponseEntityExceptionHandler {
	
	@ExceptionHandler(TaskNotFoundException.class)
	public final ResponseEntity<ErrorDetails> handleTaskNotFoundException(Exception ex,WebRequest msg){
		ErrorDetails err=new ErrorDetails(LocalDateTime.now(),ex.getMessage(),msg.getDescription(false));
		return new ResponseEntity<>(err,HttpStatus.NOT_FOUND);
	}
}
