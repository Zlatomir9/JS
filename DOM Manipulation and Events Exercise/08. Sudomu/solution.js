function solve() {
    let checkBtn = document.getElementsByTagName('button')[0];
    let clearBtn = document.getElementsByTagName('button')[1];
    let inputs = Array.from(document.querySelectorAll('input'));
    let table = document.querySelector('table');
    let checkElement = document.getElementById("check").children[0];

    checkBtn.addEventListener('click', check);
    clearBtn.addEventListener('click', clear);

    function check() {
        let tableBody = document.querySelector('tbody');

        let index = tableBody.rows.length;
        let isSolved = false;

        if(inputs.some((x) => x.value == '')) {
            isSolved = false;
        } else {
            for (let i = 0; i < index - 1; i++) {
                let currentRowSum = 0;
                let nextRowSum = 0;
                let currentColumnSum = 0;
                let nextColumnSum = 0;
    
                for (let j = 0; j < index; j++) {
                    currentRowSum += Number(tableBody.rows[i].cells[j].children[0].value);
                    nextRowSum += Number(tableBody.rows[i + 1].cells[j].children[0].value);
                };
    
                for (let k = 0; k < index; k++) {
                    currentColumnSum += Number(tableBody.rows[k].cells[i].children[0].value);
                    nextColumnSum += Number(tableBody.rows[k].cells[i + 1].children[0].value);
                };
    
                if ((currentRowSum == nextRowSum) && (currentRowSum == currentColumnSum) && (currentRowSum == nextColumnSum)) {
                    isSolved = true;
                } else {
                    isSolved = false;
                    break;
                }
            };
        }

        if (isSolved) {
            table.style.border = "2px solid green";
            checkElement.innerText = "You solve it! Congratulations!";
            checkElement.style.color = "green";
        } else {
            table.style.border = "2px solid red";
            checkElement.innerText = "NOP! You are not done yet...";
            checkElement.style.color = "red";
        }
    };

    function clear() {
        [...inputs].forEach(input => (input.value = ''));
        table.style.border = "none";
        checkElement.innerText = "";
    };
}