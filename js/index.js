$(function(){
	//搜索
	$(".userInfor i").click(function(){
		$(".search").show();
	})
	$(".search a").click(function(){
		$(".search").hide();
		return false;
	})

	//banner
	var bliW = $(".bannerD li").width(),
		bliS = $(".bannerD li").length,
		i = 0;
	$(".bannerD ul").width(bliW*bliS);
	$(".bannerX a").click(function(){
		if($(this).hasClass("right")){
			i=++i>=bliS?0:i;
			$(".bannerD ul").stop().animate({marginLeft:-(bliW*i)},1000);
			//console.log(i);			
		}else{
			i=--i<0?bliS-1:i;
			$(".bannerD ul").stop().animate({marginLeft:-(bliW*i)},1000)
			console.log(i);
		}
		$(".lump").stop().animate({left:$(".bannerXS li").eq(i).position().left},1000);
		return false;
	})

	$(".bannerXS li").click(function(){
		i = $(this).index();
		$(".bannerD ul").stop().animate({marginLeft:-bliW*$(this).index()},1000);
		$(".lump").stop().animate({left:$(".bannerXS li").eq($(this).index()).position().left},1000);
	})

	//精彩视频
	$(".videosImg li:not(:first)").hide();
	$(".videosList li").click(function(){
		$(".videosList li").removeClass("active");
		$(this).addClass("active");
		$(".videosImg li").filter(":visible").fadeOut(500).siblings().parent().children().eq($(this).index()).fadeIn(1000);
		return false;
	})

	//热门车型滚动
	var liW = $(".modelC li").width(),
		liS = $(".modelC li").length;
	$(".model ul").width(liW*liS);
	$(".model .btn").click(function(){
		if($(this).hasClass("next")){
			$(".model ul").stop().animate({marginLeft:-liW},1000,function(){
				$(".model ul").append($(".model ul li:first")).css({marginLeft:0})
			});
		}else{
			$(".model ul").prepend($(".model ul li:last")).css({marginLeft:-liW})
			$(".model ul").stop().animate({marginLeft:0},1000)
		}
		return false;
	});

	var stop = setInterval(function(){
		$(".next").trigger("click");
	},5000)
	$(".model ul li").hover(function(){
		clearInterval(stop);
	},function(){
		stop = setInterval(function(){
			$(".prve").trigger("click");
		},5000)
	})

	//置顶
	$(".airWin .top").click(function(){
		$("html,body").animate({scrollTop:0},600);
		return false;
	})
})