<template>

    <div id="add-blog">

      <h2>Add a New Blog Post</h2>
      
        <form v-if="!submitted">
        
        <label>Blog Title:</label>
        
        <input type="text" v-model.lazy="blog.title" required />
        
        <label>Blog Content:</label>
        
        <textarea v-model.lazy.trim="blog.content"></textarea>
        
        <div id="checkboxes">
        
        <p>Blog Categories:</p>
        
        <label>Fiction</label>
                
        <input type="checkbox" value="Fiction" v-model="blog.categories" />
                
         <label>Non-Fiction</label>
                
         <input type="checkbox" value="Non-Fiction" v-model="blog.categories" />
                
         <label>Heroism And Valour</label>
                
         <input type="checkbox" value="HeroismValour" v-model="blog.categories" />
                
          <label>Love</label>
          
          <input type="checkbox" value="love" v-model="blog.categories" />
            
           </div>
           
           <label>Author:</label>
           
           <select v-model="blog.author">
           
           <option v-for="author in authors">{{ author }}</option>
           
           </select>
           
           <hr />
           
           <button v-on:click.prevent="post" class="button">Add Blog</button>
        
        </form>
        
        <div v-if="submitted">
        
        <h3>Thanks for adding your post</h3>
        
        </div>
        
        <div id="preview">
        
        <h3>Preview blog</h3>
        
        <p>Blog title: {{ blog.title }}</p>
        
        <p>Blog content:</p>
        
        <p style="white-space: pre">{{ blog.content }}</p>
        
        <p>Blog Categories:</p>
        
        <ul>
        
        <li v-for="category in blog.categories">{{ category }}</li>
        
        </ul>
        
        <p>Author: {{ blog.author }}</p>
        
        </div>
    
    </div>
    
</template>

<script>
// Imports
export default {
    data () {
        return {
            blog: {
                title: '',
                content: '',
                categories: [],
                author: ''
            },
            authors: ['Moisser Monroe', 'Azat Mardan', 'Henry Iridieo Irodov'],
            submitted: false
        }
    },
    methods: {
        post: function(){
            this.$http.post('http://jsonplaceholder.typicode.com/posts', {
                title: this.blog.title,
                body: this.blog.content,
                userId: 1
            }).then(function(data){
                console.log(data);
                this.submitted = true;
            });
        }
    }
}
</script>

<style scoped>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
    margin-top: 0;
}
.button {
  margin-top: 20px;
  padding: 10px 15px;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #4CAF50;
  border: none;
  border-radius: 15px;
  box-shadow: 0 4px #999;
}

.button:hover {background-color: #3e8e41}

.button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(2px);
}
</style>
