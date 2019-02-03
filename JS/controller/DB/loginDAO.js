class LoginDAO{
    
        constructor(dbConnection){
            this.connection = dbConnection;
        }
    
        
        addNewUserToDatabase(login, password){
            let queryRes = 1;
            let sql = `INSERT INTO users (login,  password) VALUES ('${login}', '${password}');`;

            this.connection.query(sql, function (err, result) {
              if (err) {console.log("SQL ERROR adding new user to database")}
            });
            let userID = this.getUserIDFromDatabase(login, password);
            return userID;
        }
    

        getUserIDFromDatabase(login, password){
            let userID = undefined;
            let sql = `SELECT id FROM users WHERE login=${login} AND password=${password};`

            this.connection.query(sql, function (err, result, fields) {
                if (err) console.log("SQL ERROR getting user from database");
                console.log(result);
                userID = result;
              });
            return result;
        }
    
    }
    
    module.exports = LoginDAO;