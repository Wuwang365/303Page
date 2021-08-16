package com.dormitory.page.service;

import cn.dev33.satoken.stp.SaTokenInfo;
import cn.dev33.satoken.stp.StpUtil;
import com.dormitory.page.dao.UserDao;

import com.dormitory.page.entity.Information;
import com.dormitory.page.entity.response.Token;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import cn.dev33.satoken.stp.StpInterface;

@Service
public class UserService {
    @Autowired
    UserDao userDao;

    public Token login(String id, String password) {
        if(userDao.login(id, password) == 1){
            StpUtil.login(id);
            SaTokenInfo info =  StpUtil.getTokenInfo();
            return new Token(info.tokenName,info.tokenValue);
        }else {
            return null;
        }
    }

    public Information getLoginUser(String id){
        return userDao.getLoginUser(id);
    }
}
