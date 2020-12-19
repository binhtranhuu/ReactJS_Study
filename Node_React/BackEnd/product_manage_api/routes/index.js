const { response } = require('express');
var express = require('express');
var router = express.Router();
//Connect Databse
const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'product_manage',
  password: '24091999',
  port: 5432,
})

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/add', function (req, res, next) {
  res.render('add', { title: 'Express' });
});

router.post('/add', function (req, res, next) {
  var product_name = req.body.product_name,
  product_price = req.body.product_price,
  product_img = req.body.product_img;
  pool.query("INSERT INTO product_info (product_name, product_price, product_img) VALUES ($1, $2, $3)", [product_name, product_price, product_img], (error, response) => {
    if(error) {
      res.send(error);
    } else {
      res.header("Access-Control-Allow-Origin", "*");
      res.send("Them du lieu thanh cong " + response);
    }
  });
});

// API get Data from PostgresSQL
router.get('/getdata01', function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  
  // console.log("Day la API lay du lieu");
  pool.query('SELECT * FROM product_info', (error, response) => {
    if (error) {
      console.log(error);
    } else {
      res.send(response.rows)
    }
    // pool.end();
  })
});

module.exports = router;
