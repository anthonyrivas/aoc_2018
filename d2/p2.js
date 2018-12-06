let fs = require( 'fs' );

const file = fs.readFileSync( 'aoc_input.txt', 'utf8' );

const ids = file.split( '\n' ).map( id => id.split( '' ) );

for ( let i = 0; i < ids.length; i++ ) {
    for ( let j = 0; j < ids.length; j++ ) {
        let diff = 0;
        for ( let k = 0; k < ids[i].length; k++ ) {
            let a = ids[i][k];
            let b = ids[j][k];
            if ( a !== b ) {
                diff++
            }

        }
        if ( diff === 1 ) {
            ( console.log( ids[i].filter( ( e, k ) => {
                return ids[i][k] === ids[j][k]
            } ).join( '' ) ) )
            return
        }
    }
}
