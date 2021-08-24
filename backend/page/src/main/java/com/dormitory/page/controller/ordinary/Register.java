package com.dormitory.page.controller.ordinary;

import com.dormitory.page.entity.request.RegisterInfo;
import com.dormitory.page.service.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@Controller
@RequestMapping("/ordinary/register")
public class Register {
    @Autowired
    RegisterService registerService;

    @ResponseBody
    @PostMapping("")
    public String register(@RequestBody RegisterInfo info) {
        info.setPhotoPath("../GlobalResource/img/" + info.getUserId().replace(".", "") + ".jpg");
        return registerService.createNewUser(info);
    }
}
