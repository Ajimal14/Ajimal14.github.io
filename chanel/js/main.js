$('.bigNav img , #ham , #close, .slideInMenu ,.megaMenu, .womenDynamic , #filterDrop, #categoryDrop , #sizesDrop, .desc, #colorsDrop , #closeShop').hide();
//FIXED HEADER
$(window).scroll(function(){
    if ($(window).scrollTop() >= 600) {
       $('.bigNav').addClass('animated fadeInDown').addClass('fixed-header');
      $('.bigNav img').show();
    if($(window).width() < 481)
		{    
		$('.bigNav ul').hide();	
		$('.bigNav').addClass('mobileNav');
		$('#ham').show();
		}
    }
    else {
       $('.bigNav').removeClass('fixed-header animated fadeInUp');
    	$('.bigNav img').hide(); 
   ($(window).width() < 481)
		{    
		$('.bigNav ul').show();	
		$('#ham').hide();
		$('.bigNav').removeClass('mobileNav');
		}
    }
});
$('#ham').click(function(){
    $('.slideInMenu').toggle('slide', {direction: 'left'},700);
  }
    );
$('#close').click(function(){
$('.slideInMenu').removeClass('animated slideInLeft')
$('.slideInMenu').addClass('animated slideOutLeft');
$('#ham').show();
$('#close').hide();
});
$('.shop').mouseenter(function(){
$('.megaMenu').slideDown();
});
$('.bigNav').mouseleave(function(){
$('.megaMenu').slideUp();
$('.womenDynamic').hide();
$('.menDynamic').hide();
});
$('#megaMenuMen').hover(function(){
$('.womenDynamic').slideUp('slow');
$('.menDynamic').slideDown('slow');
});
$('#megaMenuWomen').hover(function(){
$('.menDynamic').slideUp('slow');
$('.womenDynamic').slideDown('slow');
});
$('#filters').click(function(){
$('#filterDrop').slideToggle();
$('#sizesDrop').slideUp();
$('#categoryDrop').slideUp();
$('#colorsDrop').slideUp();
});
$('#categories').click(function(){
$('#categoryDrop').slideToggle();
$('#filterDrop').slideUp();
$('#sizesDrop').slideUp();
$('#colorsDrop').slideUp();
});

$('#sizes').click(function(){
$('#sizesDrop').slideToggle();
$('#categoryDrop').slideUp();
$('#filterDrop').slideUp();
$('#colorsDrop').slideUp();
});
$('#colors').click(function(){
$('#sizesDrop').slideUp();
$('#categoryDrop').slideUp();
$('#filterDrop').slideUp();
$('#colorsDrop').slideToggle();
});
//SMOOTH SCROLL
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
