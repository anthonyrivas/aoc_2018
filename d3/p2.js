let fs = require( 'fs' );

const file = fs.readFileSync( 'aoc_input.txt', 'utf8' );

const claims = file.split( '\n' ).map( claim => {
    return {
        id: claim.split( ' @ ' )[0],
        x: parseInt( claim.split( ' @ ' )[1].split( ': ' )[0].split( ',' )[0] ),
        y: parseInt( claim.split( ' @ ' )[1].split( ': ' )[0].split( ',' )[1] ),
        xs: parseInt( claim.split( ' @ ' )[1].split( ': ' )[1].split( 'x' )[0] ),
        ys: parseInt( claim.split( ' @ ' )[1].split( ': ' )[1].split( 'x' )[1] )
    }
} );

let map = new Set();
let dupeMap = new Set();
let survivor;
claims.forEach( ( claim ) => {
    let { x, y, xs, ys } = claim;
    for ( let i = x; i < ( x + xs ); i++ ) {
        for ( let j = y; j < ( y + ys ); j++ ) {
            let key = `${i}:${j}`;
            if ( map.has( key ) ) {
                if ( !dupeMap.has( key ) ) {
                    dupeMap.add( key );
                }
            } else {
                map.add( key );
            }
        }
    }
} )

claims.forEach( ( claim ) => {
    let { id, x, y, xs, ys } = claim;
    let dead = false
    for ( let i = x; i < ( x + xs ); i++ ) {
        for ( let j = y; j < ( y + ys ); j++ ) {
            let key = `${i}:${j}`;
            if ( dupeMap.has( key ) ) {
                dead = true
            }
        }
    }
    if ( !dead ) {
        survivor = id
    }
} )

console.log( survivor )