function solve() {
    let convertOption = document.getElementById('selectMenuTo');

    let optionBinary = document.createElement('option');
    optionBinary.value = 'binary';
    optionBinary.innerHTML = 'Binary';

    let optionHexadecimal = document.createElement('option');
    optionHexadecimal.value = 'hexadecimal';
    optionHexadecimal.innerHTML = 'Hexadecimal';

    convertOption.appendChild(optionBinary);
    convertOption.appendChild(optionHexadecimal);

    document.querySelector("#container button").addEventListener('click', convert)

    function convert() {
        let number = document.getElementById('input').value;
        let result = document.getElementById('result');

        if (convertOption.value === "binary") {
            debugger;
            result.value = Number(number).toString(2);
        } else if (convertOption.value === "hexadecimal") {
            result.value = Number(number).toString(16).toUpperCase();
        }
    }
}