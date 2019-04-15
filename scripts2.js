'use strict';
var filteredBeers ="";

Vue.component('beer-card', {
    props: ['beer'],
    template: '<div class="card"><h1>{{ beer.name }}</h1><p>{{ this.beerFoodPairing }}</p><p><small>{{ beer.type }}</small></p></div>',
    computed: {
        beerFood_pairing: function() {
            
            return this.beer.foodPairing.substring(0, 100) + '...';
        }
    }
  });

  var vm = new Vue({
	el:  "#beers",
	data() { 
	  return {
          apiData:[],
          search: '',
          filterType: [],
          
          selectedType:"foodPairing"
        }
    },
      
    computed: {
	filteredBeers: function() {
	vm = this;
	var type = vm.selectedType;
			
	if(type == "foodPairing") {
	   return vm.apiData;
	} else {
	  return vm.apiData.filter(function(beer) {
	    return beer.type == type;
		});
              }
            }
          },

    methods: { 
        getBeerData: function() {
            let url = 'https://cors-anywhere.herokuapp.com/https://api.punkapi.com/v2/beers';
            fetch( url,{
                'headers': {
                  'Content-Type': 'application/json'
                },
              })
              .then((response) => {
                return response.json();
              
              })
              .then((rJson) => {
                  this.apiData = rJson;
              })
        }
    },

    mounted: function() {
        this.$nextTick(function() {
            this.getBeerData();
        });
    }

});
  
