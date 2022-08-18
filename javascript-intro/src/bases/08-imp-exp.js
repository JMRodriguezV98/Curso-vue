import superHeros from '../data/heroes'

//getHeroById ( id )
//funciones flecha
//find

export const getHeroById = ( id ) => superHeros.find( heroe => heroe.id == id ).name


//getHeroesByOwner( 'DC','Marvel' )
//[]

export const getHeroesByOwner = ( owner ) => superHeros.filter( heroes => heroes.owner == owner )


//import { getHeroById, getHeroesByOwner } from "./bases/08-imp-exp"

// console.log( getHeroById( 2 ) ) 


// console.log( getHeroesByOwner( 'DC' ) ) 