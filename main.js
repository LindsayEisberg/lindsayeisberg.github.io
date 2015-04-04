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
    $('.social').addClass('none');

    menuOpen = true;
    console.log(menuOpen)
  }
  else if (menuOpen) {
   $('#sidebarToggle')[0].checked = false;
    $('.menu-txt').text('open');
    $('.social').removeClass('none');

    menuOpen = false;
  }
    $('.menu-txt').attr('data-text',open);


  });

// ///STICKY NAV///
// $(window).scroll(function(event){
//   var scroll = $(window).scrollTop();
//   if(scroll>=100) {
//     $('nav').css('opacity',1);
//   }
//   if(scroll<=100) {
//     $('nav').css('opacity', 0);
//   }
// });
//
// ///SCROLLING///
// $('nav').on('click', 'ul li a', function(e){
//   e.preventDefault();
//   var loc = $(this).attr('rel');
//   loc = '#' + loc;
//   $('html, body').animate({
//     scrollTop: ($(loc).offset().top
//   )}, 800);
// });



// $('nav').on('click', '.logo a', function(e){
//   e.preventDefault();
//   $('html, body').animate({scrollTop: 0}, 800);
// });


// $('.fp-viewing-lindsayeisberg').children('nav').addClass('none');
// $('.fp-viewing-portfolio').children('nav').removeClass('none')
// $('.fp-viewing-aboutme').children('nav').removeClass('none')
// $('.fp-viewing-contactme').children('nav').removeClass('none')


////WORK SLIDER////
  $('.your-class').slick({
    dots: true,
    draggable: false,
    arrows: true
  });


/////CARD FLIP///////
$('#js-flip-1').toggle(
    function() {
        $('#js-flip-1 .card').addClass('flipped');
    },
    function() { $('#js-flip-1 .card').removeClass('flipped');
    }
);


///SINGLE PAGE SCROLL///
 $('#fullpage').fullpage({
    scrollOverflow: true,
    scrollingSpeed: 1000,
    anchors: ['lindsayeisberg', 'portfolio', 'aboutme', 'contactme'],
		menu: '#menu'
    // responsive: 992

  });

});
