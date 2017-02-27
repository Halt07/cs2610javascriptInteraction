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
		left.html.setAttribute("class", "fib-left");
		var right = fibHelper(n - 2);
		right.html.setAttribute("class", "fib-right");
		
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
		var left = 2*pellHelper(n - 1);
		left.html.setAttribute("class", "pell-left");
		var right = pellHelper(n - 2);
		right.html.setAttribute("class", "pell-right");
		
		value = left.value + right.value;
		var p = document.createElement('p');
		p.textContent = 'Pell(' + n + ') = ' + value;
		div.appendChild(p);
		
		div.appendChild(left.html);
		div.appendChild(right.html);
	}
	return { 'value': value, 'html': div };
}

var fib = function (n, node) {
	var tree = fibHelper(n)
	node.appendChild(tree.html)
}

var pell = function (n, node) {
	var treepell = pellHelper(n)
	node.appendChild(treepell.html)
}

fib(6, document.querySelector('.red'))
pell(6, document.querySelector('.yellow'))
