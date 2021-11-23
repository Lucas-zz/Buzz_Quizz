const quizzObject = {
  title: "",
  image: "",
  questions: [],
  levels: [],
};

let amountOfQuestions = 0;
let amountOfLevels = 0;

const validUrl = (url) => {
  try {
    new URL(url);
  } catch (_) {
    return false;
  }
  return true;
};
function validHex(h) {
  var a = parseInt(h, 16);
  return a.toString(16) === h;
}

const createQuizz = () => {
  const listQuizz = document.querySelector(".listQuizz");
  const creatingQuizz = document.querySelector(".creating-quizz");

  listQuizz.setAttribute("class", "noDisplay");
  creatingQuizz.classList.remove("noDisplay");
};

const makeQuestions = () => {
  let nextPage = false;

  const start = document.querySelector(".start");
  const createQuestions = document.querySelector(".create-questions");

  quizzObject.title = document.querySelector(".quizz-title").value;
  quizzObject.image = document.querySelector(".quizz-image").value;
  amountOfQuestions = document.querySelector(".amount-questions").value;
  amountOfLevels = document.querySelector(".amount-levels").value;

  if (quizzObject.title.length > 20 || quizzObject.title.length < 65) {
    if (validUrl(quizzObject.image)) {
      if (amountOfQuestions >= 3) {
        if (amountOfLevels >= 2) {
          nextPage = true;
        }
      }
    }
  }
  nextPage = true;

  if (nextPage) {
    start.setAttribute("class", "noDisplay");
    createQuestions.classList.remove("noDisplay");
    renderCreateQuestions(amountOfQuestions);
  } else {
    alert("Preencha os dados corretamente!");
  }
};

const selectLevel = () => {
  const createQuestions = document.querySelector(".create-questions");
  const selectLevel = document.querySelector(".select-level");

  let nextPage = false;

  for (let i = 1; i <= amountOfQuestions; i++) {
    let questionsObject = {
      title: "",
      color: "",
      answers: [],
    };
    let answersObject1 = { text: "", image: "", isCorrectAnswer: false };
    let answersObject2 = { text: "", image: "", isCorrectAnswer: false };
    let answersObject3 = { text: "", image: "", isCorrectAnswer: false };
    let answersObject4 = { text: "", image: "", isCorrectAnswer: false };

    const question = document.querySelector(`.question${i}`);
    const inputs = question.querySelectorAll("input");

    questionsObject.title = inputs[0].value;
    questionsObject.color = inputs[1].value;

    if (inputs[2].value !== "" || inputs[3].value !== "") {
      answersObject1.text = inputs[2].value;
      answersObject1.image = inputs[3].value;
      answersObject1.isCorrectAnswer = true;
      questionsObject.answers.push(answersObject1);
    }

    if (inputs[4].value !== "" || inputs[5].value !== "") {
      answersObject2.text = inputs[4].value;
      answersObject2.image = inputs[5].value;
      answersObject2.isCorrectAnswer = false;
      questionsObject.answers.push(answersObject2);
    }

    if (inputs[6].value !== null || inputs[7].value !== null) {
      answersObject3.text = inputs[6].value;
      answersObject3.image = inputs[7].value;
      answersObject3.isCorrectAnswer = false;
      questionsObject.answers.push(answersObject3);
    }

    if (inputs[8].value !== "" || inputs[9].value !== "") {
      answersObject4.text = inputs[8].value;
      answersObject4.image = inputs[9].value;
      answersObject4.isCorrectAnswer = false;
      questionsObject.answers.push(answersObject4);
    }

    quizzObject.questions.push(questionsObject);
  }

  console.log(quizzObject);

  createQuestions.setAttribute("class", "noDisplay");
  selectLevel.classList.remove("noDisplay");
};

const ending = () => {
  const selectLevel = document.querySelector(".select-level");
  const ending = document.querySelector(".ending");

  // const quizzTitle = document.querySelector(".quizz-title").value;
  // const quizzImage = document.querySelector(".quizz-image").value;
  // const amountQuestions = document.querySelector(".amount-questions").value;
  // const amountLevels = document.querySelector(".amount-levels").value;

  selectLevel.setAttribute("class", "noDisplay");
  ending.classList.remove("noDisplay");
};
