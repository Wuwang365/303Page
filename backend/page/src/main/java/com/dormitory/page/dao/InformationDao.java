package com.dormitory.page.dao;

import java.util.List;

import com.dormitory.page.entity.Information;
import com.dormitory.page.entity.request.InformationPOJO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface InformationDao {

    List<Information> getUserList();

    Information getUserInfo(String userId);
    void updateUserInfo(InformationPOJO info);
}