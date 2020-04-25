$(document).ready(function() {

	$("#1st").hover(
		function(){
		$(this).css("background-image","url(img/foodtime_sel.png)");//移入
		},function(){
		$(this).css("background-image","url(img/foodtime.png)");//移出
	})

	$("#3rd").hover(
		function(){
		$(this).css("background-image","url(img/act_sel.png)");//移入
		},function(){
		$(this).css("background-image","url(img/act.png)");//移出
	})

	$("#meng").animate({
			width:'988px',
			height:'22800px'
		},1000,'swing'
	);
// 任何需要执行的js特效 
//$("table tr:nth-child(even)").addClass("even"); 
})