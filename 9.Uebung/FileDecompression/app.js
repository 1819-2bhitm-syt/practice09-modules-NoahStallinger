const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: fs.createReadStream('compressed.txt'),
    crlfDelay: Infinity
});

let compressedLines = [];

rl.on('line', (line) => {
    compressedLines.push(line);
});

rl.on('close', (line) => {
    for (line of compressedLines){
        console.log(decompress(line));
    }
});
function decompress(line) {
    let zeichenkette = "";
    let erster = line.charAt(0);
    let zweiter = parseInt(line.substring(1,line.length));

    for(i=0;i<zweiter;i++){
        zeichenkette += erster;
    }
    return zeichenkette;
}
