<template>
  
  <div>
      <app-header></app-header>
      <router-view></router-view>

  </div>



</template>


<script>
  
  import listBlogs from './components/listBlogs.vue'

  import showBlogs from './components/showBlogs.vue';

import header from './components/header.vue';


  export default {

    components : {

      'app-header' : header
    },

    data(){
      
      return {

      }
    
    },

    methods : {


    }


  }


</script>
<style>
  

  body{
    margin: 0;
    font-family: 'Nunito SemiBold';

}
</style>