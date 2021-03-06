package org.example.kafka.producer.dao;

import org.example.kafka.producer.pojo.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;

@Repository
public class UserDao extends AbstractDao {

    private static Logger logger = LoggerFactory.getLogger(UserDao.class);

    @Autowired
    public UserDao(DataSource masterDataSource, DataSource slaveDataSource) {

        super(masterDataSource, slaveDataSource);
    }

    public User findUserByName(String name) {
        User user = null;
        try {
            long bt = System.currentTimeMillis();
            user = slaveJdbcTemplate.queryForObject("select * from users where name=?",
                    new Object[]{name}, new UserRowMapper());
            long et = System.currentTimeMillis();
            //logger.info("findUserByName cost {} ms", et-bt);
        } catch (EmptyResultDataAccessException emptyExp) {
            logger.warn("User {} does not exist", name);
        }
        return user;
    }
}
