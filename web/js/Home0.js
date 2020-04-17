$(document).ready(function() { 
	$("a.my_image").hover(
		function(){
		$(this).css("background-image","url(web/img/my_imageshow.gif)");//移入
		},function(){
		$(this).css("background-image","url(web/img/my_image.png)");//移出
	})
// 任何需要执行的js特效 
//$("table tr:nth-child(even)").addClass("even"); 
}); 