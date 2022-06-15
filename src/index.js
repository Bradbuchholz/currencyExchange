import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './js/exchangeService.js'

function clearFields() {
  $('#exchCurr').val("");
  $('.showErrors').text("");
  $('.showExchange').text("");
}

$(document).ready(function() {
  $('#exchange').click(function() {
    let amount = $('#USD').val();
    clearFields();
    let promise = ExchangeService.getRate(amount);
    promise.then(function(response) {
      const body = JSON.parse(response);
      $('.showExchange').text(`The exchange amout is${body.main.coversion_rates}.`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});