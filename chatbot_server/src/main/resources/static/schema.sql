CREATE TABLE article
(
    `work_id`         INT             NOT NULL    AUTO_INCREMENT,
    `title`           VARCHAR(50)     NULL,
    `write_date`      DATETIME        NULL,
    `recruit`         VARCHAR(100)    NULL,
    `work_day`        VARCHAR(10)     NULL,
    `work_time`       VARCHAR(10)     NULL,
    `work_age`        VARCHAR(3)      NULL,
    `city_area`       VARCHAR(20)     NULL,
    `day_salary`      INT             NULL,
    `total_salary`    INT             NULL,
    `contents`        VARCHAR(200)    NULL,
    `write_data_day`  INT             NULL,
    `kakao`           VARCHAR(50)     NULL,
    `progress_state`  VARCHAR(10)     NULL,
    PRIMARY KEY (work_id)
)default character set utf8 collate UTF8_GENERAL_CI;;
CREATE TABLE admin
(
    `id`               VARCHAR(45)    NOT NULL,
    `payment_info`     VARCHAR(45)    NULL,
    `statistics_info`  VARCHAR(45)    NULL,
    PRIMARY KEY (id)
);default character set utf8 collate UTF8_GENERAL_CI;;

CREATE TABLE order
(
    `order_number_seq`  INT            NULL        AUTO_INCREMENT,
    `order_date`        VARCHAR(45)    NULL,
    `payment_date`      VARCHAR(45)    NULL,
    `moving_type`       VARCHAR(45)    NULL,
    `moving_price`      VARCHAR(45)    NULL,
    `payment_status`    VARCHAR(45)    NULL,
    `payment_method`    VARCHAR(45)    NULL,
    `custom_id`         VARCHAR(45)    NULL,
    `company_id`        VARCHAR(45)    NULL,
    PRIMARY KEY (order_number_seq)
);default character set utf8 collate UTF8_GENERAL_CI;;
CREATE TABLE customer
(
    `custom_id`     INT            NOT NULL    AUTO_INCREMENT,
    `password`      VARCHAR(45)    NULL,
    `address`       VARCHAR(45)    NULL,
    `phone_number`  VARCHAR(45)    NULL,
    `name`          VARCHAR(45)    NULL,
    `moving_to`     VARCHAR(45)    NULL,
    PRIMARY KEY (custom_id)
);default character set utf8 collate UTF8_GENERAL_CI;;
CREATE TABLE movin
(
    `moving_type`     VARCHAR(45)    NOT NULL,
    `moving_date`     VARCHAR(45)    NULL,
    `sqft`            VARCHAR(45)    NULL,
    `moving_to`       VARCHAR(45)    NULL,
    `moving_from`     VARCHAR(45)    NULL,
    `carrying_stuff`  VARCHAR(45)    NULL,
    `custom_id`       VARCHAR(45)    NULL,
    PRIMARY KEY (moving_type)
);default character set utf8 collate UTF8_GENERAL_CI;;
CREATE TABLE payment
(
    `payment_number_seq`  INT            NOT NULL    AUTO_INCREMENT,
    `amount_paid`         VARCHAR(45)    NULL,
    `order_date`          VARCHAR(45)    NULL,
    `company_id`          VARCHAR(45)    NULL,
    `admin_id`            VARCHAR(45)    NULL,
    `custom_id`           VARCHAR(45)    NULL,
    PRIMARY KEY (payment_number_seq)
);default character set utf8 collate UTF8_GENERAL_CI;;
CREATE TABLE category
(
    `key_seq`     INT            NOT NULL    AUTO_INCREMENT,
    `review`      VARCHAR(45)    NULL,
    `used`        VARCHAR(45)    NULL,
    `FAQ`         VARCHAR(45)    NULL,
    `event`       VARCHAR(45)    NULL,
    `number`      VARCHAR(45)    NULL,
    `title`       VARCHAR(45)    NULL,
    `writer`      VARCHAR(45)    NULL,
    `contents`    VARCHAR(45)    NULL,
    `contact`     VARCHAR(45)    NULL,
    `rating`      VARCHAR(45)    NULL,
    `company_id`  VARCHAR(45)    NULL,
    `custom_id`   VARCHAR(45)    NULL,
    PRIMARY KEY (key_seq)
);default character set utf8 collate UTF8_GENERAL_CI;;

