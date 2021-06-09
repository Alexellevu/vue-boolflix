const app = new Vue({
    el:'#app',

    data:{
        url:'https://api.themoviedb.org/3/search/movie?',
        apiKey:'baafb21ea0b84e839d86a829c7a751c1',
        query:'',
        error:''
    },

    methods:{
        searchMovies(query)  {
            console.log(query);
            const fullUrl = this.url +'api_key='+ this.apiKey +'&query='+ query;
     

             console.log(fullUrl);
 
            axios
            .get(fullUrl)
            .then(response => {
            console.log(response);
            })
            
            .catch(e => {
                console.error(e);
                this.error ='non è possibile connettersi all API'
            })
        }
    },

    mounthed(){
       
    }

})