function calc() {
    let numA = document.getElementById('num1').value;
    let numB = document.getElementById('num2').value;

    let sum = Number(numA) + Number(numB);
    document.getElementById('sum').value = sum;
}
