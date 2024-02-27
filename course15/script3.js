
//Cuvantul cheie async este folosit pentru a specifica ca in interioriul functie for fi operatii asincrone
async function test() {
    return 'mock async stuff';
}

async function main() {
    // cuvantul cheie await specifica faptul ca functia test este async si trebuie asteptata
    const result = await test();
    console.log(result);
}

main();
