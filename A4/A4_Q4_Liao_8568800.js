const img = document.getElementById("movable");

img.onmousedown = (e) => {
	var x = 0,
		y = 0,
		mouseX = e.clientX,
		mouseY = e.clientY;
	e.preventDefault(); // Prevent the default dragging event

	document.onmousemove = (e) => {
		e.preventDefault();
		// calculate the new img position
		x = img.offsetLeft - (mouseX - e.clientX);
		y = img.offsetTop - (mouseY - e.clientY);
		// Set the img to new position
		img.style.top = `${y}px`;
		img.style.left = `${x}px`;
		// save the mouse position;
		mouseX = e.clientX;
		mouseY = e.clientY;
	};
	
	document.onmouseup = () => {
		document.onmousemove = null; // clear the dragging event
	};
};
