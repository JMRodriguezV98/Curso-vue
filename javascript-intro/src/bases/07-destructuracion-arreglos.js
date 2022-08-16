
const characters = [ 'Goku', 'Vegeta', 'Trunks' ]

const [ goku, vegeta, trunks, goten = 'no valor' ] = characters

const returnArray = ( arr ) => {
    return [ arr[0], arr[1] ]
}

const [ letters, number ] = returnArray( [ 'XYZ',987 ] )
console.log( letters, number )