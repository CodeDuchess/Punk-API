
// USED STRICT MODE TO SOLVE: “UNCAUGHT SYNTAX ERROR: UNEXPECTED TOKEN U IN JSON @ POSITION 0”
'use strict';

//var apiData="";
const app = document.getElementById('root');

// Company logo
const logo = document.createElement('img')
logo.src = 'brewdog-logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(logo)
app.appendChild(container)

const container1 = document.createElement('div');
container1.setAttribute('class', 'container1');
app.appendChild(container1);
var request = new XMLHttpRequest();

//GET REQUEST WITH USE OF HEROKU AS A PROXY TO SOLVE CORS ERROR
request.open('GET','https://api.punkapi.com/v2/beers?ibu_lt=36', 
true);

request.onload = function () {  
// CONVERT JSON DATA TO JAVASCRIPT OBJECTS USING JSON.PARSE
    var apiData = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        apiData.forEach(beer => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        // render relevant data: beer name in an <h3> tag     
        const h3 = document.createElement('h3');
        h3.textContent = beer.name;
            
        // render relevant data: beer description in an <p> tag     
        const p = document.createElement('p');
        beer.description = beer.description.substring(0, 300);
        p.textContent = `${beer.description}...`;
            
        
        container1.appendChild(card);
        card.appendChild(h3);
        card.appendChild(p);
     
         });

  // ERROR HANDLING
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `It's not working!`;
        app.appendChild(errorMessage);
    }
}



request.send();

