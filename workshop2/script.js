class Quiz {
    constructor(questions) {
        this.questionIndex = 0;
        this.questionList = questions;
        this.bntNext = document.getElementById("next-button");
        this.questionCtn = document.getElementById("question");
        this.answerList = document.getElementById("answer-buttons");

        this.feedbackCt = document.getElementById("feedback");
    }

    initialize() {
        this.bntNext.addEventListener("click", () => this.goToNextQuestion());
    }

    populateQuestion() {
        const item = this.questionList[this.questionIndex];
        this.questionCtn.innerText = item.question;

        for (let i = 0; i < this.answerList.children.length; i++) {
            const answer = item.answers[i].text;
            this.answerList.children[i].innerText = answer;

            this.answerList.children[i].addEventListener("click", () => this.checkQuestion(i))
        }
    }

    goToNextQuestion() {
        this.questionIndex += 1;
        this.populateQuestion()
    }

    checkQuestion(answerIndex) {
        const item = this.questionList[this.questionIndex];

        const selectedAnswer = item.answers[answerIndex]

        if (selectedAnswer.correct) {
            console.log('corect');
            this.feedbackCt.innerText = 'Raspuns corect';
            this.feedbackCt.classList.remove('text-wrong')
            this.feedbackCt.classList.add('text-correct')
        } else {
            console.log('gresit')
            this.feedbackCt.innerText = 'Raspuns gresit';
            this.feedbackCt.classList.add('text-wrong')
        }
       
    }
}

// trebuie sa avem o functie main care se apeleaza la incarcarea paginii
// trebuie sa incarcam cumva datele din question json
// trebuie sa populam formul cu datele din intrebare

// actiuni pe butoane
// avem o variabila cu indexul intrebarii active

async function main() {
    const questionData = await fetch('./questions.json');

    const questionList = await questionData.json();

    const quiz = new Quiz(questionList);

    quiz.populateQuestion();

    quiz.initialize();
}

document.addEventListener('DOMContentLoaded', () => main());