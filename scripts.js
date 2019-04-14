// USED STRICT MODE TO ENSURE CLEANER, STANDARDIZED JS
'use strict';

//VANILLA JS BEGINS
//DECLARE GOBAL VARIABLE
var apiData="";

const app = document.getElementById('root');
const container1 = document.createElement('div');
container1.setAttribute('class', 'container1');
app.appendChild(container1);
var request = new XMLHttpRequest();

//GET REQUEST WITH USE OF HEROKU AS A PROXY TO SOLVE CORS ERROR
request.open('GET','https://cors-anywhere.herokuapp.com/https://api.punkapi.com/v2/beers', 
true);

request.onload = function () {  
// CONVERT JSON DATA TO JAVASCRIPT OBJECTS USING JSON.PARSE
    var apiData = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        apiData.forEach(beer => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

      // RENDER RELEVANT DATA - NAME, DESCRIPTION & TAGLINE     
        const h1 = document.createElement('h1');
        // CHARACHTERS REDUCED TO CREATE CONSISTENT ONE LINE NAMES    
        beer.name = beer.name.substring(0, 22);      
        h1.textContent = beer.name;
            
        const p = document.createElement('p');
        beer.description = beer.description.substring(0, 100);
        p.textContent = `${beer.description}...`;
            
        const h4 = document.createElement('h4');
        beer.tagline = beer.tagline.substring(0, 29);   
        h4.textContent = beer.tagline;   
            
        container1.appendChild(card);
        card.appendChild(h1);
        card.appendChild(h4);      
        card.appendChild(p);
        
         });

  // ERROR HANDLING
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `It's not working!`;
        app.appendChild(errorMessage);
    }
}

// SEARCH FILTER 
var button1 = document.getElementById("button1");
var userInput1 = document.getElementById("userInput1");
button1.addEventListener('click', showResults1);
userInput1.addEventListener("keyup", function(e){
  if (e.keyCode === 13){
    showResults();
  }
}) 

function showResults1(){
  var searchKeyword = userInput1.value.toLowerCase();
  var cards = document.getElementsByClassName("card"); //this is an array
  var regex = new RegExp(searchKeyword, "g");

  for (var i=0; i<cards.length ; i++){
    if (cards[i].textContent.toLowerCase().match(regex)){
      cards[i].style.display = "block";
    } else{
      cards[i].style.display= "none";
    }
  }
}

          
request.send();


