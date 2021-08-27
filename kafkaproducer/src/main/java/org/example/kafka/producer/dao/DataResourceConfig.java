package org.example.kafka.producer.dao;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import javax.sql.DataSource;

@Configuration
public class DataResourceConfig {
    @Bean
    public DataSource redistestDataSource() {
        String dbHost = System.getenv("REDISTEST_DB_HOST");
        String dbPort = System.getenv("REDISTEST_DB_PORT");
        String dbName = System.getenv("REDISTEST_DB_NAME");
        String dbUser = System.getenv("REDISTEST_DB_USER");
        String dbPasswd = System.getenv("REDISTEST_DB_PASSWD");
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("org.mariadb.jdbc.Driver");
        dataSource.setUrl("jdbc:mariadb://"+dbHost+":"+dbPort+"/"+dbName);
        dataSource.setUsername(dbUser);
        dataSource.setPassword(dbPasswd);

        return dataSource;
    }
}
