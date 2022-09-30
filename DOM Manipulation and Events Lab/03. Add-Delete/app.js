function addItem() {
    let ul = document.getElementById('items');

    let input = document.getElementById('newItemText');
    let value = input.value;

    let li = document.createElement('li');
    li.textContent = value;

    let delBtn = document.createElement('a');
    let linkText = document.createTextNode("[Delete]");
    delBtn.appendChild(linkText);
    delBtn.href = '#';

    delBtn.addEventListener('click', function (event) {
        event.target.parentElement.remove();
    })

    li.appendChild(delBtn);

    ul.appendChild(li);

    input.value = '';
}