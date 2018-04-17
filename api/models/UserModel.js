
const bcrypt = require('bcrypt-nodejs');
module.exports = {
    tableName:'user',
    attributes:{
        name:{
            columnName:'name',
            type:'string',
            required: true
        },
        age:{
            columnName:'age',
            type:'number'
        },
        dress:{
            columnName:'address',
            type:'string'
        },
        pass:{
            columnName:'password',
            type:'string',
            required: true
        }
    },
    beforeCreate: function(user, cb){
        bcrypt.genSalt(10, function(err, salt){
            bcrypt.hash(user.pass, salt, null, function(err, hash){
            if(err) return cb(err);
                user.pass = hash;
                return cb();
            });
        });
    }
}