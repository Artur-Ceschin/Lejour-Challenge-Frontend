function criarLinhaTabela(id, data) {
    var button = $('<button></button>')
        .addClass(['btn', 'btn-block', 'd-flex', 'justify-content-between', 'button-color', 'mt-3', 'align']);
    
    var p1 = $('<p></p>').text(id);
    var p2 = $('<p></p>').text(data);

    button.append(p1);
    button.append(p2);

    var tabelaChurn = $('#tabela-churn');
    tabelaChurn.prepend(button);
}

function obterDadosChurn() {
    const URL_TO_FETCH = "https://challenge-lejour-api.herokuapp.com/api/casais/churn";

    fetch(URL_TO_FETCH)
    .then(function(response){
        response.json().then(function(data){
            carregarTabelaChurn(data); 
        });
    })
    .catch(function(err){ 
        console.error('Failed retrieving information', err);
    });
}

function carregarTabelaChurn(dadosChurn) {
    for(let i = 0; i < 4; i++) {
        criarLinhaTabela(dadosChurn[i].id_usuario, dadosChurn[i].data_casamento);
    }
}

$(document).ready(function() {
    obterDadosChurn();
});