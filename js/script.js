let data = [];
let quizzData = [];
let quizzId;

function listQuizzes() {

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

    quizzId = id;

    let answers = [];
    let levels = [];

    const promise = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/' + id);

    promise.then((response) => {
        quizzData = response.data;

        const main = document.querySelector(".listQuizz");
        main.classList.add("noDisplay")

        const quizz = document.querySelector(".insideQuizz");
        quizz.classList.remove("noDisplay");

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
            console.log(ansData);
            for (let a = 0; a < ansData.length; a++) {
                answers.push(ansData[a]);
            }

            answers = answers.sort(() => Math.random() - 0.5);
            console.log(answers);
            let ansQuest = quizz.querySelector(`.a${i}`);


            for (let j = 0; j < answers.length; j++) {
                ansQuest.innerHTML += `
                <div class="answer" onclick="answers(this)>
                    <img src='${answers[j].image}'>
                    <span>${answers[j].text}</span>
                </div>
                `
            }
            console.log(ansQuest);

            answers = [];

            // const quest = quizz.querySelector(`.question .q${i}`);
            // console.log(quizz);
            // console.log(questData[i].color);

            // quizz.querySelector(`.question .q${i}`).style.backgroundColor = questData[i].color;

        }





    })
}

// function insideQuizz() {
//     const main1 = document.querySelector(".main1");
//     const main2 = document.querySelector(".main2");

//     main1.classList.add("noDisplay");
//     main2.classList.remove("noDisplay");



// }

listQuizzes();





