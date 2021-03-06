package com.dormitory.page.controller.ordinary;

import com.dormitory.page.entity.entity.Information;
import com.dormitory.page.service.InformationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Controller
@CrossOrigin
@RequestMapping("/ordinary/information")
public class PersonInformation {
    @Autowired
    InformationService infoService;

    @GetMapping("/getPersonal")
    @ResponseBody
    public Information getPersonInformation(@RequestParam(value = "userId") String userId) {
        return infoService.getInfo(userId);
    }

    @GetMapping("/getUserList")
    @ResponseBody
    public List<Information> getUserList() {
        return infoService.getUserList();
    }

}
