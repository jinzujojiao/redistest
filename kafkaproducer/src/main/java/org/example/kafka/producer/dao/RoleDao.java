package org.example.kafka.producer.dao;

import org.example.kafka.producer.pojo.Role;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;

@Repository
public class RoleDao extends AbstractDao {

    private static Logger logger = LoggerFactory.getLogger(RoleDao.class);

    @Autowired
    public RoleDao(DataSource redistestDataSource) {
        super(redistestDataSource);
    }

    public Role findRoleByName(String name) {
        Role role = null;
        try {
            long bt = System.currentTimeMillis();
            role = jdbcTemplate.queryForObject("select * from roles where name=?",
                    new Object[]{name}, new RoleRowMapper());
            long et = System.currentTimeMillis();
            logger.info("findRoleByName cost {} ms", et-bt);
        } catch (EmptyResultDataAccessException emptyExp) {
            logger.warn("Role {} does not exist", name);
        }
        return role;
    }
}
