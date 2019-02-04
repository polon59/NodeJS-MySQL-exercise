var LoginDAO = require('./../DB/loginDAO.js');
var User = require('./../../model/user/user.js');
// require user


class LoginController{
    
        constructor(dbConnection){
            this.connection = dbConnection;
            this.loginDAO = new LoginDAO(dbConnection);
        }
    
        login(){
            let login = "logowanie";
            let password = "passwordlogowanie";
            let userId = this.loginDAO.getUserIDFromDatabase(login, password);
            console.log(`LOGIN : User ID recieved as: ${userId}`);
            return new User(this.connection, userId, login);
        }
    
        register(){
            let login = "rejestracja";
            let password = "passwordrejestracja";
            let userId = this.loginDAO.addNewUserToDatabase(login, password);
            console.log(`REGISTER : User ID recieved as: ${userId}`);
            return new User(this.connection, userId, login);
        }


        getAllUsersFromDB(){
            let result = this.loginDAO.getAllUsersFromDB();
            result.then(function(allUsers) {
                console.log(allUsers);
             })

            
        }
    
    }
    
    module.exports = LoginController;