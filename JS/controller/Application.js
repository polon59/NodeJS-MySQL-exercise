var DbConn = require('./DB/dbConn.js');
var LoginController = require('./login/loginController.js');

class Application{

    constructor(){
        this.dbConn = new DbConn();
        this.loginController = new LoginController(this.dbConn.connection);
        this.currentUser = undefined;
    }

    launchApplication(){
        // this.currentUser = this.loginController.register();
        // console.log(this.currentUser.getUserData());

        let a =this.loginController.getAllUsersFromDB();
    }
}

module.exports = Application;