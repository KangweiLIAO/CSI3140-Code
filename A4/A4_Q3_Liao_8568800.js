window.addEventListener("click", (e) => {
	if (e.shiftKey) {
		alert(`The triggered event is ${e.type}`);
	} else if (e.ctrlKey || e.metaKey) {	// Use command key on MAC
		alert(`The element you clicked is <${e.target.tagName.toLowerCase()}>`);
	}
});
