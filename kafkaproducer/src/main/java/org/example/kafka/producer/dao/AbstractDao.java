package org.example.kafka.producer.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

import javax.sql.DataSource;

public abstract class AbstractDao {

    protected JdbcTemplate masterJdbcTemplate;

    protected JdbcTemplate slaveJdbcTemplate;

    public AbstractDao(DataSource masterDataSource, DataSource slaveDataSource) {
        this.masterJdbcTemplate = new JdbcTemplate(masterDataSource);
        this.slaveJdbcTemplate = new JdbcTemplate(slaveDataSource);
    }

}
