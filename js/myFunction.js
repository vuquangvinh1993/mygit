// JavaScript Document
$(document).ready(function() {
    
	$('.thumbnail').hover(
		function(){
			$(this).find('.showbutton').fadeIn(250);
		},
		function(){
			$(this).find('.showbutton').fadeOut(250);
		}
		);
});
