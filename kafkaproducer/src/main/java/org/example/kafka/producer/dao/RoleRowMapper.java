package org.example.kafka.producer.dao;

import org.example.kafka.producer.pojo.Role;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class RoleRowMapper implements RowMapper<Role> {
    @Override
    public Role mapRow(ResultSet resultSet, int i) throws SQLException {
        return new Role(resultSet.getLong("id"),
                resultSet.getString("name"));
    }
}
