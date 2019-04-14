
//VUE.JS INSTANCE HERE
 new Vue ({
     el: '#app',
     data() {
         return {
             title: 'Click Here for More!',
             show: false,
             description: 'Wheat is Neat Event will take place on May 2, 2019 at BrewDog Brewery!'
                }
             }
        )}; 
          
    <style>      
     /* VUE STYLING */
      
     .v-enter-active {
         animation: bounceIn 2s;
        }
    .v-leave-active {
        animation: bounceIn 2s reverse;
        }

     @keyFrames bounceIn {
       0% {
           transform: scale(0.1);
           opacity: 0
        }
        
      60% {
          transform: scale(1.2);
          opacity: 1
        }
      100%  {
         transform(1); 
        } 
    </style>
