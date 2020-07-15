package com.chatbot.web.mappers;

import com.chatbot.web.domains.User;
import org.springframework.stereotype.Repository;

@Repository
public interface UserMapper {
    public User insertUser(User user);
    public User login(User user);

}
