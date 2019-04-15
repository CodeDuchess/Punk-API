'use strict';

Vue.component('beer-card', {
    props: ['beer'],
    template: '<div class="card"><h1>{{ beer.name }}</h1><p>{{ this.beerFood_pairing }}</p><p><small>{{ beer.type }}</small></p></div>',
    computed: {
        beerFood_pairing: function() {
            
            return this.job.food_pairing.substring(0, 100) + '...';
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
          
          selectedType:"food_pairing"
        }
    },
      
    computed: {
	filteredbeers: function() {
	vm = this;
	var type = vm.selectedType;
			
	if(type == "food_pairing") {
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
  
