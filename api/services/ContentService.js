class ContentService{
    static async getContent(userid){
        let user_list = await ContentModel.find({userid:userid});
        return user_list
    }

    static async saveContent(query){
        let userid = query.userid,
            id = query.id,
            content = query.content;
        try {
            let searchContent = await ContentModel.find({id:id});
            let message;
            if(searchContent.length > 0){
                message = await ContentModel.update({id:id}).set({
                    id: id,content: content, userid: userid
                });
            }else{
                message = await ContentModel.create({
                    id: id,content: content, userid: userid
                })
            }
            return {
                status:200,
                data:message
            }
        } catch (error) {
            return {
                status:error.status,
                data:error.invalidAttributes
            }
        }
    }

    static async deleteContent(id, userid){
        try {
            let findId = await ContentModel.find({id:id});
            if(findId.length === 0){
                return {
                    status:"failed",
                    message:"无效的id"
                }
            }else{
                try {
                    await ContentModel.destroy({id:id});
                    let user_list = await ContentModel.find({userid:userid});
                    return {
                        status:"success",
                        message:"删除成功",
                        data:user_list
                    }
                } catch (error) {
                    return {
                        status:"failed",
                        message:error
                    }
                }
            }
        } catch (error) {
            return {
                status:"failed",
                messgae:error,
                data:[]
            }
        }
    }
}

module.exports = ContentService;