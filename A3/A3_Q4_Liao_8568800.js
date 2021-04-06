function sieveOfEratosthenes() {
	var array = new Array(1000).fill(1);
	array[0] = array[1] = 0;
	for (let i = 2; i < array.length; i++) {
		for (let j = i; i*j < array.length; j++) {
			array[i*j] = 0;
		}
	}
	for (let i = 0; i < array.length; i++) {
		if (array[i] == 1) {
			document.getElementById("output").innerHTML += (" " + i)
		}
	}
	console.log(array);
}
window.onload = sieveOfEratosthenes()