/**
 * Create a [num]-by-[num] table game
 * @param {number} num An integer that used to create the board
 */
function createTable(num) {
	// create a [num]-by-[num] table
	var cellCount = 0;
	var numbers = new Array(num ** 2 - 1);
	const table = document.createElement("table");
	const tblBody = document.createElement("tbody");
	const emptyCell = generateRandInt(0, num ** 2 - 1); // the index of the cell that should be empty
	for (var i = 0; i < num ** 2 - 1; i++) numbers[i] = i + 1; // [1,...,15]
	for (var i = 0; i < num; i++) {
		// creates a row
		var row = document.createElement("tr");
		for (var j = 0; j < num; j++) {
			const cell = document.createElement("td");
			cell.id = `cell-${cellCount}`;
			if (cellCount != emptyCell) {
				// if not empty cell
				const randInt = generateRandInt(0, numbers.length);
				cell.textContent = numbers[randInt];
				cell.addEventListener("click", cellClickListener(num));
				removeAt(numbers, randInt);
			}
			row.appendChild(cell);
			cellCount++;
		}
		// append a row
		tblBody.appendChild(row);
	}
	table.appendChild(tblBody);
	document.body.appendChild(table);
}

/**
 * Click listener for a table cell
 * @param {number} num the number of [num]-by-[num] table (e.g. cell-1)
 */
function cellClickListener(num) {
	this.onclick = (e) => {
		const alertAnimation = {
			color: "white",
			fontWeight: "bold",
			backgroundColor: ["red", "white"],
		};
		console.log(`${e.target.id}:${e.target.textContent} clicked`);
		if (e.target.textContent == "") {
			// empty cell clicked
			e.target.animate(alertAnimation, 500);
		} else {
			const checkEmpty = checkAdjCells(e.target.id, num);
			if (checkEmpty.hasEmpty) {
				const emptyCell = document.getElementById(checkEmpty.emptyCellID);
				emptyCell.textContent = e.target.textContent;
				alertAnimation.backgroundColor = ["green", "white"];
				emptyCell.animate(alertAnimation, 500);
				e.target.textContent = "";
			} else {
				e.target.animate(alertAnimation, 500);
			}
		}
	};
}

/**
 * Check the adjacent cells of a target cell to see if there is an empty cell or not
 * @param {string} targetID the id of the target (e.g. cell-1)
 * @param {number} num the number of [num]-by-[num] table (e.g. cell-1)
 * @returns An object { hasEmpty: boolean, emptyCellID: string };
 *          indicating that the one of adjacent cells for the target is empty cell
 */
function checkAdjCells(targetID, num) {
	targetID = parseInt(targetID.substring(5));
	result = { hasEmpty: false, emptyCellID: "" };
	// four adjacent cells:
	const topCellID = targetID - num;
	const bottomCellID = targetID + num;
	const leftCellID = targetID - 1;
	const rightCellID = targetID + 1;
	const cells = [topCellID, bottomCellID, leftCellID, rightCellID];
	for (let i = 0; i < cells.length; i++) {
		const cell = document.getElementById(`cell-${cells[i]}`);
		if (cell != null && cell.textContent == "") {
			result.hasEmpty = true;
			result.emptyCellID = cell.id;
		}
	}
	return result;
}

/**
 * Generate a random integer from [min,max)
 * @param {number} min An integer indicating the min bound
 * @param {number} max An integer indicating the max bound
 * @returns A random integer
 */
function generateRandInt(min, max) {
	const rand = parseInt(Math.random() * (max - min) + min);
	return rand;
}

/**
 * Removes first occurrence of the value in given array
 * @param {array} array An array where the value will be removed from
 * @param {number} index The index of the value to remove
 * @returns The new array
 */
function removeAt(array, index) {
	if (index > -1) {
		array.splice(index, 1);
	}
	return array;
}

window.onload = () => {
	createTable(4); // create the game of 15-Puzzle
};
