package org.example.kafka.producer.dao;

import org.example.kafka.producer.pojo.App;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class AppRowMapper implements RowMapper<App> {
    @Override
    public App mapRow(ResultSet resultSet, int i) throws SQLException {
        return new App(resultSet.getLong("id"),
                resultSet.getString("name"));
    }
}
