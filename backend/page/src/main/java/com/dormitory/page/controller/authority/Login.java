package com.dormitory.page.controller.authority;

import cn.dev33.satoken.exception.NotLoginException;
import cn.dev33.satoken.stp.StpUtil;
import com.dormitory.page.entity.entity.Information;
import com.dormitory.page.entity.response.Token;
import com.dormitory.page.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin
@RequestMapping("/authority/user")
public class Login {
    @Autowired
    UserService service;

    @GetMapping("/login")
    @ResponseBody
    public Token login(@RequestParam(value = "id", required = true) String id,
                       @RequestParam(value = "password", required = true) String password) {
        return service.login(id, password);
    }

    @GetMapping("/getLoginUser")
    @ResponseBody
    public Information getLoginUser() {
        try {
            return service.getLoginUser(StpUtil.getLoginId().toString());
        } catch (NotLoginException e) {
            return null;
        }
    }
}
