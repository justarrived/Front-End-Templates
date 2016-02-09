$(document).ready(function(){
	jQuery('.slider').lbSlider({
    leftBtn: '.sa-left',
    rightBtn: '.sa-right',
    visible: 3,
    autoPlay: true,
    autoPlayDelay: 2
});		

	$(function(){
		$('#slider_2').movingBoxes({
			startPanel   : 2,      // start with this panel
			wrap         : false,  // if true, the panel will infinitely loop
			buildNav     : true,   // if true, navigation links will be added
			navFormatter : function(){ return "&#9679;"; } // function which returns the navigation text for each panel
		});

	});
});