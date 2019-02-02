var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysQLpassword",
  database: "mydb"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
// createUsersTable(connection);
// addUserToTable(connection);
displayUsers(connection);


});

function displayUsers(connection) {
        connection.query("SELECT * FROM users", function (err, result, fields) {
          if (err) throw err;
          console.log(result);
        });
}

function addUserToTable(connection) {
    var sql = "INSERT INTO users (login,  password) VALUES ('Rychu', 'rysiek96');";
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("user added");
    });
}


function createUsersTable(connection) {
    var sql = "CREATE TABLE users (login VARCHAR(30) PRIMARY KEY, password VARCHAR(25))";
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
}

function createDatabase(connection) {
    connection.query("CREATE DATABASE mydb", function (err, result) {
        if (err) throw err;
        console.log("Database created");
      });
}