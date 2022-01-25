const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs= require('fs');
const fileUpload = require('express-fileupload');
var mysql = require('mysql');

const app = express()
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(fileUpload());

const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// connection configurations
var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'interview'
});
  
// connect to database
dbConn.connect();

app.post('/add', function (req, res) {

    let product_id = req.body.product_id;
    let quantity = req.body.quantity;
    
    // validation
    if (!product_id || !quantity)
        return res.status(400).send({ error:true, message: 'Please provide product_id and quantity' });

    // insert to db
    dbConn.query("INSERT INTO cart (product_id, quantity) VALUES (?, ?)", [product_id, quantity ], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Cart successfully added' });
    });
});

app.get('/readProductData', function (req, res) {
    dbConn.query('SELECT * FROM product', function (error, results, fields) {
        if (error) throw error;

        // check has data or not
        let message = "";
        if (results === undefined || results.length == 0)
            message = "product table is empty";
        else
            message = "Successfully retrived all Products";

        return res.send({ data: results });
    });
});

app.get('/readCartData', function (req, res) {
    dbConn.query('SELECT * FROM cart', function (error, results, fields) {
        if (error) throw error;

        // check has data or not
        let message = "";
        if (results === undefined || results.length == 0)
            message = "cart table is empty";
        else
            message = "Successfully retrived all Carts";

        return res.send({ data: results });
    });
});


app.get("/singleProduct/:id", function(req,res){
    const id= req.params.id;
    if (!id) {
        return res.status(400).send({ error: true, message: 'Please provide enter id' });
    }

    dbConn.query("SELECT * FROM product where id=?",id,function(err,results){
        res.send({ data: results[0]})
    });
})

app.get("/singleCart/:id", function(req,res){
    const id= req.params.id;
    if (!id) {
        return res.status(400).send({ error: true, message: 'Please provide enter id' });
    }

    dbConn.query("SELECT * FROM cart where product_id=?",id,function(err,results){
        res.send({ data: results})
    });
})



app.delete('/dataDeleteFromCart',function(req,res){
    let id = req.body.id;

    dbConn.query('DELETE FROM cart where id=?',id,function(err,results){
        if(err){throw err}
        let message = "";
        if(results.affectedRows == 0){
            message = "cart not found"
        }
        else{
            message = "cart successfully delete"
        }
        return res.send({ data: results[0],message: message})
    })
})

app.put("/updatedata",function(req,res){
    let id = req.body.id;
    let quantity = req.body.quantity;

    dbConn.query('UPDATE cart set quantity=? WHERE product_id=?',[quantity,id],function(err,results){
        if(err){throw err}
        let message = "";
        if(results.changedRows == 0){
            message = "please input";
        }
        else{
            message ="successfully updatedata";
        }
        return res.send({ data: results,message:message})
    });

})


app.put("/updatedataCart",function(req,res){
    let id = req.body.id;
    let quantity = req.body.quantity;

    dbConn.query('UPDATE cart set quantity=? WHERE id=?',[quantity,id],function(err,results){
        if(err){throw err}
        let message = "";
        if(results.changedRows == 0){
            message = "please input";
        }
        else{
            message ="successfully updatedata";
        }
        return res.send({ data: results,message:message})
    });

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})