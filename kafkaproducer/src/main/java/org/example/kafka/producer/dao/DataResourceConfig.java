package org.example.kafka.producer.dao;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import javax.sql.DataSource;
import java.util.HashMap;
import java.util.Map;

@Configuration
public class DataResourceConfig {
    @Bean
    public DataSource masterDataSource() {
        String dbHost = System.getenv("MASTER_DB_HOST");
        String dbPort = System.getenv("MASTER_DB_PORT");
        String dbName = System.getenv("MASTER_DB_NAME");
        String dbUser = System.getenv("MASTER_DB_USER");
        String dbPasswd = System.getenv("MASTER_DB_PASSWD");
        String dbPoolSize = System.getenv("MASTER_DB_POOLSIZE");

        HikariConfig config = new HikariConfig();
        config.setJdbcUrl("jdbc:mariadb://"+dbHost+":"+dbPort+"/"+dbName);
        config.setUsername(dbUser);
        config.setPassword(dbPasswd);
        config.setMaximumPoolSize(Integer.valueOf(dbPoolSize));

        return new HikariDataSource(config);
    }

    @Bean
    public DataSource slaveDataSource() {
        String dbHost = System.getenv("SLAVE_DB_HOST");
        String dbPort = System.getenv("SLAVE_DB_PORT");
        String dbName = System.getenv("SLAVE_DB_NAME");
        String dbUser = System.getenv("SLAVE_DB_USER");
        String dbPasswd = System.getenv("SLAVE_DB_PASSWD");
        String dbPoolSize = System.getenv("SLAVE_DB_POOLSIZE");

        HikariConfig config = new HikariConfig();
        config.setJdbcUrl("jdbc:mariadb://"+dbHost+":"+dbPort+"/"+dbName);
        config.setUsername(dbUser);
        config.setPassword(dbPasswd);
        config.setMaximumPoolSize(Integer.valueOf(dbPoolSize));

        return new HikariDataSource(config);
    }
    
}
