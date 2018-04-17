

module.exports = {
    tableName:'user_list',

    // autoCreatedAt: false,
    // autoUpdatedAt: false,

    attributes:{
        id:{
            columnName:'id',
            type:'number',
            required: true
        },
        content:{
            columnName:'content',
            type:"string",
            required:true
        },
        userid:{
            columnName:'userid',
            type:"number",
            required:true
        }
    }
}