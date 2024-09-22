import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnectionTest {
    public static void main(String[] args) {
        String jdbcURL = "jdbc:mysql://localhost:3306/cinema_booking_db";
        String username = "root";
        String password = "Candawg34!";

        try {
            Connection connection = DriverManager.getConnection(jdbcURL, username, password);
            if (connection != null) {
                System.out.println("Database connected successfully!");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}

