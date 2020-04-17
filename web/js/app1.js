$(document).ready(function() {

	$("#2nd").hover(
		function(){
		$(this).css("background-image","url(img/meng_sel.png)");//移入
		},function(){
		$(this).css("background-image","url(img/meng.png)");//移出
	})

	$("#3rd").hover(
		function(){
		$(this).css("background-image","url(img/act_sel.png)");//移入
		},function(){
		$(this).css("background-image","url(img/act.png)");//移出
	})

	$("#foodtime").animate({
			width:'988px',
			height:'12560px'
		},1000,'swing'
	);
// 任何需要执行的js特效 
//$("table tr:nth-child(even)").addClass("even"); 
})