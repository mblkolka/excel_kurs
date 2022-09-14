const CODES = {
  A: 65,
  Z: 90,
};

function toCell() {
  return `
  <div class="cell" contenteditable></div>
`;
}

function toColumn(col) {
  return `
		<div class="column">${col}</div>
	`;
}

function createRow(info = "", content) {
  return `
		<div class = "row">
			<div class="row-info">${info}</div>
			<div class="row-data">${content}</div>
		</div> 
	`;
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index);
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];
  const cols = new Array(colsCount).fill("").map(toChar).map(toColumn).join("");
  rows.push(createRow("", cols));
  for (let index = 0; index < rowsCount; index++) {
    const cells = new Array(colsCount).fill("").map(toCell).join("");
    rows.push(createRow(index + 1, cells));
  }
  return rows.join("");
}
