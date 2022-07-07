const express = require("express");
const router = express.Router();
const {db} = require('./models/dbConfig');
const app = express();
const http = require('http');
const res = require("express/lib/response");
const { query } = require("express");

const output = {};

function goOutPut(index, value) {
    output ["name"] = index;
    output ["gender"] = value;
    return output;
}


const nameController = (req, res, next) => {
    try {
        const data = reponseAPI();
        return res.send(data).status(200);
    } catch (error) {
        throw error;
    }
}

function apiResponse(name) {

    var GenderApi = require('gender-api.com-client');

    var genderApiClient = new GenderApi.Client('aYxHo9zGfZnveUrLGfvk68msVZgoFRvwH42x');

    genderApiClient.getByFirstName(name, function (response) {
        console.log(name);
        console.log(response.gender); 
        console.log(response.accuracy);
        return goOutPut(response, name);
    });
    return "";
}

function apiSql() {
    try {

    var sql = "SELECT prenom FROM name ORDER BY RAND() LIMIT 1";

    db.query(sql, function(err, result) {
        if (err) throw err;
        apiResponse(result[0].prenom) ;
    });

    }
    catch(e) {
        console.log('Error:', e);
    }
}

apiSql();

function reponseAPI(){
    try {
        apiResponse();
        return output;
    }catch (error) {
        throw error;
    }
}

http.createServer(app).listen(
    process.env.PORT || 8000);

router.get("/name", nameController);

app.use("/", router);

app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    console.log(err.message);
    res.status(err.status || 500);
    res.json(err);
})