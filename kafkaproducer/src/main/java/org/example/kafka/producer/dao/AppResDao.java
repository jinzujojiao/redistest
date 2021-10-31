package org.example.kafka.producer.dao;

import org.example.kafka.producer.pojo.App;
import org.example.kafka.producer.pojo.AppRes;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.sql.ResultSet;
import java.sql.SQLException;

@Repository
public class AppResDao extends AbstractDao {
    private static Logger logger = LoggerFactory.getLogger(AppResDao.class);

    public AppResDao(DataSource masterDataSource, DataSource slaveDataSource) {
        super(masterDataSource, slaveDataSource);
    }

    public AppRes findAppRes(String appName, String resFP) {
        AppRes appRes = null;
        try {
            long bt = System.currentTimeMillis();
            appRes = slaveJdbcTemplate.queryForObject("select ar.*, a.name from app_res ar, apps a where a.name = ? and ar.fullpath = ? and ar.appid = a.id",
                    new Object[]{appName, resFP}, new RowMapper<AppRes>() {
                        @Override
                        public AppRes mapRow(ResultSet resultSet, int i) throws SQLException {
                            return new AppRes(resultSet.getLong("id"),
                                    resultSet.getString("res_name"),
                                    resultSet.getString("fullpath"),
                                    resultSet.getLong("parentid"),
                                    resultSet.getLong("appid"),
                                    resultSet.getString("name"));
                        }
                    });
            long et = System.currentTimeMillis();
            //logger.info("findRoleByName cost {} ms", et-bt);
        } catch (EmptyResultDataAccessException emptyExp) {
            logger.warn("Mapping of app {} and res {} does not exist", appName, resFP);
        }
        return appRes;
    }
}
