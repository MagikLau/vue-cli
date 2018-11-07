module.exports = function () {
    let sql_util = {};
    let mysql = require('mysql');

    let pool = null;

    sql_util.init = function(){
        pool = mysql.createPool({
            connectionLimit : 20,
            host: 'cdb-****.gz.tencentcdb.com',
            user: 'root',
            password: '********',
            database: 'test_schema',
            port: '10005'
        });
        console.log('[DeBug](SQL) Connecting...');
        // console.log(pool);
    };

    sql_util.query = function( sql, sqlParams, fn ){
        pool.query( sql, sqlParams, function (err, result) {
            console.log('[DeBug](SQL) '+sql+', params: '+sqlParams);
            console.log('result in mysql_util: '+JSON.stringify(result));
            fn( null, result );
        });

    };
    return sql_util;
};
