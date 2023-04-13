function createTable() {
  const rn = prompt('Input number of rows');
  const cn = prompt('Input number of columns');

  const myTable = document.getElementById('myTable');

  for (let i = 0; i < rn; i++) {
    const row = document.createElement('tr');

    for (let j = 0; j < cn; j++) {
      const cell = document.createElement('td');
      const cellText = document.createTextNode(`Row-${Math.floor(i / 2)} Column-${i % 2}`);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
//
    myTable.appendChild(row);
  }
}
