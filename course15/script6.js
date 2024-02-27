const newItem = {
    id: 55,
    userId: 15,
    title: 'Learn about jsNEW STUFF',
    completed: false
}

const options = {
    method: 'PUT',
    body: JSON.stringify(newItem),
    headers: {
        "Content-Type": "application/json",
    },
}

// exemplu de fetch cu metoda PUT si options specificat
async function main() {
    try {
        //asteptam sa se termine operatia de fetch
        const result = await fetch(
            'https://jsonplaceholder.typicode.com/posts/1',
             options
        );
        //asteptam sa se termine operatia conversie la json a rezultatului
        const jsonResponse = await result.json();
        
        //afisam la consola
        console.log(jsonResponse)
    } catch(error) {
        //In caz ca avem eroare, afisam la ecran
        console.log(error)
    }
}

main();

testGet();