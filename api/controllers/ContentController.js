module.exports = {
    getContent: async function(req, res) {
        let query = req.query
        if(req.user){
            let user_list = await ContentService.getContent(query.userid);
            res.send({
                status: "success",
                message:"当前处于登录状态",
                data:user_list
            })
        }else{
            res.status(401);
            res.send({
                status: "failed",
                message:"登录失效，请重新登录"
            })
        }
    },
    saveContent: async function (req, res) {
        let query = req.body;
        let saveMessage = await ContentService.saveContent(query);
        let status = 'success';
        if(saveMessage.status !== 200) status = 'failed';
        res.status(saveMessage.status)
        res.send({
            status:status
        })
    },
    deleteContent: async function (req, res) {
        let query = req.query;
        let del = await ContentService.deleteContent(query.id, req.user.id);
        res.send(del);
    }
}