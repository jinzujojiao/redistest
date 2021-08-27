package org.example.kafka.producer.dao;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
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
        String dbPoolSize = System.getenv("REDISTEST_DB_POOLSIZE");

        HikariConfig config = new HikariConfig();
        config.setJdbcUrl("jdbc:mariadb://"+dbHost+":"+dbPort+"/"+dbName);
        config.setUsername(dbUser);
        config.setPassword(dbPasswd);
        config.addDataSourceProperty("maximumPoolSize", dbPoolSize);

        HikariDataSource dataSource = new HikariDataSource(config);

        return dataSource;
    }
}
