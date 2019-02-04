// var UserDAO = require('./../../controller/DB/userDAO.js');

class User{
    
    constructor(dbConnection, id, login){
        this.id = id;
        this.login = login;
    }


    getUserData(){
        return `*** USER DATA: id:${this.id} login:${this.login}`
    }

}
    
    module.exports = User;