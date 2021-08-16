package com.dormitory.page.controller.authority;

import cn.dev33.satoken.exception.NotLoginException;
import cn.dev33.satoken.stp.StpLogic;
import cn.dev33.satoken.stp.StpUtil;
import com.dormitory.page.entity.Information;
import com.dormitory.page.service.InformationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@CrossOrigin
@Controller
@RequestMapping("/authority/manage")
public class ManageController {
    @Autowired
    InformationService informationService;
    @GetMapping("/getInformation")
    @ResponseBody
    public Information getInformation(){
        try{
            StpUtil.isLogin();
            return informationService.getInfo(StpUtil.getLoginId().toString());
        }
        catch (NotLoginException e){
            return null;
        }
    }
}
