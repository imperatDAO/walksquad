package com.walksquad.app.datasourceTest;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.sql.Connection;
import java.sql.SQLException;

import javax.sql.DataSource;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

public class DatabaseConnectionTest {
    
    // @Autowired
    // private DataSource dataSource;

    // @Test
    // public void testDatabaseConnection() throws SQLException {
    //     try (Connection connection = dataSource.getConnection()) {
    //         assertNotNull(connection);
    //         assertTrue(connection.isValid(1));
    //     }
    // }
}
