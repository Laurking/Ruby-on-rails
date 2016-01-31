// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
$(function(){
	var image="image1.jpg image2.jpg image5.jpg".split(" ")
	var count=0;
	var counter=5000;
	$("#menu_ic").click(function(){
		$("#navigation").slideToggle();
	})
	$(window).resize(function(){
		var windwidth=$(window).width();
		if(windwidth>=768){
			$("#navigation").show();
		}
	})

	setInterval(function(){
		count+=1;
		if (count>=image.length) {count=0}
		$("#carousel").css("background-image","url("+image[count]+")");
		$($(".list-item li")[count]).addClass("active-list-item");
		$($(".list-item li")[count]).siblings().removeClass("active-list-item")
	},counter)


})