/* SNACK 4
Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
 */
const firstArray = [ 'Grogu', 'Mando', 'BoBA']
  
const secondArray = [ 20, 30, 40]
   
let newArray = [];

firstArray.forEach((item,index,array) =>{

  newArray.push(firstArray[index])

  newArray.push(secondArray[index])
})

console.log(newArray)


/* function mergeArrays(array_1, array_2) {
    const new_array = []
    if(array_1.lenght === array_2.lenght){

        array_1.forEach((element,index,) =>{

            new_array.push(element)
          
            new_array.push(array_2[index])
          })

          return new_array
    }

}

console.log(mergeArrays(['a','b','c',], [1, 2, 3]))
 */