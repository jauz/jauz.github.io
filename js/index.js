$(function(){
	var toggleButton = $('.menu-toggle'), 
		nav = $('.nav'), 
		navLi = $('.nav').find('li'),
		slider = $('.slider');

	toggleButton.bind('click', function(e){
		e.preventDefault();
		$(this).toggleClass('open');
		nav.slideToggle();
	});

	navLi.on("click", function(){
		$(this).siblings('li').removeClass('active');
		$(this).addClass('active');
   		toggleButton.toggleClass('open');
   		nav.fadeOut();
   		var s = 'slider slider' + ($(this).index()+1);
   		slider.attr('class', s);
  	});
})