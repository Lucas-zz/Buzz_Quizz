let data = [];
let quizzId;

function listQuizzes() {

    const promise = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes');

    promise.then((response) => {
        console.log(response.data);
        data = response.data;

        const quizz = document.querySelector(".allQuizzes");

        for (let i = 0; i < data.length; i++) {

            quizz.innerHTML +=
                `
                <article onclick="insideQuizz(this)">
                <img src="${data[i].image}">
                <span class="title">${data[i].title}</span>
                <div class="gradient"></div>
                </article>
                `
        }
    });
}

// function insideQuizz() {
//     const main1 = document.querySelector(".main1");
//     const main2 = document.querySelector(".main2");

//     main1.classList.add("noDisplay");
//     main2.classList.remove("noDisplay");



// }

listQuizzes();





