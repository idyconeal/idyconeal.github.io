$(document).ready(function(){
	//jQuery Function #1
	$(".welcome").fadeIn(3000);
	//jQuery Function #2
	$(".search img").hover(function(){
		//JQuery Function #3
		$(this).hide();
		$(".shadow").show();
	});
	$(".fashion-advisor").hover(function(){
		$(".fashion-shadow").show();
	});
	//jQUery Function #4
	$(".picture").click(function(){
		//jQUery Function #5
		$(".hello").css("text-shadow", "2px 2px rgb(255, 153, 204)");
		
	});
	$(".name a").click(function(){
		$(".welcome").fadeOut(800);
		//jQuery Function #6
		$(".love").fadeIn(3000);
	})
	
	
});