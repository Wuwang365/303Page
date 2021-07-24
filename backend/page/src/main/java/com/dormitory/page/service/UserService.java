package com.dormitory.page.service;

import com.dormitory.page.dao.UserDao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserDao userDao;

    public String login(String id, String password) {
        return String.valueOf(userDao.login(id, password) == 1 ? true : false);
    }
}
