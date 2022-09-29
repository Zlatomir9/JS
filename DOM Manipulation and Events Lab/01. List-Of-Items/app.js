function addItem() {
    let input = document.getElementById('newItemText');
    let list = document.getElementById('items');
    let newItem = input.value;
    let liItem = document.createElement('li');
    liItem.textContent = newItem;

    list.appendChild(liItem);

    input.value = '';
}