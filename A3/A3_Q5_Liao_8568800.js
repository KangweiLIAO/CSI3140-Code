const raceLine = document.getElementById("race");
const infoText = document.getElementById("info");
const startBtn = document.getElementById("startBtn");

function start() {
	startBtn.disabled = true;
	var counter = 3;
	var countDown = setInterval(() => {
		infoText.innerHTML = `ON YOUR MARK, GET SET : ${counter--}`;
		if (counter < 0)
			infoText.innerHTML =
				"ON YOUR MARK, GET SET <br /> BANG!!! <br /> AND THEY’RE OFF!!!";
	}, 1000);
	setTimeout(() => {
		clearInterval(countDown);
		infoText.innerHTML = "";
		racing();
	}, 4000);
}

/**
 * Base on rules, update the position of contender
 * @param {object} contender the contender
 */
function move(contender) {
	var rand = Math.floor(Math.random() * 10) + 1;
	if (contender.name == "turtle") {
		if (1 <= rand && rand <= 5) contender.position += 3;
		else if (rand == 6 || rand == 7) contender.position -= 6;
		else contender.position += 1;
	} else if (contender.name == "hare") {
		if (rand == 1 || rand == 2) contender.position += 0;
		else if (rand == 3 || rand == 4) contender.position += 9;
		else if (rand == 5) contender.position -= 12;
		else if (6 <= rand && rand <= 8) contender.position += 1;
		else contender.position -= 2;
	}
}

function racing() {
	var hare = { name: "hare", position: 1, win: false };
	var turtle = { name: "turtle", position: 1, win: false };
	var raceTime = setInterval(() => {
		for (let p = 0; p < 70; p++) {
			if (turtle.position == hare.position && turtle.position == p)
				raceLine.innerHTML += `OUCH!!!`;
			else if (p == hare.position) raceLine.innerHTML += `H`;
			else if (p == turtle.position) raceLine.innerHTML += `T`;
			else raceLine.innerHTML += `&nbsp;`;
		}
		// movement
		move(turtle);
		move(hare);
		// reset position
		if (turtle.position < 0) turtle.position = 0;
		if (hare.position < 0) hare.position = 0;
		if (turtle.position > 70) turtle.position = 70;
		if (hare.position > 70) hare.position = 70;
		if (turtle.position == 70) turtle.win = true;
		if (hare.position == 70) hare.win = true;
		if (turtle.win) infoText.innerHTML = "TORTOISE WINS!!! YAY!!!";
		else if (hare.win) infoText.innerHTML = "HARE WINS. YUCK!";
		else if (turtle.win && hare.win) infoText.innerHTML = "IT’S A TIE";

		raceLine.innerHTML += `<br />`;
		if (hare.position >= 70 || turtle.position >= 70) {
			clearInterval(raceTime);
		}
	}, 100);
}
