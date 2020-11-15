window.onload = function() {
    obterDadosAPILejour('/fornecedores/ranking', renderizarGraficoCategoriaVsFatura);
    obterDadosAPILejour('/fornecedores/invoices', renderizarGraficoAgendamentoVsFatura);
}


function renderizarGraficoCategoriaVsFatura(data) {

    var titulos = data.map((x) => x.categoria);
    var dadosFornecedores = data.map((x) => x.negocios_fechados);

    var barChartData = {
        labels: titulos,
        datasets: [{
            label: "Fornecedores/Categoria",
            borderWidth: 1,
            data: dadosFornecedores,
            backgroundColor: '#E2645A'
        }]
    };

    var ctx = document.getElementById('faturamentoPorCategoriaFornecedorGrafico').getContext('2d');
    window.myBar = new Chart(ctx, {
        type: 'horizontalBar',
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

function renderizarGraficoAgendamentoVsFatura(data) {

    var titulos = data.map((x) => x.categoria);
    var dadosAgendamentos = data.map((x) => x.agendamentos_realizados);
    var dadosInvoicesAceitas = data.map((x) => x.negocios_fechados);

    var barChartData = {
        labels: titulos,
        datasets: [{
            label: "Agendamentos",
            borderWidth: 1,
            data: dadosAgendamentos,
            backgroundColor: '#E2645A'
        },
        {
            label: "Invoices",
            borderWidth: 1,
            data: dadosInvoicesAceitas,
            backgroundColor: '#84B8E2'
        }]
    };

    let ctx = document.getElementById('agendamentosVsFaturasGrafico').getContext('2d');
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
            },
            tooltips: {
                mode: 'index',
                intersect: false
            },
            scales: {
                xAxes: [{
                    stacked: true
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        }
    });
}