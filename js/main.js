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
	  src: ["http://m128.xiami.net/621/2110218621/2102877003/1796903040_1508496811031.mp3?auth_key=1511319600-0-0-68a8bbe1a8f7a88a7880fcd56cb12185"],
	  autoplay: true,
	  loop: true
	});

	Howler.iOSAutoEnable = false;

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