$(function(){
	
	/* Variable */
	//var moveH = $(window).width();
	//var moveV = $(window).height();
	var moveH = 320;
	var moveV = 568;
	
	// vertical wrapper
	var $frame = $("#frame");
	// horizontal wrapper
	var $loginOpt = $("#login .options");
	var $modeOpt = $("#mode .options");
	var $timeOpt = $("#time .options");
	var $typeOpt = $("#type .options");
	var $communicationOpt = $("#communication .options");
	var $finishOpt = $("#finish .options");
	// Section Selector
	var $welcome = $("#welcome");
	var $tutorial = $("#tutorial");
	var $login = $("#login");
	var $mode = $("#mode");
	var $mode = $("#mode");
	var $time = $("#time");
	var $place = $("#place");
	var $type = $("#type");
	var $communication = $("#communication");
	var $confirm = $("#confirm");
	var $matching = $("#matching");
	var $success = $("#success");
	var $pairing = $("#pairing");
	var $iceBreaker = $("#iceBreaker");
	var $finish = $("#finish");
	
	var $header = $("#header");
	
	var $lightbox = $("#lightbox");
	
	var uileft = $(".UILeft")
	var uiright = $(".UIRight")
	var uiup = $(".UIUp")
	var uidown = $(".UIDown")
	var uis = new Array(uileft,uiright,uiup,uidown);
	
	// Definition
	var interval = 0.28;
	var angleDiff = 60;//range:1-90
	var rotation = 0;
	/*
	//swipe up
	if(e.angle > ((rotation+90)-angleDiff/2) && e.angle < ((rotation+90)+angleDiff/2) ){}
	//swipe right
	if(e.angle < (rotation+angleDiff/2) || e.angle > (360+rotation-angleDiff/2)){}
	//swipe down
	if(e.angle > ((rotation+270)-angleDiff/2) && e.angle < ((rotation+270)+angleDiff/2) ){}
	//swipe left
	if(e.angle > ((rotation+180)-angleDiff/2) && e.angle < ((rotation+180)+angleDiff/2) ){}
	*/
	
	/* Init */
	$(document).on('pointermove', function(event) {event.preventDefault()});
	ui(false,false,true,false);
	$lightbox.hide();
	$header.hide();
	
	/* Triggers */
	$welcome.on('swipeend',function(e){
		e.preventDefault();
		//swipe up
		if(e.angle > ((rotation+90)-angleDiff/2) && e.angle < ((rotation+90)+angleDiff/2) ){
			fade(e.target);
			vertical($frame,-moveV);
		}
	});
	$welcome.on('tap',function(e){
		e.preventDefault();
		fade(e.target);
		vertical($frame,-moveV);
	});
	
	$tutorial.on('swipeend',function(e){
		e.preventDefault();
		//swipe up
		if(e.angle > ((rotation+90)-angleDiff/2) && e.angle < ((rotation+90)+angleDiff/2) ){
			fade(e.target);
			vertical($frame,-moveV*2);
			ui(true,true,true,false);
		}
	});
	
	$login.on('swipeend',function(e){
		e.preventDefault();
		//swipe up
		if(e.angle > ((rotation+90)-angleDiff/2) && e.angle < ((rotation+90)+angleDiff/2) ){
			fade(e.target);
			vertical($frame,-moveV*3);
			ui(false,true,true,false);
			$header.fadeIn(500);
		}
		//swipe down
		if(e.angle > ((rotation+270)-angleDiff/2) && e.angle < ((rotation+270)+angleDiff/2) ){
			fade(e.target);
			vertical($frame,-moveV);
			ui(false,false,true,false);	
		}
	});
	$loginOpt.on('swipeend',function(e){
		e.preventDefault();
		//swipe right
		if(e.angle < (rotation+angleDiff/2) || e.angle > (360+rotation-angleDiff/2)){
			fade(e.target);
			horizontal($loginOpt,0);
			ui(true,true,true,false);
		}
		//swipe left
		if(e.angle > ((rotation+180)-angleDiff/2) && e.angle < ((rotation+180)+angleDiff/2) ){
			fade(e.target);
			horizontal($loginOpt,-moveH);
			ui(true,false,true,true);
		}
	});
	
	$mode.on('swipeend',function(e){
		e.preventDefault();
		//swipe up
		if(e.angle > ((rotation+90)-angleDiff/2) && e.angle < ((rotation+90)+angleDiff/2) ){
			fade(e.target);
			vertical($frame,-moveV*4);
			ui(true,true,true,false,"timeOptPage");
		}
	});
	var modeOptPage = 1;
	$modeOpt.on('swipeend',function(e){
		e.preventDefault();
		//swipe right
		if(e.angle < (rotation+angleDiff/2) || e.angle > (360+rotation-angleDiff/2)){
			fade(e.target);
			horizontal($modeOpt,0);
			ui(false,true,true,false);
			modeOptPage = 1;
		}
		//swipe left
		if(e.angle > ((rotation+180)-angleDiff/2) && e.angle < ((rotation+180)+angleDiff/2) ){
			fade(e.target);
			horizontal($modeOpt,-moveH);
			ui(false,false,true,true);
			modeOptPage = 2;
		}
	});
	
	$time.on('swipeend',function(e){
		e.preventDefault();
		//swipe up
		if(e.angle > ((rotation+90)-angleDiff/2) && e.angle < ((rotation+90)+angleDiff/2) ){
			fade(e.target);
			vertical($frame,-moveV*5);
			ui(true,false,true,false);
		}
		//swipe down
		if(e.angle > ((rotation+270)-angleDiff/2) && e.angle < ((rotation+270)+angleDiff/2) ){
			fade(e.target);
			vertical($frame,-moveV*3);
			ui(false,true,true,false,"modeOptPage");	
		}
	});
	var timeOptPage = 1;
	$timeOpt.on('swipeend',function(e){
		e.preventDefault();
		//swipe right
		if(e.angle < (rotation+angleDiff/2) || e.angle > (360+rotation-angleDiff/2)){
			fade(e.target);
			if(timeOptPage>1){
				horizontal($timeOpt,-moveH*(timeOptPage-2));
				if(timeOptPage==2){	
					ui(true,true,true,false);
				}else{
					ui(true,true,true,true);
				}
				timeOptPage--;
			}
		}
		//swipe left
		if(e.angle > ((rotation+180)-angleDiff/2) && e.angle < ((rotation+180)+angleDiff/2) ){
			fade(e.target);
			if(timeOptPage<5){
				horizontal($timeOpt,-moveH*(timeOptPage));
				if(timeOptPage==4){				
					ui(true,false,true,true);
				}else{
					ui(true,true,true,true);
				}
				timeOptPage++;
			}
		}
	});
	
	$place.on('swipeend',function(e){
		e.preventDefault();
		//swipe up
		if(e.angle > ((rotation+90)-angleDiff/2) && e.angle < ((rotation+90)+angleDiff/2) ){
			fade(e.target);
			vertical($frame,-moveV*6);	
			ui(true,true,true,false,"typeOptPage");
		}
		//swipe down
		if(e.angle > ((rotation+270)-angleDiff/2) && e.angle < ((rotation+270)+angleDiff/2) ){
			fade(e.target);
			vertical($frame,-moveV*4);	
			ui(true,true,true,false,"timeOptPage");	
		}
	});
	
	$type.on('swipeend',function(e){
		e.preventDefault();
		//swipe up
		if(e.angle > ((rotation+90)-angleDiff/2) && e.angle < ((rotation+90)+angleDiff/2) ){
			fade(e.target);
			vertical($frame,-moveV*7);
			ui(true,true,true,false,"communicationOptPage");
		}
		//swipe down
		if(e.angle > ((rotation+270)-angleDiff/2) && e.angle < ((rotation+270)+angleDiff/2) ){
			fade(e.target);
			vertical($frame,-moveV*5);
			ui(true,false,true,false);	
		}
	});
	var	typeOptPage = 1;
	$typeOpt.on('swipeend',function(e){
		e.preventDefault();
		//swipe right
		if(e.angle < (rotation+angleDiff/2) || e.angle > (360+rotation-angleDiff/2)){
			fade(e.target);
			horizontal($typeOpt,0);
			ui(true,true,true,false);
			typeOptPage = 1;
		}
		//swipe left
		if(e.angle > ((rotation+180)-angleDiff/2) && e.angle < ((rotation+180)+angleDiff/2) ){
			fade(e.target);
			horizontal($typeOpt,-moveH);
			ui(true,false,true,true);
			typeOptPage = 2;
		}
	});
	
	$communication.on('swipeend',function(e){
		e.preventDefault();
		//swipe up
		if(e.angle > ((rotation+90)-angleDiff/2) && e.angle < ((rotation+90)+angleDiff/2) ){
			fade(e.target);
			vertical($frame,-moveV*8);	
			ui(true,false,true,false);	
		}
		//swipe down
		if(e.angle > ((rotation+270)-angleDiff/2) && e.angle < ((rotation+270)+angleDiff/2) ){
			fade(e.target);
			vertical($frame,-moveV*6);	
			ui(true,true,true,false,"typeOptPage");	
		}
	});
	var communicationOptPage = 1;
	$communicationOpt.on('swipeend',function(e){
		e.preventDefault();
		//swipe right
		if(e.angle < (rotation+angleDiff/2) || e.angle > (360+rotation-angleDiff/2)){
			fade(e.target);
			if(communicationOptPage>1){
				horizontal($communicationOpt,-moveH*(communicationOptPage-2));
				if(communicationOptPage==2){	
					ui(true,true,true,false);
				}else{
					ui(true,true,true,true);
				}
				communicationOptPage--;
			}
		}
		//swipe left
		if(e.angle > ((rotation+180)-angleDiff/2) && e.angle < ((rotation+180)+angleDiff/2) ){
			fade(e.target);
			if(communicationOptPage<3){
				horizontal($communicationOpt,-moveH*(communicationOptPage));
				if(communicationOptPage==2){				
					ui(true,false,true,true);
				}else{
					ui(true,true,true,true);
				}
				communicationOptPage++;
			}
		}
	});
	
	$confirm.on('swipeend',function(e){
		e.preventDefault();
		//swipe up
		if(e.angle > ((rotation+90)-angleDiff/2) && e.angle < ((rotation+90)+angleDiff/2) ){
			fade(e.target);
			vertical($frame,-moveV*9);
			ui(false,false,true,false);
			$("#header #point").text(0);
		}
		//swipe down
		if(e.angle > ((rotation+270)-angleDiff/2) && e.angle < ((rotation+270)+angleDiff/2) ){
			fade(e.target);
			vertical($frame,-moveV*7);
			ui(true,true,true,false,"communicationOptPage");
		}
	});
	
	$matching.on('swipeend',function(e){
		e.preventDefault();
		//swipe up
		if(e.angle > ((rotation+90)-angleDiff/2) && e.angle < ((rotation+90)+angleDiff/2) ){
			fade(e.target);
			vertical($frame,-moveV*10);
			ui(false,false,true,false);
		}
	});
	
	$success.on('swipeend',function(e){
		e.preventDefault();
		//swipe up
		if(e.angle > ((rotation+90)-angleDiff/2) && e.angle < ((rotation+90)+angleDiff/2) ){
			fade(e.target);
			vertical($frame,-moveV*11);
			ui(false,false,true,false);
		}
	});
	
	$pairing.on('swipeend',function(e){
		e.preventDefault();
		//swipe up
		if(e.angle > ((rotation+90)-angleDiff/2) && e.angle < ((rotation+90)+angleDiff/2) ){
			fade(e.target);
			vertical($frame,-moveV*12);
			ui(false,false,true,false);
		}
	});
	
	$iceBreaker.on('swipeend',function(e){
		e.preventDefault();
		//swipe up
		if(e.angle > ((rotation+90)-angleDiff/2) && e.angle < ((rotation+90)+angleDiff/2) ){
			fade(e.target);
			vertical($frame,-moveV*13);
			ui(false,true,true,false);
		}
	});
	
	$finish.on('swipeend',function(e){
		e.preventDefault();
		//swipe up
		if(e.angle > ((rotation+90)-angleDiff/2) && e.angle < ((rotation+90)+angleDiff/2) ){
			$lightbox.fadeIn(450,function(){
				$lightbox.fadeOut(450);
			});
			vertical($frame,-moveV*3);
			ui(false,true,true,false,"modeOptPage");
		}
	});
	var finishOptPage = 1;
	$finishOpt.on('swipeend',function(e){
		e.preventDefault();
		//swipe right
		if(e.angle < (rotation+angleDiff/2) || e.angle > (360+rotation-angleDiff/2)){
			fade(e.target);
			if(finishOptPage>1){
				horizontal($finishOpt,-moveH*(finishOptPage-2));
				finishOptPage--;
				if(finishOptPage==2){	
					ui(false,true,true,true);
				}else{
					ui(false,true,true,false);
				}
			}
		}
		//swipe left
		if(e.angle > ((rotation+180)-angleDiff/2) && e.angle < ((rotation+180)+angleDiff/2) ){
			fade(e.target);
			if(finishOptPage<3){
				horizontal($finishOpt,-moveH*(finishOptPage));
				finishOptPage++;
				if(finishOptPage==2){	
					ui(false,true,true,true);
				}else{
					ui(false,false,true,true);
				}
			}
		}
	});
	
	/* Functions */
	function horizontal(target,xpos){	
		TweenLite.to(target, interval, {
			delay: 0.25,
			x: xpos,
			ease: 'easeOutCirc'
		});
	}
	function vertical(target,ypos){	
		TweenLite.to(target, interval, {
			delay: 0.25,
			y: ypos,
			ease: 'easeOutCirc'
		});
	}
	function fade(target){
		//fade
		TweenLite.to(target, interval, {
			delay: 0.1,
			alpha: 0.3,
			scaleX: 0.9,
			scaleY: 0.9,
			ease: 'easeOutQuart'
		});		
		TweenLite.set(target, {
			delay: 0.5,
			alpha: 1,
			scaleX: 1,
			scaleY: 1		
		});
	}
	function ui(up,right,down,left,ref){
		for(var i=0;i<uis.length;++i){
			uis[i].hide();
		}
		if(up){uiup.show()};
		if(left){uileft.show()};
		if(right){uiright.show()};
		if(down){uidown.show()};
		if(ref){
			switch (ref){
				case "modeOptPage":
					if(modeOptPage==1){
						uileft.hide();
						uiright.show();
					}else{
						uileft.show();
						uiright.hide();
					}
					break;
				case "timeOptPage":
					if(timeOptPage==1){
						uileft.hide();
						uiright.show();
					}else if(timeOptPage==5){
						uileft.show();
						uiright.hide();
					}else{
						uileft.show();
						uiright.show();
					}
					break;
				case "typeOptPage":
					if(typeOptPage==1){
						uileft.hide();
						uiright.show();
					}else{
						uileft.show();
						uiright.hide();
					}
					break;
				case "communicationOptPage":
					if(communicationOptPage==1){
						uileft.hide();
						uiright.show();
					}else if(communicationOptPage==3){
						uileft.show();
						uiright.hide();
					}else{
						uileft.show();
						uiright.show();
					}
					break;
				default:
					break;
			}
		}
	}
});