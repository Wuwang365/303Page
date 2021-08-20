package com.dormitory.page.dao;
import com.dormitory.page.entity.entity.Information;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface UserDao {
    public int login(String id, String password);
    public Information getLoginUser(String id);
}
