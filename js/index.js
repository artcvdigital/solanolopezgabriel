// boxes
	var d,
			indicatorRing, indicatorRing,
			ow, oh, cx, cy, cz,
			panelBtn, bttAbout,
			internalRingNd, leftPanelItem, autoStyle,
			rightFloorRd, tag, runningTask,
			fField, errMsgDetailed,
			currentLenghtSt, currentLenghtNd, txtAreaSt, txtAreaNd;

// file
	d = document;
	indicatorRing = d.getElementById('indicator-ring');
	pointerItemIndicator = d.getElementById('pointer-item-indicator');
	panelBtn = d.getElementsByClassName('panel-btn');
	bttAbout = d.getElementById('btt-about');
	internalRingNd = d.getElementById('internal-ring-2');
	leftPanelItem = d.getElementsByClassName('item-from-panel');
	autoStyle = 'display: inline-block; color: rgb(255,255,255); text-shadow: 0 0 4px rgb(255,255,255), 0 0 16px rgb(255,255,255), 0 0 24px rgb(255,255,255);';
	itemFromPanel = d.getElementsByClassName('item-from-panel');
	rightFloorRd = d.getElementsByClassName('right-floor-3');
	runningTask = true;
	fField = d.getElementsByClassName('f-field');
	errMsgDetailed = d.getElementsByClassName('err-msg-detailed');
	txtAreaSt = d.getElementById('field-client-4');
	txtAreaNd = d.getElementById('field-dev-4');
	currentLenghtSt = d.getElementById('current-length-display-1');
	currentLenghtNd = d.getElementById('current-length-display-2');

