const app = new Vue({
    el:'#app',

    data:{
        url:'https://api.themoviedb.org/3/search/movie?',
        url2:'https://api.themoviedb.org/3/search/tv?',
        apiKey:'baafb21ea0b84e839d86a829c7a751c1',
        query:'',
        error:'',
        movies:'',
        tvSeries:'',
        voti:[],
        vuote:[]
        
        
    },

    methods:{
        searchMovies(query)  {
            /* console.log(query); */
            const fullUrl = this.url +'api_key='+ this.apiKey +'&query='+ this.query;
            /* console.log(fullUrl); */
 
            axios
            .get(fullUrl)
            .then(response => {
            /* console.log(response); */
            this.movies=response.data.results;
           /*  console.log(this.movies); */
            for(var i=0; i<response.data.results.length; i++){
            this.voti.push(Math.ceil(response.data.results[i].vote_average/2));
            this.vuote.push(Math.ceil(4-[response.data.results[i].vote_average/2]))
            }
          /*   console.log(this.voti); */
          console.log(this.vuote);
           })
            
            .catch(e => {
                console.error(e);
                this.error ='non è possibile connettersi all API'
            })
        },

        searchTv(query){
            const fullUrl2 = this.url2 +'api_key='+ this.apiKey +'&query='+ this.query;
            /* console.log(fullUrl); */
 
            axios
            .get(fullUrl2)
            .then(response => {
            console.log(response);
            this.tvSeries=response.data.results;
           /*  console.log(this.movies); */
            for(var i=0; i<response.data.results.length; i++){
            this.voti.push(Math.ceil(response.data.results[i].vote_average/2));
            this.vuote.push(Math.ceil(4-[response.data.results[i].vote_average/2]))
            }
          /*   console.log(this.voti); */
            console.log(this.vuote);
           })
            
            .catch(e => {
                console.error(e);
                this.error ='non è possibile connettersi all API'
            })
        },

        deletePage(query){
            if (query.length===0){
                this.movies ='';
                this.tvSeries='';
            }
        },

        getFlags(code) {
            if(code ==='en')code = 'gb';
            if(code ==='ja')code = 'jp' ;
            if(code ==='da') code = 'dk';
            return code;

        }
    },

    mounthed(){
       
    }

})