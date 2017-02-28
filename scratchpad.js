function fibHelper(n) {
	var value;
	var div = document.createElement('div');
	div.setAttribute("class", "fib");
	
	// leaf nodes aka. base case
	if (n < 2) {
		if (n === 0) {
			value = 0;
		} 
		else if (n === 1) {
			value = 1;
		}
		var p = document.createElement('p');
  		p.textContent = 'Fib(' + n + ') = ' + value;
		div.appendChild(p)
	} 
	else {
		var left = fibHelper(n - 1);
		var classs = left.html.getAttribute("class");
		left.html.setAttribute("class", classs + " fib-left");
		
		var right = fibHelper(n - 2);
		classs = right.html.getAttribute("class");
		right.html.setAttribute("class", classs + " fib-right");
		
		value = left.value + right.value;
		var p = document.createElement('p');
		p.textContent = 'Fib(' + n + ') = ' + value;
		div.appendChild(p);
		
		div.appendChild(left.html);
		div.appendChild(right.html);
	}
	return { 'value': value, 'html': div };
}

function pellHelper(n) {
	var value;
	var div = document.createElement('div');
	div.setAttribute("class", "pell");
	
	// leaf nodes aka. base case
	if (n < 2) {
		if (n === 0) {
			value = 0;
		} 
		else if (n === 1) {
			value = 1;
		}
		var p = document.createElement('p');
  		p.textContent = 'Pell(' + n + ') = ' + value;
		div.appendChild(p)
	} 
	else {
		var left = pellHelper(n - 1);
		var classs = left.html.getAttribute("class");
		left.html.setAttribute("class", classs + " pell-left");
		var right = pellHelper(n - 2);
		classs = right.html.getAttribute("class");
		right.html.setAttribute("class", classs + " pell-right");
		
		value = (2*left.value) + right.value;
		var p = document.createElement('p');
		p.textContent = 'Pell(' + n + ') = ' + value;
		div.appendChild(p);
		
		div.appendChild(left.html);
		div.appendChild(right.html);
	}
	return { 'value': value, 'html': div };
}
	    
function tribHelper(n) {
	var value;
	var div = document.createElement('div');
	div.setAttribute("class", "trib");
	
	// leaf nodes aka. base case
	if (n < 3) {
		if (n < 2) {
			value = 0;
		} 
		else if (n === 2) {
			value = 1;
		}
		var p = document.createElement('p');
  		p.textContent = 'Trib(' + n + ') = ' + value;
		div.appendChild(p)
	} 
	else {
		var left = tribHelper(n - 1);
		var classs = left.html.getAttribute("class");
		left.html.setAttribute("class", classs + " trib-left");
		
		var mid = tribHelper(n - 2);
		classs = mid.html.getAttribute("class");
		mid.html.setAttribute("class", classs + " trib-mid");
		
		var right = tribHelper(n - 3);
		classs = right.html.getAttribute("class");
		right.html.setAttribute("class", classs + " trib-right");
		
		value = left.value + mid.value + right.value;
		var p = document.createElement('p');
		p.textContent = 'Trib(' + n + ') = ' + value;
		div.appendChild(p);
		
		div.appendChild(left.html);
		div.appendChild(mid.html);
		div.appendChild(right.html);
	}
	return { 'value': value, 'html': div };
}

var fib = function (n, node) {
	var tree = fibHelper(n)
	node.appendChild(tree.html);
	node.setAttribute("id", "fib");
}

var pell = function (n, node) {
	var tree = pellHelper(n)
	node.appendChild(tree.html);
	node.setAttribute("id", "pell");
}

var trib = function (n, node) {
	var tree = tribHelper(n)
	node.appendChild(tree.html);
	node.setAttribute("id", "trib");
}

