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
        }else if(info.getUserId()==null||info.getUserName()==null||info.getPassword()==null){
            return "incomplete information!";
        }
        else if (info.getPassword().length() < 8) {
            return "password is too short!";
        } else if (info.getPassword().length() > 20) {
            return "password is too long!";
        } else if (info.getUserName().length() > 20) {
            return "name is too long!";
        } else {
            try {
                info.setPhotoPath("../GlobalResource/img/" + info.getUserId().replace(".", "") + ".jpg");
                registerDao.createNewUser(info);
                return "success";
            } catch (Exception e) {
                return "error(s) in the server!";
            }
        }
    }
}
