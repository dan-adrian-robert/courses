
// Promisiune care o sa returneze cu success 100 dupa 2 secunde
const myPromise = new Promise((resolve, reject)=>{
    setTimeout(() => {resolve(100)}, 2000)
})


// Promisiune care o sa returneze cu eroarea "error message"
const myPromise1 = new Promise((resolve, reject)=>{
    reject('error message')
})


myPromise
// dupa ce se termina myPromise
.then((result) => {
    console.log(result);
})

myPromise1
// dupa ce se termina myPromise1 cazul de success
.then((result) => {
    console.log(result);
})
// dupa ce se termina myPromise1 cazul de eroare
.catch((error) => {
    console.log(error);
})

