package com.dormitory.page.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class Default {
    @GetMapping("/")
    @ResponseBody
    public String test() {
        return "123";
    }
}