// methods
	function timer(fn, t){
		setTimeout(()=>{
			fn();
		}, t);
	};

	function load(){
		var element = d.getElementById(launcher.mainCurrent);
		ow = element.offsetWidth;
		oh = element.offsetHeight;
		cz = element.getBoundingClientRect();
		cx = cz.left;
		cx = cx + (ow / 2);
		cy = cz.top;
		cy = cy + (oh / 2);
		indicatorRing.style = `display: inline-block; transform: rotateX(70deg) rotateY(2deg); top: calc(${cy}px - 2em); left: calc(${cx}px - 4em);`;
		d.getElementById(launcher.mainCurrent).style = 'color: rgb(255,255,255); transition: .6s;';
		d.getElementById(launcher.responseBttCurrent).style = 'display: inline-block;';
		d.getElementById('h3-nota-personal').style = autoStyle;
		d.getElementById('box-nota-personal').style = 'display: block;';
		var element = d.getElementById(`h3-${launcher.home}`);
		setTimeout(()=>{
			oh = element.offsetHeight;
			cz = element.getBoundingClientRect();
			cx = cz.left;
			cy = cz.top;
			cy = cy + (oh / 4);
			pointerItemIndicator.style = `display: inline-block; top: calc(${cy}px + .1em); left: calc(${cx}px - 1.5em); transition: .2s;`;
		}, 250);
		launcher.home = 'nota-personal';
		setTimeout(()=>{
			runningTask = false;
		}, 500);
	};

	function locateRing(){
		launcher.mainCurrent = event.target.id;
		if(runningTask != true){
			if(launcher.mainCurrent != launcher.mainLast){
				var element = d.getElementById(launcher.mainCurrent);
				element.style = 'color: rgb(255,255,255); transition: .6s;';
				d.getElementById(launcher.mainLast).style = 'color: rgba(255,255,255,.25);';
				launcher.mainLast = launcher.mainCurrent;
				ow = element.offsetWidth;
				oh = element.offsetHeight;
				cz = element.getBoundingClientRect();
				cx = cz.left;
				cx = cx + (ow / 2);
				cy = cz.top;
				cy = cy + (oh / 2);
				if(launcher.mainCurrent != 'btt-about'){
					indicatorRing.style = `display: inline-block; filter: brightness(900%); transform: rotateX(70deg) rotateY(2deg); top: calc(${cy}px - 2em); left: calc(${cx}px - 4em); transition: .3s`;
					setTimeout(()=>{
						indicatorRing.style = `display: inline-block; transform: rotateX(70deg) rotateY(2deg); top: calc(${cy}px - 2em); left: calc(${cx}px - 4em); transition: 1s`;
					}, 300);
				}else{
					indicatorRing.style = `display: inline-block; filter: brightness(900%); top: calc(${cy}px - 4em); left: calc(${cx}px - 4em); transition: .3s`;
					setTimeout(()=>{
						indicatorRing.style = `display: inline-block; transform: scale(1.6,1.6); top: calc(${cy}px - 4em); left: calc(${cx}px - 4em); transition: .3s`;
					}, 300);
				};
			};
		};
	};

	function onOffPanelItems(){
		var element, oh_pc, cx_pc, cy_pc, cz_pc;
		for(var i=0; i<rightFloorRd.length; i++){
			rightFloorRd[i].style = 'display: none;';
		};
		if(launcher.mainCurrent == 'btt-home'){
			launcher.responseBttCurrent = 'response-btt-home';
			element = d.getElementById(`h3-${launcher.home}`);
			d.getElementById(`box-${launcher.home}`).style = 'display: block;';
		}else if(launcher.mainCurrent == 'btt-me'){
			launcher.responseBttCurrent = 'response-btt-me';
			element = d.getElementById(`h3-${launcher.me}`);
			d.getElementById(`box-${launcher.me}`).style = 'display: block;';
		}else if(launcher.mainCurrent == 'btt-resume'){
			launcher.responseBttCurrent = 'response-btt-resume';
			element = d.getElementById(`h3-${launcher.resume}`);
			d.getElementById(`box-${launcher.resume}`).style = 'display: block;';
		}else if(launcher.mainCurrent == 'btt-contact'){
			launcher.responseBttCurrent = 'response-btt-contact-1';
			element = d.getElementById(`h3-${launcher.contact}`);
			d.getElementById(`box-${launcher.contact}`).style = 'display: block;';
			pointerItemIndicator.style = 'display: none;';
		}else if(launcher.mainCurrent == 'btt-about'){
			launcher.responseBttCurrent = 'response-btt-about';
			element = d.getElementById(`h3-${launcher.about}`);
			d.getElementById(`box-${launcher.about}`).style = 'display: block;';
		};
		if(launcher.mainCurrent != 'btt-contact'){
			setTimeout(()=>{
				element.style = autoStyle;
				oh_pc = element.offsetHeight;
				cz_pc = element.getBoundingClientRect();
				cx_pc = cz_pc.left;
				cy_pc = cz_pc.top;
				cy_pc = cy_pc + (oh_pc / 4);
				pointerItemIndicator.style = `display: inline-block; top: ${cy_pc}px; left: calc(${cx_pc}px - 1.5em); transition: .2s;`;
			}, 250);
		};
		d.getElementById(launcher.responseBttLast).style = 'display: none;';
		d.getElementById(launcher.responseBttCurrent).style = 'display: inline-block;';
		launcher.responseBttLast = launcher.responseBttCurrent;
	};

	function leftCtrls(){
		var div, oh_pc, cz_pc, cx_pc, cy_pc;
		div = event.currentTarget.id;
		tag = d.getElementById(div).getAttribute('tag');
		for(var i=0; i<rightFloorRd.length; i++){
			rightFloorRd[i].style = 'display: none;';
		};
		if(launcher.mainCurrent == 'btt-home'){
			d.getElementById(`h3-${launcher.home}`).style = 'color: rgba(255,255,255,.25);';
			d.getElementById(`box-${launcher.home}`).style = 'display: none;';
			launcher.home = tag;
			d.getElementById(`box-${launcher.home}`).style = 'display: block;';
		}else if(launcher.mainCurrent == 'btt-me'){
			d.getElementById(`h3-${launcher.me}`).style = 'color: rgba(255,255,255,.25);';
			d.getElementById(`box-${launcher.me}`).style = 'display: none;';
			launcher.me = tag;
			d.getElementById(`box-${launcher.me}`).style = 'display: block;';
		}else if(launcher.mainCurrent == 'btt-resume'){
			d.getElementById(`h3-${launcher.resume}`).style = 'color: rgba(255,255,255,.25);';
			d.getElementById(`box-${launcher.resume}`).style = 'display: none;';
			launcher.resume = tag;
			d.getElementById(`box-${launcher.resume}`).style = 'display: block;';
		}else if(launcher.mainCurrent == 'btt-contact'){
			d.getElementById(`h3-${launcher.contact}`).style = 'color: rgba(255,255,255,.25);';
			d.getElementById(`box-${launcher.contact}`).style = 'display: none;';
			launcher.contact = tag;
			d.getElementById(`box-${launcher.contact}`).style = 'display: block;';
		}else if(launcher.mainCurrent == 'btt-about'){
			d.getElementById(`h3-${launcher.about}`).style = 'color: rgba(255,255,255,.25);';
			d.getElementById(`box-${launcher.about}`).style = 'display: none;';
			launcher.about = tag;
			d.getElementById(`box-${launcher.about}`).style = 'display: block;';
		};
		div = d.getElementById(div);
		div.style = autoStyle;
		oh_pc = div.offsetHeight;
		cz_pc = div.getBoundingClientRect();
		cx_pc = cz_pc.left;
		cy_pc = cz_pc.top;
		cy_pc = cy_pc + (oh_pc / 4);
		pointerItemIndicator.style = `display: inline-block; top: calc(${cy_pc}px + .2em); left: calc(${cx_pc}px - 1.5em); transition: .2s;`;
	};

	function enableports(){
		for(var i=0; i<panelBtn.length; i++){
			panelBtn[i].addEventListener('click', ()=>{
				locateRing();
				onOffPanelItems();
			});
		};
		for(var i=0; i<itemFromPanel.length; i++){
			itemFromPanel[i].addEventListener('click', ()=>{
				leftCtrls();
			});
		};
	};

// events
	timer(load, 600);
	enableports();