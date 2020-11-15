const laranjaLejour = '#EA8079';
const goiabaLejour = '#E2645A';
const azulCeuLejour = '#84B8E2';
const verdeAguaEscuroLejour = '#68BFB7';

function obterDadosAPILejour(endpoint, callback) {
    const URL_TO_FETCH = `https://challenge-lejour-api.herokuapp.com/api${endpoint}`;

    fetch(URL_TO_FETCH)
    .then(function(response){
        response.json().then(function(data){
            callback(data); 
        });
    })
    .catch(function(err){ 
        console.error('Failed retrieving information', err);
    });
}