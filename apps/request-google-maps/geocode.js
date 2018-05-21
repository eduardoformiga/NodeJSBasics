const request = require('request');
const argv = require('yargs').argv;

let direcao = argv.direcao;
let url = `http://maps.googleapis.com/maps/api/geocode/json?address=${direcao}`;

request({
  url: url,
  json: true
}, (error, response, body) => {
  if (error) {
    console.log('Serviço não disponível!');
  } else if (body.status === 'ZERO_RESULTS') {
    console.log('Sem dados para mostrar!');
  } else if (body.status === 'OK') {
    console.log(JSON.stringify(body, undefined, 1));
    console.log(JSON.stringify(body.results[0].formatted_address));
    console.log(JSON.stringify(body.results[0].geometry.location.lat));
    console.log(JSON.stringify(body.results[0].geometry.location.lng));
  }
});