const renderCreateQuestions = (amountOfQuestions) => {
  const createQuestions = document.querySelector(".create-questions");

  for (let i = 1; i <= amountOfQuestions; i++) {
    createQuestions.innerHTML += `
        <div class="questions question${i}">
          <span class="title">Pergunta ${i}</span>

          <input placeholder="Texto da pergunta" />
          <input placeholder="Cor de fundo da pergunta" />

          <span class="title">Resposta correta</span>

          <input placeholder="Resposta correta" />
          <input placeholder="URL da imagem" />

          <span class="title">Respostas incorreta</span>

          <input placeholder="Resposta incorreta 1" />
          <input placeholder="URL da imagem 1" />

          <hr />

          <input placeholder="Resposta incorreta 2" />
          <input placeholder="URL da imagem 2" />

          <hr />

          <input placeholder="Resposta incorreta 3" />
          <input placeholder="URL da imagem 3" />


        </div>`;

    if (i == amountOfQuestions) {
      createQuestions.innerHTML += `
        <button onclick="selectLevel()">Prosseguir pra criar níveis</button>
        `;
    }
  }
};
