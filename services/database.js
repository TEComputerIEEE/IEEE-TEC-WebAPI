const mongo = require('mongodb');
var main_database;

mongo.MongoClient.connect('mongodb://localhost:27017/main_database' , function(err , database) {
    if(!err) {
        main_database = database; //Instancia de la base de datos
        
        console.log('Database Status: \u001B[32mACTIVE\u001B[0m \n');
        
    }
    else{
        throw err;
        console.log('\u001B[31mError Connecting to the database\u001B[0m');
    }
});



exports.getUserInfo = function(req , res){
    user = req.param('UserID');
    main_database.collection('users').find({"id_chat" : user}).toArray(function(error, doc){
        if(error) {
            //throw error;
            res.send(200, 'lol');
        }
        else{
            res.send(200, doc);
        }
    });
}