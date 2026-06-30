// Captura dos elementos da página
const titulo = document.getElementById('titulo');
const listaNaoOrdenada = document.querySelector('ul');
const link = document.querySelector('a');
const listaOrdenada = document.getElementById('lista-ordenada');

// Adiciona conteúdo textual com .innerText
titulo.innerText = "Título inserido via JavaScript";
link.innerText = "Portal Proz Educação";

// Adiciona itens na lista não ordenada com .innerHTML
listaNaoOrdenada.innerHTML = `
    <li>Item 1 da lista não ordenada</li>
    <li>Item 2 da lista não ordenada</li>
    <li>Item 3 da lista não ordenada</li>
`;

// Adiciona itens com links na lista ordenada com .innerHTML
listaOrdenada.innerHTML = `
    <li><a href="https://www.google.com.br">Google</a></li>
    <li><a href="https://www.youtube.com">YouTube</a></li>
    <li><a href="https://www.wikipedia.org">Wikipédia</a></li>
`;