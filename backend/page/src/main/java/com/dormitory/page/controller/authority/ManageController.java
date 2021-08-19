package com.dormitory.page.controller.authority;

import cn.dev33.satoken.exception.NotLoginException;
import cn.dev33.satoken.stp.StpUtil;
import com.dormitory.page.entity.entity.Information;
import com.dormitory.page.service.InformationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@Controller
@RequestMapping("/authority/manage")
public class ManageController {
    @Autowired
    InformationService informationService;

    @GetMapping("/getInformation")
    @ResponseBody
    public Information getInformation() {
        try {
            StpUtil.isLogin();
            return informationService.getInfo(StpUtil.getLoginId().toString());
        } catch (NotLoginException e) {
            return null;
        }
    }

    @PostMapping("/updateInformation")
    @ResponseBody
    public String updateInformation(@RequestBody Information information) {
        try {
            StpUtil.isLogin();
            information.setUserId(StpUtil.getLoginId().toString());
            return informationService.updateInfo(information);
        }catch (NotLoginException e){
            return "not login";
        }
    }
}
