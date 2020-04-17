$(document).ready(function() {
	$(".top").hover(
		function(){
		$(this).css("opacity","1");//移入
		},function(){
		$(this).css("opacity","0.3");//移出
	})

	$(".top").animate({
			bottom:'50px',
			opacity:'0.4',
		},1000,'swing'
	);
// 任何需要执行的js特效 
//$("table tr:nth-child(even)").addClass("even"); 
})