CREATE TABLE statistic
(
    `key_seq`     INT            NOT NULL    AUTO_INCREMENT,
    `profit`      VARCHAR(45)    NULL,
    `company_id`  VARCHAR(45)    NULL,
    `id`          VARCHAR(45)    NULL,
    PRIMARY KEY (key_seq)
);default character set utf8 collate UTF8_GENERAL_CI;;
CREATE TABLE company
(
    `company_id`    INT            NOT NULL    AUTO_INCREMENT,
    `password`      VARCHAR(45)    NULL,
    `address`       VARCHAR(45)    NULL,
    `email`         VARCHAR(45)    NULL,
    `phone_number`  VARCHAR(45)    NULL,
    `vehicle`       VARCHAR(45)    NULL,
    `company_name`  VARCHAR(45)    NULL,
    `preference`    VARCHAR(45)    NULL,
    `tin`           VARCHAR(45)    NULL,
    PRIMARY KEY (company_id)
);default character set utf8 collate UTF8_GENERAL_CI;;
CREATE TABLE image
(
    `key_seq`        INT            NOT NULL    AUTO_INCREMENT,
    `customer_room`  VARCHAR(45)    NULL,
    `event_img`      VARCHAR(45)    NULL,
    `profile`        VARCHAR(45)    NULL,
    `review_img`     VARCHAR(45)    NULL,
    `userd_img`      VARCHAR(45)    NULL,
    `company_img`    VARCHAR(45)    NULL,
    `contact_img`    VARCHAR(45)    NULL
);default character set utf8 collate UTF8_GENERAL_CI;;
CREATE TABLE comment
(
    `key_seq`    INT            NOT NULL    AUTO_INCREMENT,
    `contents`   VARCHAR(45)    NULL,
    `timestamp`  VARCHAR(45)    NULL,
    PRIMARY KEY (key_seq)
);
CREATE TABLE member
(
    `member_id`              INT            NOT NULL    AUTO_INCREMENT,
    `email`                  VARCHAR(20)    NULL,
    `nickname`               VARCHAR(20)    NULL,
    `password`               VARCHAR(10)    NULL,
    `phone`                  VARCHAR(15)    NULL,
    `name`                   VARCHAR(20)    NULL,
    `ssn`                    VARCHAR(10)    NULL,
    `gender`                 VARCHAR(1)     NULL,
    `join_date`              DATETIME       NULL,
    `join_way`               VARCHAR(20)    NULL,
    `withdrawal`             DATETIME       NULL,
    `admin`                  INT            NULL,
    `volunteer_score`        INT            NULL,
    `volunteer_score_count`  INT            NULL,
    `request_score`          INT            NULL,
    `request_score_count`    INT            NULL,
    `point`                  INT            NULL,
    PRIMARY KEY (member_id)
)default character set utf8 collate UTF8_GENERAL_CI;;
CREATE TABLE volunteer
(
    `volunteer_id`              INT        NOT NULL    AUTO_INCREMENT,
    `member_id`                 INT(20)    NULL,
    `work_id`                   INT(20)    NULL,
    `volunteer_date`            DATETIME   NULL,
    PRIMARY KEY (volunteer_id)
)default character set utf8 collate UTF8_GENERAL_CI;;
CREATE TABLE progress
(
    `progress_id`              INT        NOT NULL    AUTO_INCREMENT,
    `work_id`                  INT(20)    NULL,
    `volunteer_id`             INT(20)    NULL,
    `finish_date`              INT(10)    NULL,
    PRIMARY KEY (progress_id)
)default character set utf8 collate UTF8_GENERAL_CI;;