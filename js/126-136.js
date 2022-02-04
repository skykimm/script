function handleOnInput(el, maxlength) {
    if(el.value.length > maxlength)  {
        el.value  = el.value.substr(0, maxlength);
    }      
}

function handleOnInput2(e)  {
    e.value = e.value.replace(/[^A-Za-z]/ig, '')
}

function handleOnChange(e) {
    const value = e.value;
    
    document.getElementById('result3').innerText = value;
}

function addRow(){
    const table = document.getElementById('fruits');
    const newRow = table.insertRow();
    const newCell1 = newRow.insertCell(0);
    const newCell2 = newRow.insertCell(1);

    newCell1.innerText = '새 과일';
    newCell2.innerText = 'New Fruit';
}

function calcSum() {
    const table = document.getElementById('fruits2');
    let sum = 0;
    for(let i = 0; i < table.rows.length; i++)  {
        sum += parseInt(table.rows[i].cells[1].innerHTML);
    }
    document.getElementById('sum').innerText = sum;
}

const rowCnt = 5;
const columnCnt = 2;

document.write('<table border="1">');
        for (let i = 0; i < rowCnt; i++) {
        document.write('<tr>');

            for (let j = 0; j < columnCnt; j++)  {
                document.write('<td>');
                document.write(i + ", " + j);
                document.write('</td>');
            }
    document.write('</tr>')
}
document.write('</table>');

function hideRow()  {
    const row = document.getElementById('orange');
    row.style.display = 'none';
}

function showRow()  {
    const row = document.getElementById('orange');
    row.style.display = '';
}