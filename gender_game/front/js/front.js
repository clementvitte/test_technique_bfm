const axios = require("axios");
const recup = [];
var recupAll = "";


/*const take = async () => {
    const res = await axios.get('http://localhost:3000/name');
    recup["name"] = res.data.name;
    console.log(recup["name"].name, recup["name"].gender);
    const elem = document.getElementById("newName");
    elem.innerHTML = "lskdnflsknf";

    return (recup["name"].name, recup["name"].gender)
}

const displayName = () => {
    
}

displayName();
take();*/

function changeColor(newColor) {
    var elem = document.getElementById('para');
    elem.style.color = newColor;
}

async function take(recupAll) {
    const res = await axios.get('http://localhost:8000/name');
    recup["name"] = res.data.name;
    console.log(recup["name"].name, recup["name"].gender);
    var recupAll = recup["name"].name;
    console.log(recupAll);
    //takes(recupAll);
    return recupAll
}

console.log(recupAll);

async function displayName(recupAll) {
    var elem = document.getElementById("name");
    elem.innerHTML = `Name: ${recupAll}`;
    console.log(recupAll);
}

async function takes (name) {
    console.log(name);
    var elem = (document.getElementById("name").innerHTML = `Name: ${name}`);
}

take();
