$(document).ready(function(){
    $('.click').click(function(){
      $('.popup_box').css("display", "block");
    });
    $('.btn1').click(function(){
      $('.popup_box').css("display", "none");
    });
    $('.btn2').click(function(){
      $('.popup_box').css("display", "none");
      alert("My Brand로 등록되었습니다.");
    });
  });