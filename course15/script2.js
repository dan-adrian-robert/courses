
console.log('1');

const myFunction = () => {
    console.log('Hello world');

    return Promise.resolve(100);
}


// set timeout executa functia myFunction dupa 2 secunde
setTimeout(myFunction, 2000)

// set Interval executa functia myFunction la fiecare 2 secunde
setInterval(myFunction, 2000)

