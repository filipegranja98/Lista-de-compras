const inputItem = document.getElementById("inputItem");
const inputQuantidade = document.getElementById("inputQuantidade");
const inputPreco = document.getElementById("inputPreco");
const btAdicionar = document.getElementById("btAdicionar");
const btLimpar = document.getElementById("btLimpar");
const lista = document.getElementById("lista");


let listaItems = [];

const redesenhaLista = (lista, listaItems) => {
  lista.innerHTML = "";
  for (let index = 0; index < listaItems.length; ++index) {
    const itemText = document.createTextNode(listaItems[index]);
    const listItem = document.createElement("li");
    listItem.appendChild(itemText);
    lista.appendChild(listItem);
  }
};


  const handleBtAdicionarClick = () => {
    const item = inputItem.value;
    const quantidade = inputQuantidade.value;
    const preco = parseFloat(inputPreco.value);
    if (!item || !quantidade || !preco ) {
      alert("Necessário digitar um item!");
      return;
    }
    const lista = document.querySelector("#lista tbody");
    const novaLinha = document.createElement("tr");
    novaLinha.innerHTML = `<td>${item}</td><td>${quantidade}</td><td>R$ ${preco.toFixed(2)}</td> <td>R$ ${(preco * quantidade).toFixed(2)}</td>`;
    lista.appendChild(novaLinha);
    document.getElementById("inputItem").value = "";
    document.getElementById("inputQuantidade").value = "";
    document.getElementById("inputPreco").value = "";
    document.getElementById("inputItem").focus();
  
};

const handleBtLimparClick = () => {
  listaItems = [];
  lista.innerHTML = "";
  inputItem.focus();
};

btAdicionar.onclick = handleBtAdicionarClick;
btLimpar.onclick = handleBtLimparClick;