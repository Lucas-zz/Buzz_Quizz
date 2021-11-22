let data = [];
let quizzData = [];
let quizzId;

function listQuizzes() {

    const promise = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes');

    promise.then((response) => {
        console.log(response.data);
        data = response.data;

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

    let questions = [];
    let levels = [];

    const promise = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/' + id);

    promise.then((response) => {
        console.log(response.data);
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
        console.log(questData.length)

        for (let i = 0; i < questData.length; i++) {

            quizz.innerHTML += `
            <section class="container">
                <article class="margin">
                    <div class="question" data-identifier="question">
                        <span>${questData[i].title}</span>
                    </div>
                </article>
            </section>
            `
            const quest = quizz.querySelector(".question");
            quest.style.backgroundColor = questData[i].color;
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





