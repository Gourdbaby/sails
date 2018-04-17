
class UserService {
    constructor(){}
    static async getUsers(query, isSignUp){
        let user = await UserModel.find().where({name: query.userName, password:query.password})
        let status = 'success';
        if(user.length === 0) status = 'failed';
        let result = {
            status : status,
            data: user
        } 
        return result;
    }
    static async creatUser(createUser){
        let user = await UserModel.create({
            name: createUser.userName,
            pass: createUser.password
        }).fetch();
        return user;
    }
}




module.exports = UserService;