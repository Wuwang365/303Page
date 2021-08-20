package com.dormitory.page.dao;

import com.dormitory.page.entity.entity.Submit;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface SubmitDao {
    void updateSubmitInfo(Submit submitInfo);
    Submit getSubmitInfo(String userId);
}
