
//function saludar( nombre ){
//    return `Hola ${ nombre }`
//}

//Funcion anonima

//const saludar = function( nombre ){
//    return `Hola ${ nombre }`
//}

//funcion de flecha

const saludar = ( nombre ) => `Hola ${ nombre }`

const nombre = 'Tony'

console.log( saludar( nombre ) )


const getUser = () => ( {uid: 'ABC123',username: 'Tony001' } )

console.log( getUser() )

const heroes = [{
    id: 1,
    name: 'Batman'
},{
    id: 2,
    name: 'Superman'
}]

const existe = ( hero ) => hero.id === 1
const existe2 = heroes.some( ( heroe ) =>  heroe.id === 1 )

console.log( heroes.some( existe ) )
console.log( existe2 )