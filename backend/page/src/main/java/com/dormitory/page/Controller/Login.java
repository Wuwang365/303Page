package com.dormitory.page.controller;

import com.dormitory.page.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin
@RequestMapping("/user")
public class Login {
    @Autowired
    UserService service;

    @GetMapping("")
    @ResponseBody
    public String login(@RequestParam(value = "id", required = true) String id,
            @RequestParam(value = "password", required = true) String password) {
        return service.login(id, password);
    }
}
