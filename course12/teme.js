const value1 = 'AAABBB'; //BBBAAA
const value2 = 'Adrian'; //nairdA
const value3 = 'ccccc';  //ccccc
const value4 = 'ABBA'

function isPalindrom(value) {
   const splitString = value.split("");
   const reverseArray = splitString.reverse();
   const valueInverse = reverseArray.join(""); 

   return value === valueInverse
}

function showMathMultiply(value) {
    for(let i = 1; i <= value; i++) {
        for(let j = 1; j <= value; j++) {
            console.log(`${i} x ${j} = ${i*j}`);
        }
    }
}

showMathMultiply(10)