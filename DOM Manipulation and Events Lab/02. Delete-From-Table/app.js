function deleteByEmail() {
    let email = document.getElementsByName('email')[0].value.trim();
    let tableCells = document.querySelectorAll('#customers td:nth-child(2)');
    let result = document.getElementById('result');
    let found = false;

    for (const cell of tableCells) {
        if(cell.textContent === email){
            cell.parentElement.remove();
            found = true;
        }
    }

    result.textContent = found ? 'Deleted.' : 'Not found.';
}