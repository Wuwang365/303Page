package com.dormitory.page.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.File;
import java.io.FileInputStream;

@Controller
@RequestMapping("/Information")
public class PersonInformation {
    @GetMapping("/{id}")
    @ResponseBody
    public String getPersonInformation(@PathVariable(value = "id") String id) {
        File test = new File("");
        System.out.println(test.getAbsolutePath());
        String encoding = "UTF-8";
        File info = new File("../resources/" + id + ".json");
        Long infoLength = info.length();
        byte[] infoByte = new byte[infoLength.intValue()];
        try {
            FileInputStream in = new FileInputStream(info);
            in.read(infoByte);
            in.close();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        try {
            return new String(infoByte, encoding);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return null;
    }

}
