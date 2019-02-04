

class LoginDAO{
    
        constructor(dbConnection){
            this.connection = dbConnection;
        }
    

        addNewUserToDatabase(login, password){
            let sql = `INSERT INTO users (login,  password) VALUES ('${login}', '${password}');`;

            this.connection.query(sql, function (err, result) {
              if (err) {console.log("SQL ERROR adding new user to database")}
            });
            let userID = this.getUserIDFromDatabase(login, password);
            return userID;
        }
    

        getUserIDFromDatabase(login, password){
            var userID = undefined;
            let sql = `SELECT id FROM users WHERE login=${login} AND password=${password};`

            this.connection.query(sql, function (err, result, fields) {
                if (err) {console.log("SQL ERROR getting user from database")};
                userID = result;
              });
            return userID;
        }

        
        getAllUsersFromDB(){
            let self = this;
            let sql = `SELECT * FROM users;`

            return new Promise(function(resolve, reject){
                self.connection.query(sql, function (err, result, fields) {
                    if (err) console.log("SQL ERROR getting allUsers from database")
                    resolve(result);
                });
            })
        }
        
    }
    
    module.exports = LoginDAO;