const projetos = [
  {
    nome: "Projeto 1",
    descricao: "Meu primeiro projeto em fase de aprendizado"
  },
  {
    nome: "Projeto 2",
    descricao: "Meu segundo projeto em fase de aprendizado"
  }
];

const lista = document.getElementById("lista-projetos");

projetos.forEach(p => {
  const div = document.createElement("div");
  div.className = "card";

  div.innerHTML = `
    <h3>${p.nome}</h3>
    <p>${p.descricao}</p>
  `;

  lista.appendChild(div);
});
