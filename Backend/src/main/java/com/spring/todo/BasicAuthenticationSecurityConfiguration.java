package com.spring.todo;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;


//@Configuration
public class BasicAuthenticationSecurityConfiguration {
	
	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
		return http
			.authorizeHttpRequests(auth->auth
										.requestMatchers(HttpMethod.GET,"/health").permitAll()
										.requestMatchers(HttpMethod.OPTIONS,"/**").permitAll()
										.anyRequest().authenticated())
			.httpBasic(Customizer.withDefaults())
			.csrf(csrf->csrf.disable())
			.sessionManagement(session->session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
			.build();
	}
}
