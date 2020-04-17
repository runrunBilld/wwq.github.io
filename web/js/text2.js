$(document).ready(function() {

	$("#1st").hover(
		function(){
		$(this).css("background-image","url(img/icon_sel.png)");//移入
		},function(){
		$(this).css("background-image","url(img/icon.png)");//移出
	})

	$("#3rd").hover(
		function(){
		$(this).css("background-image","url(img/mark_sel.png)");//移入
		},function(){
		$(this).css("background-image","url(img/mark.png)");//移出
	})

	$("#H5").animate({
			width:'988px',
			height:'950px'
		},1000,'swing'
	);
// 任何需要执行的js特效 
//$("table tr:nth-child(even)").addClass("even"); 
})