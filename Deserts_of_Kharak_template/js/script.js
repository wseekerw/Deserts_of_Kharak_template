/// <reference path="angular.js" />



$(document).ready(function() {   
    



//Pocetak animacije za dugme 'Information'
    
    function animacija1() {
          $('#dugme1').animate({'margin-left':'90px'},4000).animate({'margin-left':'150px'},4000, animacija1); 
    }
    animacija1();  
  
var dugme1 = 0;
$('#dugme1').on('click', function() {

        if ((dugme1 == 0) && (window.matchMedia('(min-width: 1440px)').matches)) {
            $('#dugme1').stop(true).animate({
            marginLeft: '950px', 
            opacity: '0.8',
            height: '340px',
            width: '335px',}, 2000)
            dugme1 = 1;
        }
        
        else if ((dugme1 == 0) && ((window.matchMedia('(min-width: 960px)').matches) && (window.matchMedia('(max-width: 1223px)').matches))) {
            $('#dugme1').stop(true).animate({
            marginLeft: '675px', 
            opacity: '0.8',
            height: '330px',
            width: '280px',}, 2000)
            dugme1 = 1;
        }
        
        else if ((dugme1 == 0) && ((window.matchMedia('(min-width: 768px)').matches) && (window.matchMedia('(max-width: 959px)').matches))) {
            $('#dugme1').stop(true).animate({
            marginLeft: '526px', 
            marginTop: '45px',
            opacity: '0.8',
            height: '245px',
            width: '220px',}, 2000)
            dugme1 = 1;
        }
        
        else if ((dugme1 == 0) && ((window.matchMedia('(min-width: 480px)').matches) && (window.matchMedia('(max-width: 767px)').matches))) {
            $('#dugme1').stop(true).animate({
            marginLeft: '-15vw', 
            marginTop: '30px',
            opacity: '0.8',
            height: '10.5vw',
            width: '92vw',}, 2000)
            dugme1 = 1;
        }
        
        else if (dugme1 == 0) {
            $('#dugme1').stop(true).animate({
            marginLeft: '800px', 
            opacity: '0.8',
            height: '340px',
            width: '335px',}, 2000)
            dugme1 = 1;
        }
        
        else if ((dugme1 == 1) && ((window.matchMedia('(min-width: 768px)').matches) && (window.matchMedia('(max-width: 959px)').matches))) {
            $('#dugme1').animate({marginLeft: '60px',height: '32px',width: '90px', opacity: '1'},2000)
            dugme1 = 0;
            animacija1();
        }
        
        else if ((dugme1 == 1) && ((window.matchMedia('(min-width: 480px)').matches) && (window.matchMedia('(max-width: 767px)').matches))) {
            $('#dugme1').animate({marginLeft: '15vw',marginTop: '3vw',height: '5vw',width: '14vw', opacity: '1'},2000)
            dugme1 = 0;
            animacija1();
        }
        
        else if (dugme1 == 1) {
            $('#dugme1').animate({marginLeft: '60px',height: '40px',width: '120px', opacity: '1'},2000)
            animacija1();
            dugme1 = 0;
        }
       
  });
 
// Kraj animacije za dugme 'Information'
//Pocetak animacije za dugme 'Navigation'

function animacija2() {
          $('#dugme2').animate({'margin-left':'75px'},3200).animate({'margin-left':'150px'},3600, animacija2); 
    }
    animacija2();



var dugme2 = 0;
$('#dugme2').on('click', function() {

        if ((dugme2 == 0) && (window.matchMedia('(min-width: 1440px)').matches)) {
            $('#dugme2').stop(true).animate({
            marginTop: '-44px',
            marginLeft: '508px', 
            opacity: '0.8',
            height: '340px',
            width: '335px',}, 2000)
            .html("<link href='css/style.css' rel='stylesheet'><button class='btn Nav_1 Nav_11'>Universe</button><button class='btn Nav_1'>Factions</button><a href='http://www.homeworldremastered.com/'><button class='btn Nav_1'>Hyperlinks</button></a>")
            dugme2 = 1;
        }
        
        else if ((dugme2 == 0) && ((window.matchMedia('(min-width: 960px)').matches) && (window.matchMedia('(max-width: 1223px)').matches))) {
            $('#dugme2').stop(true).animate({
            marginLeft: '346px', 
            marginTop: '-44px',
            opacity: '0.8',
            height: '330px',
            width: '300px',}, 2000)
            .html("<link href='css/style.css' rel='stylesheet'><button class='btn Nav_1 Nav_11'>Universe</button><button class='btn Nav_1'>Factions</button><a href='http://www.homeworldremastered.com/'><button class='btn Nav_1'>Hyperlinks</button></a>")
            dugme2 = 1;
        }
        
        else if ((dugme2 == 0) && ((window.matchMedia('(min-width: 768px)').matches) && (window.matchMedia('(max-width: 959px)').matches))) {
            $('#dugme2').stop(true).animate({
            marginLeft: '281px', 
            marginTop: '-32px',
            opacity: '0.8',
            height: '245px',
            width: '220px',}, 2000)
            .html("<link href='css/style.css' rel='stylesheet'><button class='btn Nav_1 Nav_11'>Universe</button><button class='btn Nav_1'>Factions</button><a href='http://www.homeworldremastered.com/'><button class='btn Nav_1'>Hyperlinks</button></a>")
            dugme2 = 1;
        }
        
        else if ((dugme2 == 0) && ((window.matchMedia('(min-width: 480px)').matches) && (window.matchMedia('(max-width: 767px)').matches))) {
            $('#dugme2').stop(true).animate({
            marginLeft: '-15vw', 
            marginTop: '12px',
            opacity: '0.8',
            height: '12vw',
            width: '92vw',}, 2000)
            .html("<link href='css/style.css' rel='stylesheet'><button class='btn Nav_1 Nav_11'>Universe</button><button class='btn Nav_1'>Factions</button><a href='http://www.homeworldremastered.com/'><button class='btn Nav_1'>Hyperlinks</button></a>")
            dugme2 = 1;
        }
        
        else if (dugme2 == 0) {
            $('#dugme2').stop(true).animate({
            marginTop: '-45px',
            marginLeft: '425px', 
            opacity: '0.7',
            height: '340px',
            width: '350px',}, 2000)
            .html("<link href='css/style.css' rel='stylesheet'><button class='btn Nav_1 Nav_11'>Universe</button><button class='btn Nav_1'>Factions</button><a href='http://www.homeworldremastered.com/'><button class='btn Nav_1'>Hyperlinks</button></a>")
            dugme2 = 1;
        }
        
        else if ((dugme2 == 1) && ((window.matchMedia('(min-width: 768px)').matches) && (window.matchMedia('(max-width: 959px)').matches))) {
            $("#dugme2").remove('.Nav_1').html('Navigation');
            $('#dugme2').animate({marginTop: '10px', marginLeft: '60px',height: '32px',width: '90px', opacity: '1'},2000)
            animacija2();
            dugme2 = 0;
        }
        
        else if ((dugme2 == 1) && ((window.matchMedia('(min-width: 480px)').matches) && (window.matchMedia('(max-width: 767px)').matches))) {
            $("#dugme2").remove('.Nav_1').html('Navigation');
            $('#dugme2').animate({marginTop: '13px', marginLeft: '60px',height: '5vw',width: '14vw', opacity: '1'},2000)
            animacija2();
            dugme2 = 0;
        }
        
        else if (dugme2 == 1) {
            $("#dugme2").remove('.Nav_1').html('Navigation');
            $('#dugme2').animate({marginTop: '13px', marginLeft: '60px',height: '40px',width: '120px', opacity: '1'},2000)
            animacija2();
            dugme2 = 0;
        }
  });
 
// Kraj animacije za dugme 'Navigation'
// Pocetak animacije za dugme 'Related Content'

function animacija3() {
          $('#dugme3').animate({'margin-left':'45px'},3800).animate({'margin-left':'135px'},7000, animacija3); 
    }
    animacija3();
    
    var dugme3 = 0;
    $('#dugme3').on('click', function() {

        if ((dugme3 == 0) && ((window.matchMedia('(min-width: 960px)').matches) && (window.matchMedia('(max-width: 1223px)').matches))) {
            $('#dugme3').stop(true).animate({
            marginLeft: '35px', 
            opacity: '0.8',
            height: '213px',
            width: '283px',}, 2000)
            dugme3 = 1;
        }
        
        else if ((dugme3 == 0) && ((window.matchMedia('(min-width: 768px)').matches) && (window.matchMedia('(max-width: 959px)').matches))) {
            $('#dugme3').stop(true).animate({
            marginLeft: '35px', 
            opacity: '0.8',
            height: '158px',
            width: '220px',}, 2000)
            dugme3 = 1;
        }
        
        else if ((dugme3 == 0) && ((window.matchMedia('(min-width: 480px)').matches) && (window.matchMedia('(max-width: 767px)').matches))) {
            $('#dugme3').stop(true).animate({
            marginLeft: '-15vw', 
            opacity: '0.8',
            height: '12vw',
            marginTop: '7px',
            width: '92vw',}, 2000)
            dugme3 = 1;
        }
        
        else if (dugme3 == 0) {
            $('#dugme3').stop(true).animate({
            marginLeft: '50px', 
            opacity: '0.8',
            height: '221px',
            width: '350px',}, 2000)
            dugme3 = 1;
        }
        
        else if ((dugme3 == 1) && ((window.matchMedia('(min-width: 768px)').matches) && (window.matchMedia('(max-width: 959px)').matches))) {
            $('#dugme3').animate({marginLeft: '35px',height: '32px',width: '110px', opacity: '1'},2000)
            dugme3 = 0;
            animacija3();
        }
        
        else if ((dugme3 == 1) && ((window.matchMedia('(min-width: 480px)').matches) && (window.matchMedia('(max-width: 767px)').matches))) {
            $('#dugme3').animate({marginLeft: '35px',height: '5vw',width: '20vw', opacity: '1'},2000)
            dugme3 = 0;
            animacija3();
        }
        
        else if (dugme3 == 1) {
            $('#dugme3').animate({marginTop: '10px', marginLeft: '60px',height: '40px',width: '140px', opacity: '1'},2000)
            animacija3();
            dugme3 = 0;
        }
  });

// Kraj animacije za dugme 'Related Content'


}); 






            

