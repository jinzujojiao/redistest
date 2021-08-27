package org.example.kafka.producer.dao;

import org.example.kafka.producer.pojo.User;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class UserRowMapper implements RowMapper<User> {
    @Override
    public User mapRow(ResultSet resultSet, int i) throws SQLException {
        User user = new User(resultSet.getLong("id"),
                resultSet.getString("name"));
        return user;
    }
}
