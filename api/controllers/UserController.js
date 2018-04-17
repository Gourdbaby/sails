
var passport = require('passport');
module.exports = {
    getUser: async function (req, res) {
        passport.authenticate('local', function (err, user, info) {
            if ((err) || (!user)) {
                return res.send({
                    status: info.status,
                    message: info.message,
                    user
                });
            }
            req.logIn(user, function (err) {
                if (err) res.send(err);
                return res.send({
                    status: info.status,
                    message: info.message,
                    user
                });
            });
        })(req, res);
    },
    logout: function (req, res) {
        req.logout();
        res.redirect('/');
    },
    createUser: async function (req, res) {
        let body = req.body;
        let obj = {
            status: 'success',
            message: "创建成功"
        }
        try {
            let creatUser = await UserService.creatUser(body);
            obj.user = creatUser;
        } catch (error) {
            res.status(error.status);
            obj.status = "failed";
            obj.message = "创建失败"
        }
        res.send(obj)
    }
}