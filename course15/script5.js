
//Promise care face un fetch la un GET HTTP la url ul specificat
const myPromise = fetch('https://jsonplaceholder.typicode.com/todos');

//functie folosita pentru a trata cazul de success
const handleSuccess = async (result) => {

    const data = await result.json();

    console.log(data);
}

//functie folosita pentru a trata cazul de erroare
const handleFailure = (error) => {
    console.log(error);
}

// Asteptam sa se termine myPromise iar in functie de rezultat.
// Apelam handleSuccess in caz ca totul e ok sau handleFailure in caz de eroare
myPromise
.then(handleSuccess)
.catch(handleFailure);

// ===========================================================//


// TodoItem nou
const newTodoItem = {
    userId: 999,
    title: 'Learn about js',
    completed: false
}

// optiunile de fetch
const options = {
    method: 'POST',
    // serializam obiectul pe care vrem sa il punem in body
    body: JSON.stringify(newTodoItem),
    headers: {
        "Content-Type": "application/json",
    },
}
//Promise care face un fetch la un POST HTTP la url ul specificat cu options
const addResultPromise = fetch('https://jsonplaceholder.typicode.com/todos', options)


// asteptam ca promisiunea addResultPromise sa se rezolve
// transformam rezultatul in json
// printam la ecram rezultatul
addResultPromise
.then((addResponse) => addResponse.json())
.then((jsonResponse) => {
    console.log(jsonResponse);
}
)