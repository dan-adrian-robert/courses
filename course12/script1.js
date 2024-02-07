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

function calculateFinalMark (map) {
    let subjectSize = 0;
    let sumGrades = 0;

    for (const subject in map) {
        subjectSize += 1;
        sumGrades += map[subject];
    }

    const resut = sumGrades / subjectSize;

    return resut;
}

function displayFinalMessage(name, finalGrade) {
    console.log(`Hello ${name}! Your final grade is ${finalGrade}`);
}

/*
 Sa afisam la TOTI stundetii din obiectul studentMap
    mesajul cu nota finala
*/
function main() {
    for (const studentName in studentMap) {
        const studentData = studentMap[studentName]
        const finalGrade = calculateFinalMark(studentData.grades);
    
        displayFinalMessage(studentName, finalGrade);
    }
}

main();
