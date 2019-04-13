// USED STRICT MODE TO ENSURE CLEANER, STANDARDIZED JS
'use strict';

var apiData="";
const app = document.getElementById('root');
const container1 = document.createElement('div');
container1.setAttribute('class', 'container1');
app.appendChild(container1);
var request = new XMLHttpRequest();

//GET REQUEST WITH USE OF HEROKU AS A PROXY TO SOLVE CORS ERROR
request.open('GET','https://cors-anywhere.herokuapp.com/https://api.punkapi.com/v2/beers?ibu_lt=36', 
true);

request.onload = function () {  
// CONVERT JSON DATA TO JAVASCRIPT OBJECTS USING JSON.PARSE
    var apiData = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        apiData.forEach(beer => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

      // render relevant data: beer name, description and image      
        const h1 = document.createElement('h1');
        h1.textContent = beer.name;
            
        const p = document.createElement('p');
        beer.description = beer.description.substring(0, 100);
        p.textContent = `${beer.description}...`;
            
        const h4 = document.createElement('h4');
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

/*FILTER BEERS */
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
/*
// FILTER BY BEER ?
var button2 = document.getElementById("locationSearchButton");
var userInput2 = document.getElementById("userInput2");
button2.addEventListener('click', showResults2);
userInput2.addEventListener("keyup", function(e){
  if (e.keyCode === 13){
    showResults();
  }
})

function showResults2(){
  var searchKeyword = userInput2.value.toLowerCase();
  var cards = document.getElementsByClassName("card");
  var jobLocations = document.getElementsByTagName("h4");
  var regex = new RegExp(searchKeyword, "g");

  for (var i=0; i<cards.length ; i++){
    if (jobLocations[i].textContent.toLowerCase().match(regex)){
      cards[i].style.display = "block";
    } else{
      cards[i].style.display= "none";
    }
  }
}

// FILTER BY JOB BEER ? 
var fullTimeCheckBox = document.getElementById("cbFT");
var partTimeCheckBox = document.getElementById("cbPT");
var contractCheckBox = document.getElementById("cbCT");
var jobType = document.getElementsByTagName("h3");

fullTimeCheckBox.addEventListener("change", showByJobType);
partTimeCheckBox.addEventListener("change", showByJobType);
contractCheckBox.addEventListener("change", showByJobType);

function showByJobType(){
  var cards = document.getElementsByClassName("card");
  for (var i=0; i<cards.length ; i++){
    if (fullTimeCheckBox.checked === false){
      if (jobType[i].textContent.toLowerCase() == "full time"){
        cards[i].style.display = "none";
      }
    } else if (fullTimeCheckBox.checked){
      if (jobType[i].textContent.toLowerCase() == "full time"){
        cards[i].style.display = "block";
      }
    }
    if (partTimeCheckBox.checked === false){
      if (jobType[i].textContent.toLowerCase() == "part time"){
        cards[i].style.display = "none";
      }
    }else if (partTimeCheckBox.checked){
      if (jobType[i].textContent.toLowerCase() == "part time"){
        cards[i].style.display = "block";
      }
    }
    if (contractCheckBox.checked === false){
      if (jobType[i].textContent.toLowerCase() == "contract"){
        cards[i].style.display = "none";
      }
    }else if (contractCheckBox.checked){
      if (jobType[i].textContent.toLowerCase() == "contract"){
        cards[i].style.display = "block";
      }
    }
  }
}
*/
request.send();



