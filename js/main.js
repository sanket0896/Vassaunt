// $('document').load(function(){
// 	$('#pre-load-wrap').removeClass("visible").addClass("hidden");
// 	$('#content-wrap').removeClass("hidden").addClass("visible");
// });


$('document').ready(function(){

	//Initialise Controller
	var controller = new ScrollMagic.Controller();
	var winHeight= $(window).height();
		console.log(winHeight);
	

	$(window).on("resize",function(){
		winHeight = $(window).height();
		console.log(winHeight);
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
	.to('#svg-wrap',2,{
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
	.from('#team-wrap', 5, {
		opacity:0,
	})
	.to('#team-wrap',5,{
		opacity: 1
	})
	.to('#team-wrap', 5, {
		opacity:0
	},"+=2");


	var gateZoomFade = new ScrollMagic.Scene({
		triggerElement: '#svg-wrap',
		triggerHook: 0,
		offset: 10,
		duration:"200%"
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
	.setPin("#svg-wrap")
	.on("end",Start)
	.addTo(controller)
	.addIndicators();

	var eventFadeIn = new ScrollMagic.Scene({
		triggerElement: '#event',
		triggerHook: 0,
		duration: "100%"
	})
	.setTween(tl2)
	.addTo(controller)
	.addIndicators();

	var eventPin = new ScrollMagic.Scene({
		triggerElement: '#event',
		triggerHook:0,
		offset: 0,
		duration: "100%"
	})
	.setPin("#event")
	.on('start', Start1)
	.on('end',Start)
	.addTo(controller)
	.addIndicators();

	var abtFadeIn = new ScrollMagic.Scene({
		triggerElement: '#abt-wrap',
		triggerHook: 0,
		offset: 0,
		duration: "100%"
	})
	.setTween(tl3)
	.addTo(controller)
	.addIndicators();

	var abtPin = new ScrollMagic.Scene({
		triggerElement: '#abt-wrap',
		triggerHook: 0,
		offset: 0,
		duration: "200%"
	})
	.setPin('#abt-wrap')
	.on('start', Start1)
	.on('end',Start)
	.addTo(controller)
	.addIndicators();

	var galleryFadeIn = new ScrollMagic.Scene({
		triggerElement: '#gallery-wrap',
		triggerHook: 0,
		offset: 0,
		duration: "100%"
	})
	.setTween(tl4)
	.addTo(controller)
	.addIndicators();

	var galleryPin = new ScrollMagic.Scene({
		triggerElement: '#gallery-wrap',
		triggerHook: 0,
		offset: 0,
		duration: "200%"
	})
	.setPin('#gallery-wrap')
	.on('start', Start1)
	.on('end',Start)
	.addTo(controller)
	.addIndicators();

	var teamFadeIn = new ScrollMagic.Scene({
		triggerElement: '#team-wrap',
		triggerHook: 0,
		offset: 0,
		duration: "100%"
	})
	.setTween(tl5)
	.addTo(controller)
	.addIndicators();

	var teamPin = new ScrollMagic.Scene({
		triggerElement: '#team-wrap',
		triggerHook: 0,
		offset: 0,
		duration: "200%"
	})
	.setPin('#team-wrap')
	.on('start', Start1)
	.on('end',Start)
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
    
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
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

	$('div.event.panel').click(function() {
		if(!isFull){
			t=false;
			thisPanel=$(this);
			thisPanel.addClass("full z-index");
			$('body').addClass("hide-overflow");
			thisPanel.one("transitionend", function() {
				$('div.event.panel.full div.event-content-wrapper.hidden')
					.addClass("visible");
				});

			$(selectedDescription).removeClass("visible");
			$(thisItem).removeClass("selected");
			thisItem='div.event.full div.event-list li.item1';
			selectedDescription='div.event.full div.event-description div.item1';
			$(thisItem).addClass("selected");
			$(selectedDescription).addClass("visible");

			isFull=true;
		} 
		$('div.event.panel.full div.close-button').on("click",function() {
			thisPanel.removeClass("full");
			$('body').removeClass("hide-overflow");
			$('div.event-content-wrapper.hidden')
			.removeClass("visible");
			thisPanel.one("transitionend", function() {
				
				thisPanel.removeClass("z-index");
				isFull=false;
			});
			
		});


		$('div.event.full div.event-list li').on("click",function() {
				$(selectedDescription).removeClass("visible");
				$(thisItem).removeClass("selected");
				thisItem=$(this);
				selectedItem=thisItem.attr("class");
				console.log("clicked on "+selectedItem);
				thisItem.addClass("selected");
				selectedDescription='div.event.full div.event-description div.'+selectedItem;
				$(selectedDescription).addClass("visible");
			});
	});

	function Start(){
		var eventTop = ($(window).scrollTop()+winHeight-100);
		var direction = controller.info("scrollDirection");
		if(direction=="FORWARD"){
		$(window).scrollTop(eventTop)}
	}
	function Start1(){
		var eventTop = ($(window).scrollTop()-winHeight+100);
		var direction = controller.info("scrollDirection");
		if(direction=="REVERSE"){
		$(window).scrollTop(eventTop);}
	}
});
