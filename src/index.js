import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './js/exchangeService.js';

function clearFields() {
  $('.showErrors').text("");
  $('.showExchange').text("");
}

$(document).ready(function() {
  $('#exchange').click(function() {
    const amount = $('#USD').val();
    const currencyType = $('#exchCurr').val();
    clearFields();
    let promise = ExchangeService.getRate(amount, currencyType);
    promise.then(function(response) {
      const result = JSON.parse(response);
      const finalAmount = Math.round((result.conversion_result + Number.EPSILON) * 100) / 100;
      $('.showExchange').text(`The exchange is ${finalAmount}`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});