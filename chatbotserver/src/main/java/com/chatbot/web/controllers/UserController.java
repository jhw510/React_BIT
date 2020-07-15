package com.chatbot.web.controllers;

import com.chatbot.web.domains.User;
import com.chatbot.web.serviceImps.UserSevice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*",allowedHeaders = "*")
@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired UserSevice userSevice;


    @GetMapping("/join")
    public boolean join(){
        User newUser = new User();
        newUser.setUserid("c");
        newUser.setPasswd("c");
        newUser.setEmail("c");
        newUser.setAddr("c");
        System.out.println("들어온데이터:"+newUser.toString());
        return (userSevice.join(newUser) == null)? true: false;
    }

    @GetMapping("/login")
    public boolean login(){
        User user = new User();
        user.setUserid("b");
        user.setPasswd("b");
        System.out.println("들어온데이터:"+user.toString());
        return (userSevice.login(user))? true: false;
    }





}
