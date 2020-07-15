package com.chatbot.web.services;

import com.chatbot.web.domains.User;
import com.chatbot.web.mappers.UserMapper;
import com.chatbot.web.serviceImps.UserSevice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImp implements UserSevice {
    @Autowired
    UserMapper userMapper;
    @Override
    public User join(User user) {
        return userMapper.insertUser(user);
    }

    @Override
    public boolean login(User user) {
        System.out.println("DB 반환값:"+userMapper.login(user));
        return (userMapper.login(user) != null)? true: false;
    }
}
