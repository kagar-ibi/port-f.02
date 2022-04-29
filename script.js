$(".openbtn").click(function() {
  $(this).toggleClass('active');
  $("#g-nav").toggleClass('panelactive');
});

$("#g-nav a").click(function() {
  $(".openbtn").removeClass('active');
  $("#g-nav").removeClass('panelactive');

});


$('.design').on('click',function(){
  $('.popup').addClass('show').fadeIn();

});

$('#close').on('click',function(){
  $('.popup').fadeOut();

});
