package com.dormitory.page.dao;

import com.dormitory.page.entity.request.RegisterInfo;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface RegisterDao {
    int checkRepeat(String userId);
    void createNewUser(RegisterInfo info);
}
