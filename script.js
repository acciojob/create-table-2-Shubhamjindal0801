function createTable() {
  const rn = prompt('Input number of rows');
  const cn = prompt('Input number of columns');

  const myTable = document.getElementById('myTable');

  for (let i = 0; i < rn; i++) {
    const row = document.createElement('tr');

    for (let j = 0; j < cn; j++) {
      const cell = document.createElement('td');
      const cellText = document.createTextNode(`Row-${i} Column-${j}`);
      row.appendChild(cell);
		cell.appendChild(cellText);
      
    }
//Row-${Math.floor(index / 2)} Column-${index % 2}
    myTable.appendChild(row);
  }
}