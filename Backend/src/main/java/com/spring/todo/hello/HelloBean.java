package com.spring.todo.hello;

import org.springframework.stereotype.Component;

@Component
public class HelloBean {
	private String msg;
	HelloBean(String msg){
		this.msg=msg;
	}
	HelloBean(){
		
	}
	
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	@Override
	public String toString() {
		return "HelloBean [msg=" + msg + "]";
	}
	
}
