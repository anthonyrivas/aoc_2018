let fs = require( 'fs' );

const file = fs.readFileSync( 'aoc_input.txt', 'utf8' );
const fileArr = file.split( '\n' );
let freqList = new Set( [] );
let currentFreq = 0;

while ( !freqList.has( currentFreq ) ) {
    if ( freqList.length === 0 ) {
        for ( let i = 0; i < fileArr.length; i++ ) {
            currentFreq += parseInt( fileArr[i] )
            freqList.add( 0 )
            if ( freqList.has( currentFreq ) ) {
                console.log( test )
                break;
            }
            freqList.add( currentFreq );
        }
    } else {
        freqList.add( currentFreq );
        for ( let i = 1; i < fileArr.length; i++ ) {
            currentFreq += parseInt( fileArr[i] )
            if ( freqList.has( currentFreq ) ) {
                break;
            }
            freqList.add( currentFreq );
        }
    }
    currentFreq += parseInt( fileArr[0] )
}

console.log( currentFreq );