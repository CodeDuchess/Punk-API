
// USED STRICT MODE TO SOLVE: “UNCAUGHT SYNTAX ERROR: UNEXPECTED TOKEN U IN JSON @ POSITION 0”
'use strict';

//var apiData="";
const app = document.getElementById('root');
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

      // render relevant data: beer name      
        const h1 = document.createElement('h1');
        h1.textContent = beer.name;
            
        /*const h3 = document.createElement('h3');
        h3.textContent = job.type;
            
        const h4 = document.createElement('h4');
        h4.textContent = job.location;   
            
        const p = document.createElement('p');
        job.description = job.description.substring(0, 300);
        p.textContent = `${job.description}...`;
            
        const h5 = document.createElement('h5');
        h5.textContent = `${job.url}...`;    */
            
        container1.appendChild(card);
        card.appendChild(h1);
       /* card.appendChild(h3);    
        card.appendChild(h4);      
        card.appendChild(p);
        card.appendChild(h5);  */
         });

  // ERROR HANDLING
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `It's not working!`;
        app.appendChild(errorMessage);
    }
}



request.send();

