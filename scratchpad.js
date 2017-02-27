function fibHelper(n) {
	var value;
	var div = document.createElement('div');
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
		var right = fibHelper(n - 2);
		
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
		var leftpell = 2*pellHelper(n - 1);
		var rightpell = pellHelper(n - 2);
		
		value = leftpell.value + rightpell.value;
		var p = document.createElement('p');
		p.textContent = 'Pell(' + n + ') = ' + value;
		div.appendChild(p);
		
		div.appendChild(leftpell.html);
		div.appendChild(rightpell.html);
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
