class UserDAO{

    constructor(dbConnection){
        this.connection = dbConnection;
    }

    addNewUserToDatabase(login, password){
        let queryRes = 1;
        let sql = `INSERT INTO users (login,  password) VALUES ('${login}', '${password}');`;
        this.connection.query(sql, function (err, result) {
          if (err) {queryRes = 0;}
          else {queryRes = 1;}
        });
        return queryRes;
    }

    getAllUsersFromDataBase(){
        this.connection.query("SELECT * FROM users", function (err, result, fields) {
            if (err) throw er;
            console.log(result);
            return result;
          });
    }

}

module.exports = UserDAO;