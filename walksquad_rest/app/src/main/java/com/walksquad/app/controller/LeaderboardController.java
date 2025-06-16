package com.walksquad.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.walksquad.app.dto.HistoryDTO;
import com.walksquad.app.model.User;
import com.walksquad.app.repository.HistoryRepository;
import com.walksquad.app.service.FriendshipService;
import com.walksquad.app.service.UserService;

@RestController
@RequestMapping("/leaderboard")
public class LeaderboardController {

    @Autowired
    private UserService userService;

    @GetMapping("/{userName}")
    public ResponseEntity<List<HistoryDTO>> getLeaderboardForUser(@PathVariable String userName) {
        User user = userService.findUserByUserName(userName);
        return null;
    }
}
