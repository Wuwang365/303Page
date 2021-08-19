package com.dormitory.page.service;

import com.dormitory.page.dao.SubmitDao;
import com.dormitory.page.entity.entity.Submit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SubmitService {
    @Autowired
    SubmitDao submitDao;

    public String updateSubmitInfo(Submit submitInfo) {
        try {
            submitDao.updateSubmitInfo(submitInfo);
            return "success";
        } catch (Exception e) {
            return e.getMessage();
        }
    }
}
