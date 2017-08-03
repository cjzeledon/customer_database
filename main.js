console.log(customers);


// const header = document.querySelector("header");


// let title = `<h1>Internal Company Directory`;


let main ='';
// let title = `<h1>Internal Company Directory</h1>`;
// main.innerHTML = title;


for (let i = 0; i < customers.results.length; i++){
    let people =`
    <div class = "profile">
    <img src="${customers.results[i].picture.large}">
    <p class = "fullname">${customers.results[i].name.first} ${customers.results[i].name.last}</p>
    <p class = "emailaddress">${customers.results[i].email}</p>
    <p class = "addressphone">${customers.results[i].location.street}<br />
    ${customers.results[i].location.city}, ${customers.results[i].location.state} ${customers.results[i].location.postcode}<br />
    ${customers.results[i].phone}</p>
    <p class = "ssn">${customers.results[i].id.value}</p>
    </div>`;
    main += people;
}


const body = document.querySelector("body");
body.innerHTML = main;
