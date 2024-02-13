const studentMap = {
    Adrian: {
        grades: {
            Romana: 5,
            Mate: 10,
            Geografie: 5,
        }
    },
    Denisa: {
        grades: {
            Romana: 10,
            Mate: 9,
            Desen: 6,
        }
    },
    Andrei: {
        grades: {
            Romana: 3,
            Mate: 3,
            Desen: 1,
        }
    },
    Alina: {
        grades: {
            Romana: 10,
            Mate: 10,
            Desen: 1,
        }
    },
    Lorin: {
        grades: {
            Romana: 10,
            Mate: 10,
            Desen: 1,
        }
    },
    Critan: {
        grades: {
            Romana: 10,
            Mate: 10,
            Desen: 1,
        }
    },
    Edina: {
        grades: {
            Romana: 9,
            Mate: 8,
            Sport: 10,
        }
    },
    Larisa: {
        grades: {
            Romana: 9,
            Mate: 8,
            Sport: 10,
        }
    },
    Dragos: {
        grades: {
            Romana: 9,
            Mate: 8,
            Sport: 10,
        }
    },
    Marius: {
        grades: {
            Romana: 9,
            Mate: 8,
            Sport: 10,
        }
    },
    Marius: {
        grades: {
            Romana: 9,
            Mate: 8,
            Sport: 10,
        }
    },
    Andra: {
        grades: {
            Romana: 9,
            Mate: 8,
            Sport: 10,
        }
    },
    Ioan: {
        grades: {
            Romana: 9,
            Mate: 8,
            Sport: 10,
        }
    },
    Alexandra: {
        grades: {
            Romana: 9,
            Mate: 8,
            Sport: 10,
        }
    },
    Alexandra: {
        grades: {
            Romana: 9,
            Mate: 8,
            Sport: 10,
        }
    },
    Eduard: {
        grades: {
            Romana: 9,
            Mate: 8,
            Sport: 10,
        }
    },
    Tibi: {
        grades: {
            Romana: 9,
            Mate: 5,
            Algebra: 1,
        }
    },
    Raimond: {
        grades: {
            Romana: 9,
            Mate: 5,
            Algebra: 1,
        }
    },
    Antonia: {
        grades: {
            Romana: 9,
            Mate: 5,
            Algebra: 1,
        }
    },
}
const subjects = [
    'Romana', 
    'Mate', 
    'Istorie',
    'Sport', 
    'Engleza', 
    'Franceza',
    'Geografie',
    'Fizica',
    'Latina',
];

function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function putRandomNotes() {
    for (student in studentMap) {
        const randomGrades = {};
        subjects.forEach((subject) => {
            randomGrades[subject] =  randomIntFromInterval(1, 10);
        })
        studentMap[student].grades = randomGrades
    }
}

function addAllStudentGrades() {
    const tableNode = document.querySelector('#myTable');

    for (student in studentMap) {
        const rowNode = document.createElement('tr');
        
        const nameNode = document.createElement('td');
        nameNode.innerText = student;

        rowNode.appendChild(nameNode)

        subjects.forEach((subject) => {
            const nota = studentMap[student].grades[subject];
            const gradeNode = document.createElement('td');
            gradeNode.innerText = nota;

            rowNode.appendChild(gradeNode);
        })
        tableNode.appendChild(rowNode);
    }
}

function addColumns() {
    const tableNode = document.querySelector('#tableHeader');

    subjects.forEach((subject) => {
        const rowNode = document.createElement('th');
        rowNode.innerText = subject;
        tableNode.appendChild(rowNode);
    })
}

putRandomNotes();
addAllStudentGrades();
addColumns();