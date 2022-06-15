import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from 'src/js/exchangeService.js'

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
      $('.showExchange').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});