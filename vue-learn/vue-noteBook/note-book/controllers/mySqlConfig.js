var mysql = require('mysql')
var config = require('./defaultConfig')

// 连接线程池

// 创建线程池
var pool = mysql.createPool({
    host: config.database.HOST,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    port: config.database.PORT,
    database: config.database.DATABASE
})

// 统一链接数据库的方法
let allServices = {
    query: function(sql, values) {
        return new Promise((resolve, reject) => {
            pool.getConnection(function(err, connection) { //建立链接
                if (err) {
                    reject(err)
                } else {
                    connection.query(sql, values, (err, rows) => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(rows)
                        }
                        // 释放连接
                        connection.release()
                    })
                }

            })
        })
    }
}



//读取所有users表的数据
let getAllUsers = function() {
    let _sql = `select * from users;`
    return allServices.query(_sql)
}


//导出方法
module.exports = {
    getAllUsers
}