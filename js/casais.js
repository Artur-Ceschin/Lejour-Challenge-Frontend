window.onload = function() {
    obterDadosAPILejour('/casais/churn', carregarTabelaChurn);
    obterDadosAPILejour('/casais/orcamento', renderizarGraficoCasamentosVsOrcamento);
}

function criarLinhaTabela(id, data) {
    var button = $('<button></button>')
        .addClass(['btn', 'btn-block', 'd-flex', 'justify-content-between', 'button-color', 'mt-3', 'align']);
    
    var p1 = $('<p></p>').text('ID:' + id);
    var p2 = $('<p></p>').text(data);

    button.append(p1);
    button.append(p2);

    var tabelaChurn = $('#tabela-churn');
    tabelaChurn.prepend(button);
}

function carregarTabelaChurn(dadosChurn) {
    for(let i = 0; i < 4; i++) {
        criarLinhaTabela(dadosChurn[i].id_usuario, dadosChurn[i].data_casamento);
    }
}

function renderizarGraficoCasamentosVsOrcamento(data) {

    var titulos = data.map((x) => x.faixa_valor);
    var dadosCasamentos = data.map((x) => x.quantidade_casamentos);

    var barChartData = {
        labels: titulos,
        datasets: [{
            label: "Casamentos",
            borderWidth: 1,
            data: dadosCasamentos,
            backgroundColor: '#E2645A'
        }]
    };

    var ctx = document.getElementById('casamentoVsOrcamentoGrafico').getContext('2d');
    window.myBar = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: ''
            }
        }
    });
}