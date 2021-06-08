const app = new Vue({
    el:'#app',

    data:{
        url:'https://developers.themoviedb.org/3/search/search-movies',
        query:'',
        apiKey:'baafb21ea0b84e839d86a829c7a751c1'
        
    },

    methods:{

    },

    mounthed(){
        
       axios
        .get(this.url)
        .then(response => {
            
            console.log(response);
        })
        .catch(e => {
            console.error(e);
            this.error ='non è possibile connettersi all API'
        })
    }

})