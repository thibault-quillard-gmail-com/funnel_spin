var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
  
// set port
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});
 
// default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});
// connection configurations
var dbConn = mysql.createConnection({
    host: '34.89.122.157',
    user: 'root',
    password: 'funnelapi',
    database: 'funnel_api'
});
  
// connect to database
dbConn.connect(); 

 // app.use(function (req, res, next) {

    // // Website you wish to allow to connect
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // // Request methods you wish to allow
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // // Request headers you wish to allow
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // // Set to true if you need the website to include cookies in the requests sent
    // // to the API (e.g. in case you use sessions)
    // res.setHeader('Access-Control-Allow-Credentials', true);

    // // Pass to next layer of middleware
    // next();
// });
app.get('/gethere', function (req, res) {
		res.send('Working! gethere test')
});

// app.post('/login',(req, res) => {	 
	 // let sql = "select * from  users where Email='"+req.body.email+"' and  Password='"+req.body.password+"' ";
     // console.log(sql)
  // let query = dbConn.query(sql, (err, results) => {
    // if(err) throw err;
    // res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  // });
// });
 
// // Retrieve all users 
// app.get('/users', function (req, res) {
    // dbConn.query('SELECT * FROM users', function (error, results, fields) {
        // if (error) throw error;
        // return res.send({  data: results });
    // });
// });

module.exports = app;