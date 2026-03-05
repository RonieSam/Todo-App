package com.spring.todo.exception;

import java.time.LocalDateTime;

public class ErrorDetails {
	LocalDateTime timestamp;
	String msg;
	String desc;
	public ErrorDetails(LocalDateTime timestamp, String msg, String desc) {
		super();
		this.timestamp = timestamp;
		this.msg = msg;
		this.desc = desc;
	}
	public LocalDateTime getTimestamp() {
		return timestamp;
	}
	public String getMsg() {
		return msg;
	}
	public String getDesc() {
		return desc;
	}
	
}
