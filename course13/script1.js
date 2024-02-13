
/* Elementul care are id ul "myHeader" */
const node1 = document.getElementById('myHeader')
console.log(node1);

/* Lista de elementele care are au clasa "test-class-name" */
const classItemList = document.getElementsByClassName('test-class-name')
console.log(classItemList);

/* Elementele care are au atributul name "myInputName" */
const inputList = document.getElementsByName('myInputName')
console.log(inputList);

/* Elementele care are au tag-ul lista */
const tagElementList = document.getElementsByTagName('li')
console.log(tagElementList);

/* Primul element care are clasa "test-class-name" */
const qClassItem = document.querySelector('.test-class-name');
console.log(qClassItem);

/* Primul element de tipul "input" */
const firstInputElement = document.querySelector('input');
console.log(firstInputElement);

/* Luam primul element de tip div */
const qSelector1 = document.querySelector('div');

qSelector1.innerHTML = '<p class="greenClass">random text</p>'

/* Setare style valoare for fontSize si backgroundColor */
qSelector1.style.fontSize = '122px';
qSelector1.style.backgroundColor = 'red';

/* Metoda adaugare clasa */
qSelector1.classList.add('classNew');
/* Metoda scoatere clasa */
qSelector1.classList.remove('class1');

// console.log(fristInput.getAttribute('value'));
// fristInput.setAttribute('value', 'NEW VALUE');
// console.log(fristInput.getAttribute('value'));