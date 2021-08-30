package com.dormitory.page.service;

import com.dormitory.page.dao.InformationDao;
import com.dormitory.page.entity.entity.Information;
import com.dormitory.page.entity.request.InformationPOJO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.List;

@Service
public class InformationService {
    @Autowired
    InformationDao infoDao;

    public List<Information> getUserList() {
        return infoDao.getUserList();
    }

    public Information getInfo(String userId) {
        return infoDao.getUserInfo(userId);
    }

    public String updateInfo(Information information) {
        try {
            InformationPOJO info = new InformationPOJO();
            info.setInformation(information);
            infoDao.updateUserInfo(info);
            return "success";
        } catch (Exception e) {
            return e.getMessage();
        }
    }

    public String getPersonImg(String userID) {
        File img = new File("./source/" + userID.replace(".", "") + ".jpg");
        byte[] data = null;
        try {
            InputStream in = new FileInputStream(img);
            data = new byte[in.available()];
            in.read(data);
            in.close();
        } catch (Exception e) {
            return "IO Exception";
        }
        String base = new String(Base64.getEncoder().encode(data), StandardCharsets.UTF_8);
        base = "data:image/jpg;base64," + base;
        return base;
    }

    public String changePersonImg(String userId, String imgBase64) {
        if (imgBase64.lastIndexOf(',') >= 0) {
            imgBase64 = imgBase64.substring(imgBase64.lastIndexOf(',') + 1);
            byte[] data = Base64.getDecoder().decode(imgBase64);
            String imgSavePath = "./source/" + userId.replace(".", "") + ".jpg";
            File imgSave = new File(imgSavePath);
            try (BufferedOutputStream out = new BufferedOutputStream(new FileOutputStream(imgSave))) {
                out.write(data);
                return "success";
            } catch (Exception e) {
                return "IO Exception";
            }
        } else {
            return "illegal base64";
        }


    }
}
