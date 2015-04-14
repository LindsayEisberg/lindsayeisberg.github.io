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

////WORK SLIDER////
  $('.your-class').slick({
    dots: true,
    draggable: false,
    arrows: true
  });


////PERALTA SLIDER///
// $(".handle").draggable({
//   axis: "x",
//   containment: "parent",
//   drag: function() {
//     var position = $(this).position();
//     var positionExtra = position.left + 6;
//     $(".coverImage").width(positionExtra + "px");
//   }
// });


///SINGLE PAGE SCROLL///
 $('#fullpage').fullpage({
    scrollOverflow: true,
    scrollingSpeed: 1000,
    anchors: ['lindsayeisberg', 'portfolio', 'aboutme', 'contactme'],
		menu: '#menu',
    responsive: 800

  });

});
