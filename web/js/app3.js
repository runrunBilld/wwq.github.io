$(document).ready(function() {

	$("#2nd").hover(
		function(){
		$(this).css("background-image","url(img/meng_sel.png)");//移入
		},function(){
		$(this).css("background-image","url(img/meng.png)");//移出
	})

	$("#1st").hover(
		function(){
		$(this).css("background-image","url(img/foodtime_sel.png)");//移入
		},function(){
		$(this).css("background-image","url(img/foodtime.png)");//移出
	})

	$("#act").animate({
			width:'988px',
			height:'7300px'
		},1000,'swing'
	);
// 任何需要执行的js特效 
//$("table tr:nth-child(even)").addClass("even"); 
})