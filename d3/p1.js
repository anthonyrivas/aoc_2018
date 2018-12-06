let fs = require( 'fs' );

const file = fs.readFileSync( 'aoc_input.txt', 'utf8' );

const claims = file.split( '\n' ).map( claim => {
    return {
        id: claim.split( ' @ ' )[0],
        x: claim.split( ' @ ' )[1].split( ': ' )[0].split( ',' )[0],
        y: claim.split( ' @ ' )[1].split( ': ' )[0].split( ',' )[1],
        xs: claim.split( ' @ ' )[1].split( ': ' )[1].split( 'x' )[0],
        ys: claim.split( ' @ ' )[1].split( ': ' )[1].split( 'x' )[1]
    }
} );