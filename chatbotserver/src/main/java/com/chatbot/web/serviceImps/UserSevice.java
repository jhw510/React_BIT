package com.chatbot.web.serviceImps;


import com.chatbot.web.domains.User;
import org.springframework.stereotype.Component;

@Component
public interface UserSevice  {
    public User join(User user);
    public boolean login(User user);
}
