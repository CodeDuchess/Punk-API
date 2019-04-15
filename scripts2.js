'use strict';

Vue.component('job-card', {
    props: ['job'],
    template: '<div class="card"><h1>{{ job.title }}</h1><p>{{ this.jobDescription }}</p><p><small>{{ job.type }}</small></p></div>',
    computed: {
        jobDescription: function() {
            
            return this.job.description.substring(0, 300) + '...';
        }
    }
  });

  var vm = new Vue({
	el:  "#jobs",
	data() { 
	  return {
          apiData:[],
          search: '',
          filterType: [],
          
          selectedType:"Full Time"
        }
    },
      
    computed: {
		filteredJobs: function() {
			vm = this;
			var type = vm.selectedType;
			
			if(type == "Full Time") {
				return vm.apiData;
			} else {
				return vm.apiData.filter(function(job) {
					return job.type == type;
				});
            }
		}
    },

    methods: { 
        getJobData: function() {
            let url = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?&markdown=true&page=1';
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
            this.getJobData();
        });
    }


});
  
