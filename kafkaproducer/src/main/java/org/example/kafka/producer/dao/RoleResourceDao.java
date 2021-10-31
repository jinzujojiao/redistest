package org.example.kafka.producer.dao;

import org.example.kafka.producer.dao.exception.DataExistException;
import org.example.kafka.producer.dao.exception.DataNotExistException;
import org.example.kafka.producer.pojo.AppRes;
import org.example.kafka.producer.pojo.Role;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;

@Repository
public class RoleResourceDao extends AbstractDao {

    private static Logger logger = LoggerFactory.getLogger(RoleResourceDao.class);

    @Autowired
    private AppResDao appResDao;

    @Autowired
    private RoleDao roleDao;

    public RoleResourceDao(DataSource masterDataSource, DataSource slaveDataSource) {
        super(masterDataSource, slaveDataSource);
    }

    public int create(String roleName, String appName, String resFP) throws DataNotExistException, DataExistException {
        Role role = roleDao.findRoleByName(roleName);
        if (null == role) {
            logger.warn("Role {} does not exist", roleName);
            throw new DataNotExistException("Role "+roleName+" does not exist");
        }

        AppRes appRes = appResDao.findAppRes(appName, resFP);
        if (null == appRes) {
            logger.warn("Res {} in App{} does not exist", resFP, appName);
            throw new DataNotExistException("Res "+resFP+" in App "+appName+" does not exist");
        }

        try {
            long bt = System.currentTimeMillis();
            int ret = masterJdbcTemplate.update("insert into role_res (roleid, appresid) values(?,?)",
                    role.getId(), appRes.getId());
            long et = System.currentTimeMillis();
            //logger.info("create cost {} ms", et-bt);
            return ret;
        } catch (DuplicateKeyException e) {
            logger.warn("Res {} in App {} is already in role {}", resFP, appName, roleName);
            throw new DataExistException("Res "+resFP+" in App "+appName+" is already in role "+roleName);
        }
    }
}
