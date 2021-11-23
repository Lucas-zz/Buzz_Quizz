const createQuizz = () => {
  const listQuizz = document.querySelector(".listQuizz");
  const creatingQuizz = document.querySelector(".creating-quizz");

  listQuizz.setAttribute("class", "noDisplay");
  creatingQuizz.classList.remove("noDisplay");
};

const makeQuestions = () => {
  const start = document.querySelector(".start");
  const createQuestions = document.querySelector(".create-questions");

  const quizzTitle = document.querySelector(".quizz-title").value;
  const quizzImage = document.querySelector(".quizz-image").value;
  const amountQuestions = document.querySelector(".amount-questions").value;
  const amountLevels = document.querySelector(".amount-levels").value;

  start.setAttribute("class", "noDisplay");
  createQuestions.classList.remove("noDisplay");
};

const selectLevel = () => {
  const createQuestions = document.querySelector(".create-questions");
  const selectLevel = document.querySelector(".select-level");

  // const quizzTitle = document.querySelector(".quizz-title").value;
  // const quizzImage = document.querySelector(".quizz-image").value;
  // const amountQuestions = document.querySelector(".amount-questions").value;
  // const amountLevels = document.querySelector(".amount-levels").value;

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
