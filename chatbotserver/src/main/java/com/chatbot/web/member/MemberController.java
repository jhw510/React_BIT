package com.chatbot.web.member;

import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;
@CrossOrigin(origins = "*", maxAge = 3600)
@Transactional
@RestController
@RequestMapping("/member")
public class MemberController {
    @Autowired
    JPAQueryFactory jpaQueryFactory;
    @Autowired
    EntityManager manager;
}