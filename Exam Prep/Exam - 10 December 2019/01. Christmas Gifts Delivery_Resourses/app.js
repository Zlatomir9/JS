function solution() {
    let addGiftBtn = document.querySelectorAll("button")[0];
    let giftsList = document.querySelectorAll("ul")[0];
    let sentGiftsList = document.querySelectorAll("ul")[1];
    let discardedGiftsList = document.querySelectorAll("ul")[2];

    addGiftBtn.addEventListener("click", addGift);

    function addGift(e) {
        e.preventDefault();
        let giftName = addGiftBtn.parentNode.children[0].value;

        createNewGift(giftName);

        addGiftBtn.parentNode.children[0].value = '';
    }

    function sendGift(e) {
        let text = e.target.parentNode.firstChild.textContent;
        let liItem = document.createElement('li');
        liItem.setAttribute("class", "gift");
        liItem.innerText = text;

        sentGiftsList.appendChild(liItem);

        e.target.parentNode.remove();
    }

    function discardGift(e) {
        let text = e.target.parentNode.firstChild.textContent;
        let liItem = document.createElement('li');
        liItem.setAttribute("class", "gift");
        liItem.innerText = text;

        discardedGiftsList.appendChild(liItem);

        e.target.parentNode.remove();
    }

    function createNewGift(name) {
        let liItem = document.createElement('li');
        liItem.setAttribute("class", "gift");

        liItem.innerText = name;

        let sendBtn = document.createElement("button");
        sendBtn.setAttribute("id", "sendButton");
        sendBtn.innerText = "Send";

        sendBtn.addEventListener("click", sendGift);

        let discardBtn = document.createElement("button");
        discardBtn.setAttribute("id", "discardButton");
        discardBtn.innerText = "Discard";

        discardBtn.addEventListener("click", discardGift);

        liItem.appendChild(sendBtn);
        liItem.appendChild(discardBtn);

        giftsList.appendChild(liItem);

        Array.from(giftsList.querySelectorAll('li'))
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(x => giftsList.appendChild(x));
    }
}