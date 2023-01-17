const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const letter = 10;
    let result = [];

    for (let i = 0; i < expr.length; i += letter) {
        if (expr[i] === "*") {
            result.push(' ');
        } else {
            let word = [];
            for (let x = i; x < i + letter; x += 2) {
                let symbol = [];
                symbol.push(expr[x]);
                symbol.push(expr[x + 1]);
                if (symbol.join('') === "00") {
                    continue;
                }
                if (symbol.join('') === "10") {
                    word.push('.');
                }
                if (symbol.join('') === "11") {
                    word.push('-');
                }
            }
            result.push(MORSE_TABLE[word.join('')]);
        }
    }
    return result.join('');
}

module.exports = {
    decode
}