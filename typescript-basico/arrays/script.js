"use strict";
/*
Defina a interface da API: https://api.origamid.dev/json/cursos.json e mostre os dados na tela.

Existem apenas dois níveis de cursos, Iniciante (iniciante) e Avançado (avancado). Se for para iniciante pinte o título de azul, para avançado pinte de vermelho.
**/
(async () => {
    const response = await fetch("https://api.origamid.dev/json/cursos.json");
    const data = await response.json();
    mostrarCursos(data);
})();
function mostrarCursos(cursos) {
    const cursoTitles = cursos.map((curso) => `<h1 style="color:${curso.nivel === "iniciante" ? "blue" : "red"};">${curso.nome}</h1>`);
    return cursoTitles.forEach((curso) => (document.body.innerHTML += curso));
}
