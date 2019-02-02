var DbConn = require('./DB/dbConn.js');
var UserDAO = require('./DB/userDAO.js');

class Application{

    constructor(){
        this.dbConn = new DbConn();
        this.userDAO = new UserDAO(this.dbConn.connection);
    }

    launchApplication(){
        this.userDAO.addNewUserToDatabase("Zbyszek", "1234");
        this.userDAO.getAllUsersFromDataBase();
    }
}

module.exports = Application;