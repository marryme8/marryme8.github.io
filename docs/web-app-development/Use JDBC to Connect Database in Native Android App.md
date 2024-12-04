---
sidebar_position: 4
---
# Use JDBC to Connect MySQL in Native Android App

I had a lot of trouble when developing native Android app with JDBC and this article will teach you how to connect to `MySQL` using JDBC successfully.

## Get Driver of JDBC

In fact, all the steps are simple. All the trouble is caused by the incompatibility between `JDBC` version and `MySQL` version on the server. When you are developing native Android app, you can only use `MySQL Connector/J 5.1.x`. Native Android is not compatible with `MySQL Connector/J 8.0.x`.

## Add Library

After downloading the jar package of `MySQL Connector/J 5.1.x`, you should put the jar package into your project and `Add to Library`.

## Deploy MySQL5

Then, what you should do is configure `MySQL5` on your server. Remember, don't use the latest version of `MySQL`.

```mysql
docker pull mysql:5.x
```

Then, you can refer to [Deployment of MySQL](https://yufoo1.github.io/docs/web-app-development/Deploy%20Your%20Own%20Website%20and%20Database%20on%20the%20Server#deployment-of-mysql) to finish the configuration.

## Implement Connection Class

```java
import java.sql.*;

public class MysqlConnector {
    static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
    static final String DB_URL = "jdbc:mysql://SERVER IP ADDRESS:PORT/NAME OF PROJECT?characterEncoding=UTF-8&useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC";

    static final String USERNAME = "USER";
    static final String PASSWORD = "PASSWORD";
    static Connection conn = null;
    public static Connection getConnection() throws InterruptedException {
        new Thread(() -> {
            try {
                Class.forName(JDBC_DRIVER);
                try {
                    conn = DriverManager.getConnection(DB_URL, USERNAME, PASSWORD);
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            }
        }).start();
        Thread.sleep(1500);
        return conn;
    }
}
```

## Visit Database

After written the connection class, you can query the database as follows:

```sql
ResultSet rs = null;
new Thread(() -> {
           try {
                Connection connection = MysqlConnector.getConnection();
                String sql = "select * from NAME OF TABLE where id=?";
                PreparedStatement ps = connection.prepareStatement(sql);
                ps.setString(1, id); # necessary parameter
                rs = ps.executeQuery(); # get the return result
            } catch (InterruptedException | SQLException e) {
                e.printStackTrace();
            }
        }).start();
```

If you want to insert data:

```java
new Thread(() -> {
                try {
                    Connection connection = MysqlConnector.getConnection();
                    String sql = "INSERT INTO NAME OF TABLE(PARAMETER) VALUES(?)";
                    PreparedStatement p = connection.prepareStatement(sql);
                    p.setString(1, PARAMETER); # necessary parameter
                    p.executeUpdate();
                } catch (InterruptedException | SQLException e) {
                    e.printStackTrace();
                }
            }).start();
```

> You must visit the database through child threads. If you use the main thread, you may not be able to connect. Meanwhile, you also need to be aware of possible concurrency issues.
