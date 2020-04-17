$(document).ready(function() {

	$("#1st").hover(
		function(){
		$(this).css("background-image","url(img/icon_sel.png)");//移入
		},function(){
		$(this).css("background-image","url(img/icon.png)");//移出
	})

	$("#2nd").hover(
		function(){
		$(this).css("background-image","url(img/H5_sel.png)");//移入
		},function(){
		$(this).css("background-image","url(img/H5.png)");//移出
	})

	$("#mark").animate({
			width:'988px',
			height:'14520px'
		},1000,'swing'
	);
// 任何需要执行的js特效 
//$("table tr:nth-child(even)").addClass("even"); 
})