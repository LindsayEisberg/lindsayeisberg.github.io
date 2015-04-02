$(document).ready(function(){


  var menuOpen = false;

///OPEN/CLOSE SIDE MENU////
$('.menu-cont').on('click', function(event) {
  event.preventDefault();

  var open = $('.menu-txt').text();
  var close = $('.menu-txt').attr('data-text');

  $('.menu').toggleClass('active');

  if (!menuOpen) {
    $('.menu-txt').text(close);
    $('#sidebarToggle')[0].checked = true;
    menuOpen = true;
    console.log(menuOpen)
  }
  else if (menuOpen) {
   $('#sidebarToggle')[0].checked = false;
    $('.menu-txt').text('open');
    menuOpen = false;
  }
    $('.menu-txt').attr('data-text',open);


  });

///STICKY NAV///
$(window).scroll(function(event){
  var scroll = $(window).scrollTop();
  if(scroll>=48) {
    $('nav').addClass('fixedNav');
  }
  if(scroll<=48) {
    $('nav').removeClass('fixedNav');
  }
});

///SCROLLING///
$('nav').on('click', 'ul li a', function(e){
  e.preventDefault();
  var loc = $(this).attr('rel');
  loc = '#' + loc;
  $('html, body').animate({
    scrollTop: ($(loc).offset().top
  )}, 800);
});

// $('nav').on('click', '.logo a', function(e){
//   e.preventDefault();
//   $('html, body').animate({scrollTop: 0}, 800);
// });

////WORK SLIDER////
  $('.your-class').slick({
    dots: true,
    draggable: false,
    arrows: true
  });

///SINGLE PAGE SCROLL///
 $('#fullpage').fullpage({
    scrollOverflow: true,
    scrollingSpeed: 1000,


  });

});
