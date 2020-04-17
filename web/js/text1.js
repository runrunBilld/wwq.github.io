$(document).ready(function() {

	$("#2nd").hover(
		function(){
		$(this).css("background-image","url(img/H5_sel.png)");//移入
		},function(){
		$(this).css("background-image","url(img/H5.png)");//移出
	})

	$("#3rd").hover(
		function(){
		$(this).css("background-image","url(img/mark_sel.png)");//移入
		},function(){
		$(this).css("background-image","url(img/mark.png)");//移出
	})

	$("#icon").animate({
			width:'988px',
			height:'2050px'
		},1000,'swing'
	);
// 任何需要执行的js特效 
//$("table tr:nth-child(even)").addClass("even"); 
})