var style = document.createElement('style');
style.textContent = "#fib {"+
	"	width: 100%;"+
        "        display: inline-block;"+
	"}"+
	".fib {"+
	"	background-color: rgba(255,102,0,0.1);"+
	"}"+
        ".fib-left {"+
        "                float: left;"+
        "                display: inline-block;"+
        "                width: 50%;"+
        "}"+
        ".fib-right {"+
        "                float: right;"+
        "                display: inline-block;"+
        "                width: 50%;"+
        "}"+
	"#pell {"+
	"	width: 100%;"+
        "        display: inline-block;"+
	"}"+
	".pell{"+
	"	background-color: rgba(0,255,0,0.1);"+
	"}"+
	".pell-left {"+
        "                float: left;"+
        "                display: inline-block;"+
        "                width: 50%;"+
        "}"+
        ".pell-right {"+
        "                float: right;"+
        "                display: inline-block;"+
        "                width: 50%;"+
        "}"+
	"#trib {"+
	"	width: 100%;"+
        "       display: inline-block;"+
	"}"+
	".trib{"+
	"	background-color:rgba(255,0,255,0.1);"+
	"}"+
	".trib-left {"+
        "                float: left;"+
        "                display: inline-block;"+
        "                width: 33%;"+
        "}"+
        ".trib-mid {"+
        "                margin: 0 auto;"+
        "                display: inline-block;"+
        "                width: 33%;"+
        "}"+
        ".trib-right {"+
        "                float: right;"+
        "                display: inline-block;"+
        "                width: 33%;"+
        "}"+
    	".shadowed {"+
        "	text-shadow: 1px 1px 2px black;"+
        "        color:       white;"+
    	"}"+
	".full-width {" +
	"		width: 100%;"+
        "        	display: inline-block;"+
	"}"+
    	".stuff-box {"+
        "                font-family: 'helvetica neue', 'helvetica', 'sans-serif';"+
        "                letter-spacing: 1px;"+
        "                text-transform: capitalize;"+
        "                text-align: center;"+
        "                padding: 3px 10px;"+
        "                margin: 10px;"+
        "                cursor: pointer;"+
        "                border-radius: 10px;"+
        "                border-width: 2px;"+
        "                border-style: solid;"+
    	"}"+
        ".red {"+
        "        border-color: rgb(255,0,0);"+
        "        background:   rgb(180,60,60);"+
        "        box-shadow: 1px 1px 2px rgba(200,0,0,0.4);"+
        "}"+
        ".yellow {"+
        "        border-color: rgb(200,200,0);"+
        "        background:   rgb(150,150,40);"+
        "        box-shadow: 1px 1px 2px rgba(175,175,0,0.4);"+
        "}"+
        ".blue {"+
        "        border-color: rgb(0,0,255);"+
        "        background:   rgb(60,60,180);"+
        "        box-shadow: 1px 1px 2px rgba(0,0,200,0.4);"+
        "}"+
        ".green {"+
        "        border-color: rgb(0,255,0);"+
        "        background:   rgb(60,180,60);"+
        "        box-shadow: 1px 1px 2px rgba(0,200,0,0.4);"+
        "}";
document.querySelector('body').appendChild(style);

var addBox = function (color) {
	var box = document.createElement('div');
	box.setAttribute("class", "stuff-box " + color + " shadowed");
	document.querySelector('body').appendChild(box);
}

var addAnchor = function(url, text) {
	var cell = document.createElement('td')
		var anchor = document.createElement('a');
		anchor.setAttribute("href", url);
		anchor.textContent = text;
		cell.appendChild(anchor);
	document.querySelector('.green').querySelector('tr').appendChild(cell);
}

document.querySelector('title').textContent = "Integer Sequences";

addBox("red");
addBox("yellow");
addBox("blue");
addBox("green");

var linkTable = document.createElement('table');
linkTable.setAttribute("class", "full-width");
	var row = document.createElement('tr');
	linkTable.appendChild(row);
document.querySelector('.green').appendChild(linkTable);

addAnchor("https://oeis.org/A000045", "The Fibonacci Sequence");
addAnchor("https://oeis.org/A000129", "The Pell Sequence");
addAnchor("https://oeis.org/A000073", "The Tribonacci Sequence");

fib(11, document.querySelector('.red'));
pell(11, document.querySelector('.yellow'));
trib(11, document.querySelector('.blue'));
