// $('document').load(function(){
// 	$('#pre-load-wrap').removeClass("visible").addClass("hidden");
// 	$('#content-wrap').removeClass("hidden").addClass("visible");
// });


$('document').ready(function(){

	//Initialise Controller
	var controller = new ScrollMagic.Controller();
	var winHeight= $(window).height();
		console.log(winHeight);
	var winWidth = $(window).width();
		console.log(winWidth);

	var hasEventPageArrived = false;
	console.log("declaring:"+hasEventPageArrived);

	var hasTeamPageArrived = false;

	$(window).on("resize",function(){
		winHeight = $(window).height();
		console.log(winHeight);
	    winWidth = $(window).width();
		console.log(winWidth);
	});


	// var tween = TweenLite.to('#svg', 10, {
	// 	scale:2.7,
	// 	marginTop: "-40%",
	// 	onStart: Start
	// });
	var tl1= new TimelineLite()
	.to('#svg', 8, {
		scale:2.7,
		marginTop: "-40%",
		useFrames:true
	})
	.to('#svg-wrap',5,{
		opacity:0
		
	},"-=6");

	var tl2 = new TimelineLite()
	.from('#event', 5, {
		opacity:0
	})	
	.to('#event', 5, {
		opacity:1
	})
	.to('#event', 5, {
		opacity:0
	},"+=2");

	var tl3 = new TimelineLite()
	.from('#abt-wrap', 5, {
		opacity:0,
	})
	.to('#abt-wrap',5,{
		opacity: 1
	})
	.to('#abt-wrap', 5, {
		opacity:0
	},"+=2");

	var tl4 = new TimelineLite()
	.from('#gallery-wrap', 5, {
		opacity:0,
	})
	.to('#gallery-wrap',5,{
		opacity: 1
	})
	.to('#gallery-wrap', 5, {
		opacity:0
	},"+=2");

	var tl5 = new TimelineLite()
	.from('#team-wrap', 1, {
		opacity:0,
	});
	// .to('#team-wrap',5,{
	// 	opacity: 1
	// });
	// .to('#team-wrap', 5, {
	// 	opacity:0
	// },"+=2");


	var gateZoomFade = new ScrollMagic.Scene({
		triggerElement: '#svg-wrap',
		triggerHook: 0,
		offset: 10,
		duration:"100%"
	})
	.setTween(tl1)
	.addTo(controller)
	.addIndicators();

	var gatePin = new ScrollMagic.Scene({
		triggerElement: '#svg-wrap',
		triggerHook:0,
		offset: 0,
		duration: "100%"
	})
	.setPin("#svg-wrap",{pushFollowers:false})
	.on("end",Start)
	.addTo(controller)
	.addIndicators();

	var eventFadeIn = new ScrollMagic.Scene({
		triggerElement: '#event',
		triggerHook: 0,
		offset:50,
		duration: "100%"
	})
	.setTween(tl2)
	.on('start',Start2)
	.on('end',Start3)
	.addTo(controller)
	.addIndicators();

	var eventPin = new ScrollMagic.Scene({
		triggerElement: '#event',
		triggerHook:0,
		offset: 0,
		duration: "100%"
	})
	.setPin("#event",{pushFollowers:false})
	.on('start', Start1)
	.on('end',Start)
	.addTo(controller)
	.addIndicators();

	var abtFadeIn = new ScrollMagic.Scene({
		triggerElement: '#abt-wrap',
		triggerHook: 0,
		offset: 50,
		duration: "100%"
	})
	.setTween(tl3)
	.addTo(controller)
	.addIndicators();

	var abtPin = new ScrollMagic.Scene({
		triggerElement: '#abt-wrap',
		triggerHook: 0,
		offset: 0,
		duration: "100%"
	})
	.setPin('#abt-wrap',{pushFollowers:false})
	.on('start', Start1)
	.on('end',Start)
	.addTo(controller)
	.addIndicators();

	// var galleryFadeIn = new ScrollMagic.Scene({
	// 	triggerElement: '#gallery-wrap',
	// 	triggerHook: 0,
	// 	offset: 50,
	// 	duration: "100%"
	// })
	// .setTween(tl4)
	// .addTo(controller)
	// .addIndicators();

	// var galleryPin = new ScrollMagic.Scene({
	// 	triggerElement: '#gallery-wrap',
	// 	triggerHook: 0,
	// 	offset: 0,
	// 	duration: "100%"
	// })
	// .setPin('#gallery-wrap',{pushFollowers:false})
	// .on('start', Start1)
	// .on('end',Start)
	// .addTo(controller)
	// .addIndicators();

	var teamFadeIn = new ScrollMagic.Scene({
		triggerElement: '#team-wrap',
		triggerHook: 0,
		offset: 0,
		duration: "100%"
	})
	.setTween(tl5)
	.on('start',Start4)
	.on('end',Start5)
	.addTo(controller)
	.addIndicators();

	var teamPin = new ScrollMagic.Scene({
		triggerElement: '#team-wrap',
		triggerHook: 0,
		offset: 0,
		duration: "100%"
	})
	.setPin('#team-wrap',{pushFollowers:false})
	.addTo(controller)
	.addIndicators();

	/*************** About Page ***************/
	var countDownDate = new Date("Feb 17, 2017 00:00:00").getTime();


var countdownfunction = setInterval(function() {

    var now = new Date().getTime();
    
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    // + minutes + "m " + seconds + "s ";
    
    // countdown over
    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("demo").innerHTML = "Spring has arrived!";
	document.getElementById("demo1").innerHTML = "WATCH OUT";
    }
}, 1000);

	/*************** Event Page ***************/

	var isFull,thisPanel,thisItem,selectedItem,selectedDescription;

	isFull=false;
	thisItem='div.event.full div.event-list li.item1';
	selectedDescription='div.event.full div.event-description div.item1';

	$(window).on('scroll',function(){
		if(!hasEventPageArrived){
		$('div.event.panel')
			.removeClass("cursor-pointer");
		$('div.event-wrapper')
			.removeClass("z-index");	
			console.log("no");
	}
	else{
		$('div.event.panel')
			.addClass("cursor-pointer");
		$('div.event-wrapper')
			.addClass("z-index");	
			console.log("yes");
	}

	if (!hasTeamPageArrived) {
		$('div.team-wrap')
			.removeClass("z-index");
			console.log(" team no");
	}
	else{
		$('div.team-wrap')
			.addClass("z-index");
			console.log("team added yes");
	}
	});
	

	$('div.event.panel').click(function() {
		console.log("in click");
		if (hasEventPageArrived) {
			
			if(!isFull){
				t=false;
				thisPanel=$(this);
				thisPanel.addClass("full z-index");
				$('body').addClass("hide-overflow");
				thisPanel.one("transitionend", function() {
					$('div.event.panel.full div.event-content-wrapper.hidden')
						.addClass("visible");

					$('div.event.panel.full')
						.removeClass("cursor-pointer")	

					if(winWidth<767)
					{
						$('div.event.panel.full div.event-content-wrapper div.event-list')
							.addClass("mobile-screen");
						$('div.event.panel.full div.event-content-wrapper div.event-description')
							.addClass("mobile-screen hidden");	
					}
					else{
						$('div.event.panel.full div.event-content-wrapper div.event-list')
							.removeClass("mobile-screen");
					}
					});

				$(selectedDescription).removeClass("visible");
				$(thisItem).removeClass("selected");
				thisItem='div.event.full div.event-list li.item1';
				selectedDescription='div.event.full div.event-description div.item1';
				
				
					
					
					if(winWidth>767){
						$(thisItem).addClass("selected");
						$(selectedDescription).addClass("visible");
					}

				isFull=true;
			} 
			$('div.event.panel.full div.close-button').on("click",function() {
				thisPanel.removeClass("full");
				$('body').removeClass("hide-overflow");
				$('div.event-list')
					.removeClass("mobile-screen hidden");
				$('div.event-description')
					.removeClass("mobile-screen hidden");
				$('div.event.panel div.back-button')
					.addClass("hidden");	
				$('div.event-content-wrapper.hidden')
					.removeClass("visible");
				thisPanel.one("transitionend", function() {
					
					thisPanel.removeClass("z-index",function(){
							console.log("unhide");
						});
					$('div.event.panel')
						.addClass("cursor-pointer");
					isFull=false;
				});
				
			});

			$('div.event.panel.full div.back-button').on("click",function() {
				
				$('div.event.panel.full div.event-content-wrapper div.event-list')
					.removeClass("hidden");
				$('div.event.panel.full div.event-content-wrapper div.event-description')
					.addClass("hidden");
				$(this).addClass("hidden");	
				$(selectedDescription)
					.removeClass("visible");
				$(thisItem)
					.removeClass("selected");
				
			});


			$('div.event.full div.event-list li').on("click",function() {
					$(selectedDescription)
						.removeClass("visible");
					$(thisItem)
						.removeClass("selected");
					thisItem=$(this);
					selectedItem=thisItem.attr("class");
					thisItem.addClass("selected");
					selectedDescription='div.event.full div.event-description div.'+selectedItem;
					
					if (winWidth>767) {
						$(selectedDescription)
							.addClass("visible");
					}
					else{
						$('div.event.panel.full div.back-button')
							.removeClass("hidden");
						$('div.event.panel.full div.event-content-wrapper div.event-list')
							.addClass("hidden");
						$('div.event.panel.full div.event-content-wrapper div.event-description')
							.removeClass("hidden");	
						$(selectedDescription)
							.addClass("visible");	
					}
				});
	}});

	function Start(){
		// var eventTop = ($(window).scrollTop()+winHeight-100);
		// var direction = controller.info("scrollDirection");
		// if(direction=="FORWARD"){
		// $(window).scrollTop(eventTop)}
	}
	function Start2(){
		
		var direction = controller.info("scrollDirection");
		if(direction=="FORWARD"){
			hasEventPageArrived = true;
		console.log("in function"+hasEventPageArrived);
		}
		else if(direction=="REVERSE"){
			hasEventPageArrived = false;

		console.log("back in function"+hasEventPageArrived);
		}
	}

	function Start3(){
		var direction = controller.info("scrollDirection");
		if(direction=="REVERSE"){
			hasEventPageArrived = true;
		console.log("in function"+hasEventPageArrived);
		}
		else if(direction=="FORWARD"){
			hasEventPageArrived = false;

		console.log("back in function"+hasEventPageArrived);
		}
	}

	function Start4(){
		
		var direction = controller.info("scrollDirection");
		if(direction=="FORWARD"){
			hasTeamPageArrived = true;
		console.log("team arrived"+hasTeamPageArrived);
		}
		else if(direction=="REVERSE"){
			hasTeamPageArrived = false;

		console.log("team arrived"+hasTeamPageArrived);
		}
	}

	function Start5(){
		// var direction = controller.info("scrollDirection");
		// if(direction=="REVERSE"){
		// 	hasTeamPageArrived = true;
		// console.log("team arrived"+hasTeamPageArrived);
		// }
		// else if(direction=="FORWARD"){
		// 	hasTeamPageArrived = false;

		// console.log("team arrived"+hasTeamPageArrived);
		// }
	}

	function Start1(){}

	// function fadeInLast(){
	// // 	$('.team-wrap').css("overflow","auto");
	// // 	var direction = controller.info("scrollDirection");
	// // 	if(direction=="FORWARD"){
	// // 	var tl6 = new TimelineLite()
	// // .to('#team-wrap',5,{
	// // 	opacity:1
	// // });}
	// // else if(direction=="REVERSE"){
	// // 	$('.team-wrap').css("overflow","hidden");
	// // 	var tl6 = new TimelineLite()
	// // .to('#team-wrap',0.1,{
	// // 	opacity:0
	// // });
	// // }
	// }

	// function fadeOutLast(){
	// 	$('.team-wrap').css("overflow","hidden");
	// 	var tl6 = new TimelineLite()
	// .to('#team-wrap',5,{
	// 	opacity:0
	// });
	// }
});
