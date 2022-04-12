/* 
SNACK 2
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.

*/

const zucchine = [
    { varieta: 'Zucchina nera', peso: 5, lunghezza: 16 , },
    { varieta: 'Zucchino romanesco', peso: 8, lunghezza: 4 , },
    { varieta: 'Zucchino fiorentino', peso: 10, lunghezza: 5 , },
    { varieta: 'Zucchina napoletana', peso: 2, lunghezza: 9, },
    { varieta: 'Zucchine tonde', peso: 4, lunghezza: 6 , },
    { varieta: 'Zucchina nera', peso: 23, lunghezza: 20 , },
    { varieta: 'Zucchino romanesco', peso: 8, lunghezza: 4 , },
    { varieta: 'Zucchino fiorentino', peso: 10, lunghezza: 18 , },
    { varieta: 'Zucchina napoletana', peso: 2, lunghezza: 28, },
    { varieta: 'Zucchine tonde', peso: 4, lunghezza: 6 , },
 
]

const zucchineLunghe = zucchine.filter(zucchina => zucchina.lunghezza < 15)
console.log(zucchineLunghe)

const zucchineCorte = zucchine.filter(zucchina => zucchina.lunghezza > 15)
console.log(zucchineCorte)

let sommaZucchineLunghe = 0;
let sommaZucchineCorte = 0;

zucchineLunghe.forEach(zucchina => {
    sommaZucchineLunghe += zucchina.peso
})
console.log(sommaZucchineLunghe)

zucchineCorte.forEach(zucchina => {
    sommaZucchineCorte += zucchina.peso
})
console.log(sommaZucchineCorte)
