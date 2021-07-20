//function 1
function getRandomArray(length, min, max) {
    const array = [];
    for(let i=0; i < length; i++) {
        array.push(Math.floor(Math.random() * (max - min - 1) + min))
    }
    return array;
}
console.log("getRandomArray:",getRandomArray(15,1,100));
//function 2
const getEntireNumbers=(integerNumbers) => {
    return integerNumbers.filter(el => Number.isInteger(el));
}
function getModa(...numbers) {
    const dataModa = getEntireNumbers(numbers);
    return dataModa.sort((a, b) => 
        (dataModa.filter(value => value === a).length) - (dataModa.filter(value => value === b).length)).pop()
    }
    console.log("getModa:",getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
//function 3
function getAverage(...numbers) {
   const dataAverage = getEntireNumbers(numbers);
   const resultAverage = dataAverage.reduce((accumulator, element) => {
       //let suma = 0;
       if(Number.isInteger(element)){
        accumulator+= element;
       }
       return  accumulator;
   })
   return resultAverage / dataAverage.length;
}
console.log("getAverage",getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
//function 5
function filterEvenNumbers(...numbers){
    const filternumber = numbers.filter(number => number%2!== 0)
    return filternumber;
}
console.log("filterEvenNumbers: ",filterEvenNumbers(1, 2, 3, 4, 5, 6));
//function 6
function countPositiveNumbers(...numbers) {
    const positiveNumbers = numbers.filter(number => number >= 0).length;
    return positiveNumbers;
}
console.log("countPositiveNumbers:",countPositiveNumbers(1, -2, 3, -4, -5, 6));
//function 7
function getDividedByFive(...numbers){
    const getFive = numbers.filter(number => number%5 === 0 )
    return getFive;
}
console.log("getDividedByFive:",getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));