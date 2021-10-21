package org.example.kafka.producer.dao;

import org.example.kafka.producer.dao.exception.DataExistException;
import org.example.kafka.producer.dao.exception.DataNotExistException;
import org.example.kafka.producer.pojo.Role;
import org.example.kafka.producer.pojo.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;

@Repository
public class UserRoleDao extends AbstractDao {

    private static Logger logger = LoggerFactory.getLogger(UserRoleDao.class);

    @Autowired
    private UserDao userDao;

    @Autowired
    private RoleDao roleDao;

    @Autowired
    public UserRoleDao(DataSource masterDataSource, DataSource slaveDataSource) {

        super(masterDataSource, slaveDataSource);
    }

    public int create(String userName, String roleName) throws DataNotExistException, DataExistException {
        User user = userDao.findUserByName(userName);
        Role role = roleDao.findRoleByName(roleName);

        if ((null == user) || (null == role)) {
            logger.warn("User {} or Role {} does not exist", userName, roleName);
            throw new DataNotExistException("User "+userName+" or Role "+roleName+" does not exist");
        }

        try {
            long bt = System.currentTimeMillis();
            int ret = masterJdbcTemplate.update("insert into user_role (userid, roleid) values(?,?)",
                    user.getId(), role.getId());
            long et = System.currentTimeMillis();
            //logger.info("create cost {} ms", et-bt);
            return ret;
        } catch (DuplicateKeyException e) {
            logger.warn("User {} is already in role {}", userName, roleName);
            throw new DataExistException("User "+userName+" is already in role "+roleName);
        }
    }
}
