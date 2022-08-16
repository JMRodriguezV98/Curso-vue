 

 const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 3453256,
        lat: 24.434,
        lng: 23.245
    }
 }

 console.log( persona )

 const persona2 = { ...persona }
persona2.nombre = 'Peter'

 console.log( persona2 )