package com.dormitory.page.controller;

import cn.dev33.satoken.stp.StpUtil;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class Default {
    @GetMapping("/")
    @ResponseBody
    public String test() {
        return String.valueOf(StpUtil.isLogin());
    }
}
