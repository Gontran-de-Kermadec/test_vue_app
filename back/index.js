const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "",
    database: "test"
 
  });
db.connect(function(err) {

    if (err) throw err;
    console.log("Connecté à la base de données MySQL!");
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json())

app.post('/api/signup/', (req,res) => {
    console.log(req.body);
    let mail = req.body.email;
    let pass = req.body.password;
    let data = [mail, pass]
    res.end('Voilà la réponse du serveur !');
    db.query("INSERT INTO user SET email=?, password=?", data, function(err, result) {
          if(err) throw err;
          console.log(result);
        })
})

app.get('/api/user/', (req, res) => {
    db.query("SELECT email FROM user WHERE id=1", function(err, results) {
        if(err) throw err;
        console.log(results);
        results.forEach( (result) => {
            console.log(`${result.email}`);
            res.json(`${result.email}`);
            //res.end(`${result.email}`)
        });
        
    })
    
})

app.delete('/api/user/', (req, res) => {
    db.query("DELETE FROM user WHERE id=13", function(err, results) {
        if(err) throw err;
        console.log(results);
        res.send('user deleted !')
        // results.forEach( (result) => {
        //     console.log(`${result.email}`);
        //     res.json(`${result.email}`);
        // });    
    })
    
})


const server = http.createServer(app);


server.listen(process.env.PORT || 3000);