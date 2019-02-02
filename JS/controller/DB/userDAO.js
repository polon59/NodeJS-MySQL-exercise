class UserDAO{

    constructor(dbConnection){
        this.connection = dbConnection;
    }

    addNewUserToDatabase(login, password){
        let sql = `INSERT INTO users (login,  password) VALUES ('${login}', '${password}');`;
        this.connection.query(sql, function (err, result) {
          if (err) throw err;
        });
    }

    getAllUsersFromDataBase(){
        this.connection.query("SELECT * FROM users", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            return result;
          });
    }

}

module.exports = UserDAO;