function addItem() {
    let text = document.getElementById('newItemText');
    let item = document.getElementById('newItemValue');

    let option = document.createElement('option');
    option.value = item.value;
    option.textContent = text.value;

    document.getElementById('menu').appendChild(option);

    text.value = '';
    item.value = '';
}