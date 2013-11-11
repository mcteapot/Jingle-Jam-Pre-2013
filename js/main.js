
jQuery(document).ready(function($) {
    // $ inside here refers to jQuery

    // set links
    //$('#event-location.address').click(function() {
 		//window.open('http://maps.google.com/?q=8714 W Washington Blvd Culver City, CA 90232');
 		//console.log("OPEN");
  	//});
    
    console.log("Document READY")
    var tempObject = $(".graphic")[0];
    TweenMax.from(tempObject, .5, {scale:0.2, opacity:0.3});

    var deerBlack = $(".event-deer-balck")[0];
    TweenMax.to(deerBlack, 2, {top:"-=15px", repeat:-1, yoyo:true, ease: Linear.easeInOut});
    var deerRed = $(".event-deer-red")[0];
    TweenMax.to(deerRed, 2.5, {top:"-=15px", repeat:-1, yoyo:true, ease: Linear.easeInOut});

   //TweenMax.to(badgeObject, -1, {rotation:"360", ease:Linear.easeNone, repeat:10});
    prepopulateParticles();

    //('.ticket-link').click(function(){
    //	window.open("http://www.gofundme.com/ailingalex", '_blank')
    //})

	function emitNewParticle(){

		emitParticle(parseInt($('body').height()) + 10, getRandomX );
	}

   	function prepopulateParticles(){
   		for(var i = 0; i<10; i++){
			var top = Math.floor(Math.random()*parseInt($('body').height()) );
   			emitParticle(top, getRandomX);
   		}
    }

    function getRandomX(){
		return Math.floor(Math.random()*parseInt($('body').width()) - 20);
    }
    
    function emitParticle(top, left){
      var ptc;
    //var ptc = $("<div class='particle'></div>").appendTo('#particle-container');
    var randNum = Math.floor((Math.random()*4)+1);
    if(randNum === 2) {
      ptc = $("<div class='particle-red'></div>").appendTo('#particle-container');
    } else {
      ptc = $("<div class='particle-green'></div>").appendTo('#particle-container');
    }
		var opacity = Math.random();
    	//var size = Math.floor( 1 + 8*opacity);
    var size = 81;
		// $(ptc).css({position: "absolute", width: "4px", height: "4px",top:top, left: left});
		var targetTop = top + 800;
		var distanceRatio = top / parseInt($('body').height());
		var floatDuration = (100000 - 80000*(opacity)) * distanceRatio;
		$(ptc).css({top:top, left: left, opacity: opacity, width: size, height: size}).animate({top: -30}, floatDuration, "linear", function(){ 
			$(this).remove(); 
			emitNewParticle();
		});
    }

});