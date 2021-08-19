package com.dormitory.page.controller.authority;

import cn.dev33.satoken.exception.NotLoginException;
import cn.dev33.satoken.stp.StpUtil;
import com.dormitory.page.entity.entity.Submit;
import com.dormitory.page.service.SubmitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@Controller
@RequestMapping("/authority/submitManage")
public class SubmitManage {
    @Autowired
    SubmitService submitService;

    @PostMapping("/update")
    @ResponseBody
    public String updateSubmitInfo(@RequestBody Submit submitInfo) {
        try {
            StpUtil.isLogin();
            submitInfo.setUserId(StpUtil.getLoginId().toString());
            return submitService.updateSubmitInfo(submitInfo);
        } catch (NotLoginException e) {
            return "not login";
        }
    }
}
