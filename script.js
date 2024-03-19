const{createApp}=Vue 

createApp({
  data(){
    return{
      email: '',
      api:'https://flynn.boolean.careers/exercises/api/random/mail',
      

    }

  },
  methods:{
    getApi(){
      
        axios.get(this.api)
        .then((res)=>{
          
          this.listaEmail.push(this.email= res.data.response)
        })
      
    }


  },
  mounted(){
    this.getApi();

  }

}).mount('#app')