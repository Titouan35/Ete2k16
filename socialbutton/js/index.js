$(function() {
  prettyPrint();
  $('.lang-html').mouseover(function() {
     $(this).addClass('over');
  });
  $('.lang-html').mouseleave(function() {
    $(this).removeClass('over');
  });
});