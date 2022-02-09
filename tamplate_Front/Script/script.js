function cadCardapio(lanche, valor) {
  const tb = document.getElementById("tbCardapio");
  const qtdLinhas = tb.rows.length;
  const linha = tb.insertRow(qtdLinhas);

  const cellCodigo = linha.insertCell(0);
  const cellLanche = linha.insertCell(1);
  const cellValor = linha.insertCell(2);

  cellCodigo.innerHTML = qtdLinhas;
  (cellLanche.innerHTML = lanche), (cellValor.innerHTML = valor);
}

const form = document.getElementById("form");

//form.addEventListener("submit", getData);

const api = "http://127.0.0.1:8000/cardapio/";

const buscaData = async () => {
  const res = await fetch(api);
  const data = await res.json();
  console.log(data);
};

function sendData(method, url, header, data, serverResponse) {

  let httpRequest = new XMLHttpRequest();

  httpRequest.open(method, url);

  httpRequest.setRequestHeader("X-Content-Type-Options", header);

  httpRequest.send(data);

  httpRequest.onreadystatechange = serverResponse;

  console.log(httpRequest);
}

function getData(event) {
  event.preventDefault();

  let data = {
    txtLanche: form.txtLanche.value,
    txtValor: form.txtValor.value,
  };

  sendData(
    "POST",
    "http://127.0.0.1:8000/cardapio/?format=json",
    "application/json",
    json,
    response,
  );

  fetch("http://127.0.0.1:8000/cardapio/?format=json",{
    headers: new Headers ({
      "X-Content-Type-Options": "aplication/json",
    }),
    method: "POST",
    body: JSON.stringify(data),
  })
  .then((response)=>{
    const responseStatus = {
      200: () => {
        alert("Dados enviados com sucesso.");
      },
      400: () => {
        alert("Item já cadastrado.");
      },
      404: () => {
        alert("Tente mais tarde.");
      },
    };
    if (responseStatus[response.status]) {
      let responseUser = responseStatus[response.status];
      responseUser();
    } else {
      alert("Cadastre novamente.");
    }

  });


}
