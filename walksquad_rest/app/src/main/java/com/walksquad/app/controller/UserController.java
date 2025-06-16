package com.walksquad.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.walksquad.app.dto.ProiflePageDTO;
import com.walksquad.app.dto.UserDTO;
import com.walksquad.app.dto.UserHomepageDTO;
import com.walksquad.app.model.User;
import com.walksquad.app.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
    
    @Autowired
    private UserService userService;

    @GetMapping("/homepage/{userName}")
    public ResponseEntity<UserHomepageDTO> getUser(@PathVariable String userName) {
        User user = userService.findUserByUserName(userName);
        if (user == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(userService.getUserHomepage(user));
    }

    @GetMapping("/viewProfile/{userName}")
    public ResponseEntity<ProiflePageDTO> getProfilePage(@PathVariable String userName) {
        User user = userService.findUserByUserName(userName);
        if (user == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(userService.getProfilePage(user));
    }

    @PostMapping("/findUser")
    public ResponseEntity<UserDTO> findUser(@RequestBody UserDTO request) {
        User user = userService.findUserByUserName(request.getUserName());
        if (user != null) {
            return ResponseEntity.ok(new UserDTO(user));
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    @PostMapping("/steps")
    public ResponseEntity<Void> updateSteps(@RequestBody UserDTO request) {
        User user = userService.findUserByUserName(request.getUserName());
        try {
            userService.setUserDailySteps(user, request.getDailySteps());
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}