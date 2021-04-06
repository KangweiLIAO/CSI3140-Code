const input = document.getElementById("input");
const record = document.getElementById("record");

function printLatinWord(word) {
	record.innerHTML += word.substring(1) + word[0] + "ay ";
}

function encode() {
	const array = input.value.toString().split(" ");
	for (let i = 0; i < array.length; i++) {
		printLatinWord(array[i]);
	}
	record.innerHTML += "\n"
}
