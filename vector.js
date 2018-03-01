var svgElement = document.getElementById('theSvg');
var clearButtonElement = document.getElementById('clearSvg');
var clickStorage = {'recentX':-1,'recentY':-1};

var isLoaded = function(){
	console.log("loaded")
}

var drawLineCenter = function(mX,mY){
	if (clickStorage['recentX'] != -1){
		var theLine = document.createElementNS('http://www.w3.org/2000/svg','line');
		theLine.setAttribute('x1',clickStorage['recentX']);
		theLine.setAttribute('y1',clickStorage['recentY']);
		theLine.setAttribute('x2',mX);
		theLine.setAttribute('y2',mY);
		theLine.setAttribute("style", "stroke:rgb(255,0,255);stroke-width:3");
		svgElement.append(theLine);
	}
	clickStorage['recentX']=mX;
	clickStorage['recentY']=mY;
}

var mouseStuff = function(mouseData){
	console.log(mouseData.clientX + '|' + mouseData.clientY)	
	newCircle = document.createElementNS('http://www.w3.org/2000/svg','circle');
	newCircle.setAttribute('cx',mouseData.clientX);
	newCircle.setAttribute('cy',mouseData.clientY);
	newCircle.setAttribute('r',50);
	newCircle.setAttribute('fill','#ffffff');
	newCircle.setAttribute('stroke','#000000');
	svgElement.append(newCircle);
	
	drawLineCenter(mouseData.clientX,mouseData.clientY);
}



var clearBox = function(mouseData){
	while (svgElement.firstChild != null){
		svgElement.removeChild(svgElement.childNodes[0]);
	}
	clickStorage = {'recentX':-1,'recentY':-1}
}


svgElement.addEventListener("click",mouseStuff);
clearButtonElement.addEventListener("click",clearBox);
