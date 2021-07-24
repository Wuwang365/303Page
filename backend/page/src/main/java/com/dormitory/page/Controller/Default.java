package com.dormitory.page.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class Default {
    @GetMapping("/")
    @ResponseBody
    public String test() {
        return "this is a test for this site";
    }
}
