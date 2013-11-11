
jQuery(document).ready(function($) {


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