"use strict";
/*
1 - Selecione o link utilizando o método getElementById.
2 - Substitua o href do link (HTMLAnchorElement) de http:// para https://.
**/
// Quando utilizamos o getElementById por padrão ele pode retornar de forma generica objeto do tipo HTMLElement ou null se não for encontrado
const link = document.getElementById("origamid"); // HTMLElement || null
// Agora para acessar a propriedade href que é de um HTMLAnchorElement precisamos:
if (link instanceof HTMLAnchorElement) {
    // Caso for uma instancia teremos acesso a propriedade de HTMLAnchorElement.href
    link.href = link.href.replace("http://", "https://");
}
console.dir(link); // retorna o caminho
console.log(link); // retorna o elemento do DOM || null
// null = é um tipo primitivo do JavaScript que indica a ausência de valor.
