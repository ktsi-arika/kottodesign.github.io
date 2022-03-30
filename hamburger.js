(()=>{
  'use strict';

$(function() {
  $('.menu-trigger').on('click', function() {
    $(this).toggleClass('active');
    $('.global-nav').toggleClass('active');
    $('.global-nav').on('click',function() {
    $('.menu-trigger').trigger('click');
  });
});
});
})();
