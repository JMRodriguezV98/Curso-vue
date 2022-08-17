

const app = Vue.createApp({
    // template: `
    //     <h1> Hola mundo </h1>
    //     <p> desde app.js </p>
    // `



    data() {
        return {
            quote: 'I´m batman',
            author: 'Bruce Wayne'
        }
    },
    methods: {
        changeQuote( ) {
            console.log( 'Hola mundo' )
            this.author = 'Mauricio Rodriguez'
            this.capitalize()
        },
        capitalize() {
            this.quote = this.quote.toUpperCase()
        }
    }

})

app.mount('#myApp')

