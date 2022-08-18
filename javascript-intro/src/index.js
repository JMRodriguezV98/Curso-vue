

console.log( 'Inicio' )


new Promise( ( resolve,reject ) => {
    
    console.log( 'Cuerpo de la promesa' )
    reject( 'Resuelta con error' )
}).then( msg => console.log( msg ) )
.catch( err => console.log( err ))


console.log( 'Fin' )

