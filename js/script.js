let data = [];
let quizzData = [];

let quizzId;

let answers = [];
let levels;

let qtCorrectAnswers = 0;
let qtAnswered = 0;
let qtQuestions = 0;
let percentage = 0;

const main = document.querySelector(".listQuizz");
const quizz = document.querySelector(".insideQuizz");

function listQuizzes() {
    quizzId = 0;
    const promise = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes');

    promise.then((response) => {

        data = response.data;
        console.log(data);

        const quizz = document.querySelector(".allQuizzes");

        for (let i = 0; i < data.length; i++) {

            let idQuizz = data[i].id;

            quizz.innerHTML +=
                `
                <article onclick="insideQuizz(${idQuizz})" data-identifier="quizz-card" data-identifier="general-quizzes">
                    <div class="gradient"></div>
                    <img src="${data[i].image}">
                    <span class="title">${data[i].title}</span>
                </article>
                `
            idQuizz--;
        }
    });
}

function insideQuizz(id) {

    qtCorrectAnswers = 0;
    percentage = 0;
    qtAnswered = 0;
    quizzId = id;

    const promise = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/' + id);

    promise.catch((response) => {
        alert(`
    Status Code: ${response.status}
    Mensagem: ${response.data}
        `)
    });
    promise.then((response) => {

        window.scrollTo(0, 0);
        main.classList.add("noDisplay")
        quizz.classList.remove("noDisplay");

        levels = response.data.levels;
        quizzData = response.data;

        quizz.innerHTML = '';
        quizz.innerHTML = `
            <div class="insideHeader">
                <div class="opacity"></div>
                    <img src="${quizzData.image}">
                <div class="center">
                    <span class="insideTitle">${quizzData.title}</span>
                </div>
            </div>
        `

        let questData = quizzData.questions;
        for (let i = 0; i < questData.length; i++) {

            qtQuestions++;

            quizz.innerHTML += `
                <section class="container">
                    <article class="margin">
                        <div class="question q${i}" data-identifier="question">
                            <span>${questData[i].title}</span>
                        </div>
                        <div class="answers a${i}" data-identifier="answer">
                            
                        </div>
                    </article>
                </section>
            `

            let ansData = quizzData.questions[i].answers;
            for (let a = 0; a < ansData.length; a++) {
                answers.push(ansData[a]);
            }
            answers = answers.sort(() => Math.random() - 0.5);

            let ansQuest = quizz.querySelector(`.a${i}`);

            for (let j = 0; j < answers.length; j++) {
                ansQuest.innerHTML += `
                <div class="answer aa${j}" onclick="clickAnswer(this)">
                    <img src='${answers[j].image}'>
                    <span>${answers[j].text}</span>
                </div>
                `
                const isCorrectAnswer = ansQuest.querySelector(`.answer.aa${j}`);
                isCorrectAnswer.classList.add(`${answers[j].isCorrectAnswer}`)
            }

            answers = [];

            let quest = quizz.querySelector(`.question.q${i}`);

            if (questData[i].color === '#fff' || '#ffffff' || 'rgb(255, 255, 255)') {
                quest.style.backgroundColor = '#434CA0';
            } else {
                quest.style.backgroundColor = questData[i].color;
            }
        }

        quizz.innerHTML += `
            <section class="container result noDisplay" data-identifier="quizz-result">
                <article class="margin">
                    <div class="result1">
                        <span></span>
                    </div>
                    <div class="result2">
                        <img src="${quizzData.levels[0].image}">
                        <span>
                            ${quizzData.levels[0].text}
                        </span>
                    </div>
                </article>
            </section>
        `

        quizz.innerHTML += `
            <div div class="insideButtons" >
                <button class="restart" onclick="restart(quizzId)">Reiniciar Quizz</button>
                <button class="backHome" onclick="resetMain()">Voltar para Home</button>
            </div >
        `
    })
}

function clickAnswer(answer) {

    const parent = answer.parentNode;
    const children = parent.children;
    const parentParent = parent.parentNode.parentNode;

    parent.classList.add("selected");

    for (let i = 0; i < children.length; i++) {
        children[i].classList.add("notSelected");
        children[i].removeAttribute("onclick");
    }

    if (answer.classList.contains("true")) {
        qtCorrectAnswers++;
    }

    answer.classList.remove("notSelected");
    qtAnswered++;

    if (qtAnswered === qtQuestions) {
        const percentage = Math.round((qtCorrectAnswers / qtQuestions) * 100);
        finalResult(percentage);
    }

    setTimeout(nextQuestion, 2000, parentParent);

}

function finalResult(percentage) {
    const endQuizz = document.querySelector(".container.result");
    endQuizz.classList.remove("noDisplay");

    const titleResult = endQuizz.querySelector(".result1 span");
    titleResult.innerHTML = `${percentage}% de acerto: ${quizzData.levels[0].title}`;
}

function nextQuestion(currentNode) {

    let container = currentNode.nextElementSibling;

    if (container !== currentNode.classList.contains("result")) {
        container.scrollIntoView({ behavior: "smooth", block: "center" });
    }
}








// function nextQuestion(currentNode) {
//     const questions = document.querySelectorAll(".container");
//     let position = 0;
//     let scroll = false;

//     window.addEventListener('scroll', (e) => {
//         scroll = true;
//     })

//     for (let i = 0; i < questions.length; i++) {
//         if (questions[i] === currentNode) {
//             position++;
//         }
//     }

//     if ((position + 1) < questions.length && !scroll) {
//         questions[position + 1].scrollIntoView({ behavior: "smooth", block: "center" });

//     } else if (!scroll) {
//         document.querySelector(".container .result").scrollIntoView({ behavior: "smooth", block: "center" });
//     }
// }

function restart(quizzId) {

    window.scrollTo(0, 0);
    insideQuizz(quizzId);

    data = [];
    quizzData = [];

    answers = [];
    levels;

    qtCorrectAnswers = 0;
    qtAnswered = 0;
    qtQuestions = 0;
    percentage = 0;
}

function resetMain() {
    window.scrollTo(0, 0);
    main.classList.toggle("noDisplay");
    quizz.classList.toggle("noDisplay");

    data = [];
    quizzData = [];

    answers = [];
    levels;

    qtCorrectAnswers = 0;
    qtAnswered = 0;
    qtQuestions = 0;
    percentage = 0;
}

listQuizzes();





