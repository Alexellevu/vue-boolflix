const app = new Vue({
    el:'#app',

    data:{
        url:'https://api.themoviedb.org/3/search/movie?',
        apiKey:'baafb21ea0b84e839d86a829c7a751c1',
        query:'',
        error:'',
        movies:'',
        voto:[]
    },

    methods:{
        searchMovies(query)  {
            console.log(query);
            const fullUrl = this.url +'api_key='+ this.apiKey +'&query='+ this.query;
     

             console.log(fullUrl);
 
            axios
            .get(fullUrl)
            .then(response => {
            console.log(response);
            this.movies=response.data.results;
            console.log(this.movies);
            for(var i=0; i<response.data.results.length; i++){
            this.voto.push(Math.ceil(response.data.results[i].vote_average/2));
       
            }
            console.log(this.voto);
            
           


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