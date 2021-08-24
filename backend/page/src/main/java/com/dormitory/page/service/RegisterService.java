package com.dormitory.page.service;

import com.dormitory.page.dao.RegisterDao;
import com.dormitory.page.entity.request.RegisterInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegisterService {
    @Autowired
    RegisterDao registerDao;

    public String createNewUser(RegisterInfo info) {
        if (registerDao.checkRepeat(info.getUserId()) != 0) {
            return "email already been used!";
        } else {
            try {
                registerDao.createNewUser(info);
                return "success";
            } catch (Exception e) {
                return e.getMessage();
            }
        }
    }
}
