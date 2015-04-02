$(document).ready(function(){
  var menuOpen = false;


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
        $('.your-class').slick({
    dots: true,
    draggable: false,
    arrows: true
  });

      $('#fullpage').fullpage({
      });


  // $(document).ready(function(){
  //   $('.your-class').slick({
  //      setting-name: setting-value
  //   });
  // });
        

});