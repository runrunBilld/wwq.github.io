$(document).ready(function() {
	$("#1st").hover(
		function(){
		$(this).css("background-image","url(img/app_sel.png)");//移入
		},function(){
		$(this).css("background-image","url(img/app.png)");//移出
	})

	$("#2nd").hover(
		function(){
		$(this).css("background-image","url(img/pc_sel.png)");//移入
		},function(){
		$(this).css("background-image","url(img/pc.png)");//移出
	})

	$("#3rd").hover(
		function(){
		$(this).css("background-image","url(img/text_sel.png)");//移入
		},function(){
		$(this).css("background-image","url(img/text.png)");//移出
	})

	$("#Home").animate({
			width:'988px',
			height:'780px'
		},1000,'swing'
	);
// 任何需要执行的js特效 
//$("table tr:nth-child(even)").addClass("even"); 
})