<template>
    
    <div v-theme:column="'narrow'" id="show-blogs">
    
        <h1>All Blog Articles</h1>

        <input type="text" v-model="search" placeholder="search blogss!">


    
        <div v-for="blog in filteredBlogs" class="single-blog">
    
            <router-link :to="'/blog/' + blog.id">
                
                 <h2>{{ blog.title | to-uppercase }}</h2>

            </router-link>
    
            <article v-rainbow>{{ blog.body }}</article>
    
        </div>
   
    </div>

</template>

<script>

import searchMixin from '../mixins/searchMixin'

export default {

    data () {

        return {

            blogs: [],

            search : ''

        }

    },

    methods: {

    },

    created() {

        this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){

            this.blogs = data.body.slice(0,10);

        });

    },


    mixins: [searchMixin]

}

</script>

<style>

#show-blogs{

    max-width: 800px;

    margin: 0px auto;

}
.single-blog{

    padding: 20px;

    margin: 20px 0;

    box-sizing: border-box;

    background: #eee;

}

</style>