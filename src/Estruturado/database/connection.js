var knex = require('knex')({
    client: 'mysql',
    connection: {
        host : 'localhost',      
        user : 'root',     
        password : '',  
        database : 'db_iagoaws'
     }
});
module.exports = knex