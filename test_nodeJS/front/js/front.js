const axios = require("axios");
const recup = [];
let recupAll = {};


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

async function take() {
    const res = await axios.get('http://localhost:3000/name');
    recup["name"] = res.data.name;
    console.log(recup["name"].name, recup["name"].gender);
    recupAll = recup["name"].name;
    console.log(recupAll);
    return recupAll

    //var elem = document.getElementById('name');
    //elem.innerHTML = "skdfjg";
}

console.log(recupAll);

async function displayName() {
    var elem = document.getElementById("name");
    elem.innerHTML = `lskdnflsknf: ${recupAll}`;
}

take();
