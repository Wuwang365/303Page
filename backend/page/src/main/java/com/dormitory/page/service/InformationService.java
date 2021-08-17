package com.dormitory.page.service;

import com.dormitory.page.dao.InformationDao;
import com.dormitory.page.entity.Information;
import com.dormitory.page.entity.request.InformationPOJO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InformationService {
    @Autowired
    InformationDao infoDao;

    public List<Information> getUserList() {
        return infoDao.getUserList();
    }
    public Information getInfo(String userId){
        return infoDao.getUserInfo(userId);
    }
    public String updateInfo(Information information){
        try {
            InformationPOJO info = new InformationPOJO();
            info.setInformation(information);
            infoDao.updateUserInfo(info);
            return "success";
        }catch (Exception e){
            return e.getMessage();
        }
    }
}
