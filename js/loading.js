var elements = document.getElementsByTagName("*"),
	imgse = [],
	i = 0,
	num = 0;	

function getStyle (ele, attr) {
	if (ele.currentStyle) {			
		return ele.currentStyle[attr];						
	} else {
		return window.getComputedStyle(ele, null)[attr];
	}
}

for (; i<elements.length; i++) {
	if(getStyle(elements[i], "backgroundImage") != "none"){
		imgse.push(getStyle(elements[i], "backgroundImage"));
	}
}

imgse.forEach(function(item, index){
	var oImg = new Image();
	oImg.onload = function(){
		oImg.onload = null;
		num++;
		$(".loading-pic i").html(parseInt(num/imgse.length*100) + '%');
		if(num >= index){
			$(".loading").fadeOut();
		}
	}
	if(IEVersion() !== -1){
		oImg.src = imgse[index].slice(4, -1);
	} else {
		oImg.src = imgse[index].slice(5, -2);
	}	
})

function IEVersion() {
	var userAgent = navigator.userAgent;	// 取得浏览器的userAgent字符串  
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;	// 判断是否IE<11浏览器  
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE;	// 判断是否IE的Edge浏览器  
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if(isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if(fIEVersion == 7) {
            return 7;
        } else if(fIEVersion == 8) {
            return 8;
        } else if(fIEVersion == 9) {
            return 9;
        } else if(fIEVersion == 10) {
            return 10;
        } else {
            return 6;	// IE版本<=7
        }   
    } else if(isEdge) {
        return 'edge';	// edge
    } else if(isIE11) {
        return 11;	// IE11  
    }else{
        return -1;	// 不是ie浏览器
    }
}