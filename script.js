const{createApp}=Vue 

createApp({
  data(){
    return{
      email: '',
      api:'https://flynn.boolean.careers/exercises/api/random/mail',
      listaEmail:[],
      
      

    }

  },
  methods:{
    getApi(){
      for(let i=0; i<10 ; i++){  
        axios.get(this.api)
        .then((res)=>{
          
          this.listaEmail.push(this.email= res.data.response)
           
        })
        
      }
    }


  },
  mounted(){
    this.getApi();

  }

}).mount('#app')