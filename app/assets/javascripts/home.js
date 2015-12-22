$(document).ready(function(){

// MATCHING JS
  $('.memory-box').addClass('center-align');
  $('.memory-box h3').addClass('hide');

  var width = $('#b1').width();
  $('.memory-box').css('height', width).css('border', '5px solid white');

  $('.memory-box').hover(function(){
    $(this).css('border', '5px solid blue');
  }, function(){
    $(this).css('border', '5px solid white');
  });

  var clickCount = 0;
  var click1 = '';
  var click2 = '';
  var remaining = 16;
  $('.memory-box').click(function(){
    if (clickCount === 0){
      $(this).find('h3').removeClass('hide');
      click1 = $(this).find('h3');
      clickCount += 1;
    } else if (clickCount === 1){
      $(this).find('h3').removeClass('hide');
      click2 = $(this).find('h3');
      clickCount += 1;
      if (click1.text() === click2.text()) {
        clickCount = 0;
        remaining -= 2;
      } else {
        alert('wrong');
        click1.addClass('hide');
        click2.addClass('hide');
        clickCount = 0;
      };
    };
    if (remaining == 0) {
      alert('YOU WIN BITCH!');
      $('.memory-box').find('h3').addClass('hide');
      clickCount = 0;
      remaining = 16;
    };
  });

// TIC-TAC-TOE
  $('.ttt_box').addClass('center-align');

  var width = $('.ttt_box').width();
  $('.ttt_box').css('height', width).css('border', '5px solid black');

  function clearBoard(){
    $('.ttt_value').removeClass('ticked');
    $('.ttt_value').empty();
  }

  var playerTurn = 0;
  $('.ttt_box').click(function(){
    var ttt = $(this).find('h3')
    if (ttt.hasClass('ticked')){
      alert('Pick another box');
    } else {
      if (playerTurn === 0){
        playerTurn += 1;
        ttt.html('X');
        ttt.addClass('ticked');
      } else if (playerTurn === 1){
        playerTurn -= 1;
        ttt.html('O');
        ttt.addClass('ticked');
      }
    }
    if ($('#t1').hasClass('ticked')){ var t1 = $('#t1').html(); }
    if ($('#t2').hasClass('ticked')){ var t2 = $('#t2').html(); }
    if ($('#t3').hasClass('ticked')){ var t3 = $('#t3').html(); }
    if ($('#t4').hasClass('ticked')){ var t4 = $('#t4').html(); }
    if ($('#t5').hasClass('ticked')){ var t5 = $('#t5').html(); }
    if ($('#t6').hasClass('ticked')){ var t6 = $('#t6').html(); }
    if ($('#t7').hasClass('ticked')){ var t7 = $('#t7').html(); }
    if ($('#t8').hasClass('ticked')){ var t8 = $('#t8').html(); }
    if ($('#t9').hasClass('ticked')){ var t9 = $('#t9').html(); }
    if (
    (t1 != null && t1 == t2 && t2 == t3) ||
    (t4 != null && t4 == t5 && t5 == t6) ||
    (t7 != null && t7 == t8 && t8 == t9) ||
    (t1 != null && t1 == t4 && t4 == t7) ||
    (t2 != null && t2 == t5 && t5 == t8) ||
    (t3 != null && t3 == t6 && t6 == t9) ||
    (t1 != null && t1 == t5 && t5 == t9) ||
    (t3 != null && t3 == t5 && t5 == t7)){
      if (playerTurn == 1){
        alert('X WINS!');
        clearBoard();
      } else {
        alert('O WINS!');
        clearBoard();
      }
    }
  });

});
