package org.example.kafka.producer.dao;

import org.example.kafka.producer.pojo.App;
import org.example.kafka.producer.pojo.Role;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;

@Repository
public class AppDao extends AbstractDao {
    private static Logger logger = LoggerFactory.getLogger(AppDao.class);

    public AppDao(DataSource masterDataSource, DataSource slaveDataSource) {
        super(masterDataSource, slaveDataSource);
    }

    public App findAppByName(String name) {
        App app = null;
        try {
            long bt = System.currentTimeMillis();
            app = slaveJdbcTemplate.queryForObject("select * from apps where name=?",
                    new Object[]{name}, new AppRowMapper());
            long et = System.currentTimeMillis();
            //logger.info("findRoleByName cost {} ms", et-bt);
        } catch (EmptyResultDataAccessException emptyExp) {
            logger.warn("App {} does not exist", name);
        }
        return app;
    }
}
