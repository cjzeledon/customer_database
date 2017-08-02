// let database = document.createElement("script");
// database.src = "customers.js";
// document.getElementsByTagName("head")[0].appendChild(database);
// // database.onload = callback_function;
// document.write("Hello, from the JavaScript File.");
//
//
// console.log (database);

console.log(customers);

// function profilemenot(){
// for (i = 0; i > 12; i++){
//
//
// const database =`
//
// <h1>Internal Company Directory</h1>
//
// <div class = "database">
//
// <div class ="profile">
// <div id ="profile_img"><img src="${customers.results[i].picture.large}"></div>
// <div id="fullname">${customers.results[i].name.title} ${customers.results[i].name.first} ${customers.results[i].name.last}</div>
// <div id="emailaddress">${customers.results[i].email}</div>
// <div id="addressphone">${customers.results[i].location.street}<br />
// ${customers.results[i].location.city} ${customers.results[i].location.state} ${customers.results[i].location.postcode}</div>
// <div id="ssn">${customers.results[i].id.value}</div>
// </div>
// </div>
//
// `;
//
// body.innerHTML = database;
// }
// return profilemenot;
// }




const header = document.querySelector("header");
let main ='';
// const inside_header = `
// <h1>Internal Company Directory</h1>
// <div class = "people">`;
//


  for (let i = 0; i < customers.results.length; i++){


let people =`
<div class ="profile">
<div class = "profile_img"><img src="${customers.results[i].picture.large}"></div>
<div class = "fullname">${customers.results[i].name.title} ${customers.results[i].name.first} ${customers.results[i].name.last}</div>
<div class = "emailaddress">${customers.results[i].email}</div>
<div class = "addressphone">${customers.results[i].location.street}<br />
${customers.results[i].location.city} ${customers.results[i].location.state} ${customers.results[i].location.postcode}</div>
<div class = "ssn">${customers.results[i].id.value}</div>
</div>
</div>`;
main += people;
}


let body = document.querySelector("body");
body.innerHTML = main;
