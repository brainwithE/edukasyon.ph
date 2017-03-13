$(function(){
	  $('#tvs-container').mixItUp();
	});

$( ".tvs-cards" ).each(function() {
  var province = $(this).data("target");
  var url = "panels/"+province.substring(1)+".html";
  $(".tvs-panel").append($("<div class='panel-wrapper' id='"+province.substring(1)+"'>").load(url));
});

$('.tvs-cards').on('click', function(event){
	event.preventDefault();
   var province = $(this).data("target");
	$('.tvs-panel').addClass('is-visible');
	$(province).addClass('active');
	$("body").addClass("ovfh");


});

$('.tvs-panel').on('click', function(event){
	if( $(event.target).is('.tvs-panel') || $(event.target).is('.tvs-panel-close') ) { 
		$('.tvs-panel').removeClass('is-visible');
		$("body").removeClass("ovfh");
		$(".panel-wrapper").removeClass('active');
		event.preventDefault();
	}
});