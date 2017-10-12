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

  	var sound = new Howl({
	  src: ["images/show.mp3"],
	  autoplay: true,
	  loop: true
	});

	var aa = 1;
	$('.music').hover(function(){
		if (aa==1) {
			$(this).find('span').eq(0).css('display','block');
		}else  if(aa==0){
			$(this).find('span').eq(1).css('display','block');
		}	
	},function(){
		$(this).find('span').hide();
	});

	$('.music').on('click',function(){
		if ($(this).find('span').eq(0).css('display')=='block') {
			aa=0;
			$(this).find('span').eq(0).css('display','none');
			$(this).find('span').eq(1).css('display','block');
			sound.pause();
			return aa;
		}else {
			aa=1;
			$(this).find('span').eq(0).css('display','block');
			$(this).find('span').eq(1).css('display','none');
			sound.play();
			return aa;
		}
		$(this).find('span').hide();
	});
})