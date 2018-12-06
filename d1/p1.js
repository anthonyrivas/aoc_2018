let fs = require( 'fs' );

const file = fs.readFileSync( 'aoc_input.txt', 'utf8' );

let sum = file.split( '\n' ).reduce( ( sum, n ) => {
    let nInt;
    if ( isNaN( parseInt( n ) ) ) {
        nInt = 0;
    } else {
        nInt = parseInt( n );
    }
    return sum + nInt;
}, 0 )

console.log( sum );