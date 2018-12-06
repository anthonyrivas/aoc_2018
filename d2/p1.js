let fs = require( 'fs' );

const file = fs.readFileSync( 'aoc_input.txt', 'utf8' );

const ids = file.split( '\n' );

let twos = ids.map( id => Object.values( countOcurrences( id.split( '' ) ) ).includes( 2 ) ).reduce( ( sum, e ) => {
    if ( e ) {
        return sum + 1
    }
    return sum
}, 0 );
let threes = ids.map( id => Object.values( countOcurrences( id.split( '' ) ) ).includes( 3 ) ).reduce( ( sum, e ) => {
    if ( e ) {
        return sum + 1
    }
    return sum
}, 0 );

console.log( twos * threes )




function countOcurrences( arr ) {
    return arr.reduce( ( aggregator, value, index, array ) => {
        if ( !aggregator[value] ) {
            return aggregator = { ...aggregator, [value]: 1 };
        } else {
            return aggregator = { ...aggregator, [value]: ++aggregator[value] };
        }
    }, {} )
}
