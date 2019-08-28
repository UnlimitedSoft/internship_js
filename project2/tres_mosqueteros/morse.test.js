const morse = require("./morse.js");

const input = '1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011';
const output = 'HEY JUDE';

test('expect HEY JUDE', () => {
        expect(morse(input)).toBe(output);
    });



const input1= '1100110011001111110000001100110000001100110011001111110000001100111111000000000000001111110011111100000011000000111111001100110011111100000011001100000011111100110011111100110000001111110011111100111111';
const output1 = 'VIVA MEXICO';
test('expect VIVA MEXICO', () => {
        expect(morse(input1)).toBe(output1);
    });


const input2 = '11001111110011001100000011000000110011001100000011001100110011000000110000000000000011001100110000001100110011001100000011001111110000001100110011001111110000001111110011111100111111';
const output2 = 'LESHE SHAVO';
test('expect LESHE SHAVO', () => {
        expect(morse(input2)).toBe(output2);
    });


const input3 = '1100111111001100110000001100111111000000000000001100110011001111110000001100110000001111110011001100000011001111110000000000000011111100110000001111110011111100111111000000000000001100110011001111110000001100111111000000110011111100110011000000110000000000000011111100110000001100111111000000111111001100110000001100111111';
const output3 = 'LA VIDA NO VALE NADA';
test('expect LA VIDA NO VALE NADA', () => {
        expect(morse(input3)).toBe(output3);
    });

    test('expect POR TU MALDITO AMOR', () => {
        const input = '110011111100111111001100000011111100111111001111110000001100111111001100000000000000111111000000110011001111110000000000000011111100111111000000110011111100000011001111110011001100000011111100110011000000110011000000111111000000111111001111110011111100000000000000110011111100000011111100111111000000111111001111110011111100000011001111110011';
        const output = 'POR TU MALDITO AMOR';
    expect(morse(input)).toBe(output);
    });

    test('expect SON CAZAHUATES NO CACAHUATES', () => {
        const input = '11001100110000001111110011111100111111000000111111001100000000000000111111001100111111001100000011001111110000001111110011111100110011000000110011111100000011001100110011000000110011001111110000001100111111000000111111000000110000001100110011000000000000001111110011000000111111001111110011111100000000000000111111001100111111001100000011001111110000001111110011001111110011000000110011111100000011001100110011000000110011001111110000001100111111000000111111000000110000001100110011';
        const output = 'SON CAZAHUATES NO CACAHUATES';
    expect(morse(input)).toBe(output);
    });
