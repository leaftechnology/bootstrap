window.addEventListener('load',function(){
  document.querySelector('body').classList.add("page-loaded");
});

$(document).ready(function(){

var scrollTrigger = 50;//$('.navbar').outerHeight();
var navbarHeight = $('.navbar').height();

	$(window).scroll(function(e){
		arrangePage();
	});

	function arrangePage() {
	  if ($(this).scrollTop() > scrollTrigger){
		$('body').addClass('navbar-threshold');
	  }
	  if ($(this).scrollTop() < scrollTrigger){
		$('body').removeClass('navbar-threshold');
	  }
	}


	$('[data-scroll="smooth"]').on('click', function(e) {
	   e.preventDefault();
	   var hash = this.hash;
	   $('html, body').animate({
	       scrollTop: $(hash).offset().top
	     }, 800, function(){
	       window.location.hash = hash;
	     });
	});
	$(function() {
	  $('.ripple-effect')
	    .on('mouseenter', function(e) {
				var parentOffset = $(this).offset(),
	      		relX = e.pageX - parentOffset.left,
	      		relY = e.pageY - parentOffset.top;
				$(this).find('.ripple').css({top:relY, left:relX})
	    })
	    .on('mouseout', function(e) {
				var parentOffset = $(this).offset(),
	      		relX = e.pageX - parentOffset.left,
	      		relY = e.pageY - parentOffset.top;
	    	$(this).find('.ripple').css({top:relY, left:relX})
	    });
	});
});
