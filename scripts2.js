'use strict';

var apiData = "";
var filteredBeers= "";

Vue.component('beer-card', {
    props: ['beer'],
    template: '<div class="card"><h2>{{ beer.name }}</h2><h3>{{ this.beerIbu }}</h3><p><small>{{beer.type}}</small></p></div>',
    computed: {
        beerIbu: function() {
            return this.beer.ibu;
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
          
             selectedType:"beer abv"
        }
    },
      
    computed: {
		filteredBeers: function() {
			vm = this;
			var type = vm.selectedType;
			
			if(type == "beer abv") {
				return vm.apiData;
			} else {
				return vm.apiData.filter(function(beer) {
					return beer.abv == abv;
				});
            		     }
			   }
                       },

    methods: { 
        getBeerData: function() {
            let url = 'https://cors-anywhere.herokuapp.com/https://api.punkapi.com/v2/beers';
            fetch( url, {
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
  
