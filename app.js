var express = require("express");

var app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(3000);

app.get("/", function(request, response)  {
   
    response.render("home");
});

app.get("/test", function(request, response)  {
   
    response.render("test");
});

//GENDER-API

try {
    var GenderApi = require('gender-api.com-client');

    var genderApiClient = new GenderApi.Client('WhMPwDaKAFB42wQhGxxGrJGFgnesjsc3Nmp3');

    genderApiClient.getByFirstName('theresa', function (response) {
        console.log(response.gender); //female
        console.log(response.accuracy); //98
    });

    genderApiClient.getByFirstNameAndCountry('john', 'US', function (response) {
        console.log(response.gender); //male
        console.log(response.accuracy); //99
    });

}
catch(e) {
    console.log('Error:', e);
}

// BASE DE DONNEE   

const mysql = require('mysql');

const db = mysql.createConnection({

    host: "127.0.0.1",
 
    database: "name_bfm",

    user: "root",
 
    password: "NEWPASS",

    port: "3306"
 
});

db.connect((err)=>{
    if (err) {
        console.log(`error connecting: ${err.stack}`);
    } else {
        console.log("connecté à la base de donnée - name_bfm");
        console.log(`connected as id ${db.threadId}`)
    }
});

  

