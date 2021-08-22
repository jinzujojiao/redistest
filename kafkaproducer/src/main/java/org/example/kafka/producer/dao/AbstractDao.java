package org.example.kafka.producer.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

import javax.sql.DataSource;

public abstract class AbstractDao {

    protected JdbcTemplate jdbcTemplate;

    public AbstractDao(DataSource redistestDataSource) {
        this.jdbcTemplate = new JdbcTemplate(redistestDataSource);
    }

}
