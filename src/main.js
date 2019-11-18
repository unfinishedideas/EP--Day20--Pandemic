import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Pandemic } from './pandemic.js';

$(document).ready(function(){
  $("#startGame").submit(function(event){
    event.preventDefault();

  })
})
