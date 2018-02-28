var svgElement = document.getElementById('theSvg')
console.log(svgElement)

var isLoaded = function(){
	console.log("loaded")
}


var mouseStuff = function(mouseData){
	console.log(mouseData.clientX + '|' + mouseData.clientY)
	newCircle = document.createElementNS('http://www.w3.org/2000/svg','circle')
	newCircle.setAttribute('cx',mouseData.clientX)
	newCircle.setAttribute('cy',mouseData.clientY)
	newCircle.setAttribute('r',50)
	newCircle.setAttribute('fill','#ffffff')
	newCircle.setAttribute('stroke','#000000')
	svgElement.append(newCircle)
}

svgElement.addEventListener("click",mouseStuff)
