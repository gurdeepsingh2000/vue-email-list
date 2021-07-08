//Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail 
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.


Vue.config.devtools = true;

new Vue(
    {
        el: '#mail-page',
    data: {
        mails: []
    },

    methods:{
        getMails: function(){
            for ( let x = 0 ; x < 10 ; x++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                this.mails.push(response.data.response)
            })
        }
        }
    }
}
);