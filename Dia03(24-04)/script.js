function lerIdade() {
    var idade = parseInt(document.getElementById("entrada").value);

    votacao(idade);
}

function votacao(idade) {
    var resposta = document.getElementById("resposta");
    
    resposta.innerHTML = "<div class='tile' id='mensagem'>"

    if (idade < 18) {
        resposta.innerHTML += `<div class="avatar menor-idade">${idade}</div>`;
        resposta.innerHTML += `<div class="corpo">A pessoa não pode votar!</div>`;
    } else {
        resposta.innerHTML += `<div class="avatar maior-idade">${idade}</div>`;
        resposta.innerHTML += `<div class="corpo">A pessoa pode votar!</div>`;
    } resposta.innerHTML += "</div>"

}