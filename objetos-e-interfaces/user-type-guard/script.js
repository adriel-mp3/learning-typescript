"use strict";
// 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// 2 - Defina a interface da API
// 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// 4 - Use Type Guards para garantir a Type Safety do código
// 5 - Preencha os dados da API na tela.
async function getCourses(url) {
    const response = await fetch(url);
    const data = await response.json();
    handleData(data);
}
getCourses("https://api.origamid.dev/json/cursos.json");
function isCourse(course) {
    if (!course || typeof course !== "object") {
        return false;
    }
    return "nome" in course && "horas" in course && "tags" in course;
}
function handleData(data) {
    if (Array.isArray(data)) {
        data.filter(isCourse).forEach((course) => (document.body.innerText = `
      <h1>${course.nome}</h1>
      <p>${course.horas}</p>
      <p>${course.tags}</p>
    `));
    }
}
