// Crea un array di 10 oggetti di una zucchina indicando per ognina varietà , peso e lunghezza.
//Calcola quanto pesano tutte le zucchine 

const zucchine = [
    { varieta: 'Zucchina nera', peso: 5, lunghezza: 10 , },
    { varieta: 'Zucchino romanesco', peso: 8, lunghezza: 4 , },
    { varieta: 'Zucchino fiorentino', peso: 10, lunghezza: 5 , },
    { varieta: 'Zucchina napoletana', peso: 2, lunghezza: 9, },
    { varieta: 'Zucchine tonde', peso: 4, lunghezza: 6 , },
    { varieta: 'Zucchine trombetta', peso: 20, lunghezza: 15 , },
]

let pesoTot = 0
 zucchine.forEach( (zucchina) => {
     console.log('Peso di una signola ', zucchina.peso)
   return pesoTot += zucchina.peso 
})

console.log('Peso totale di tutte le Zucchine',pesoTot)
