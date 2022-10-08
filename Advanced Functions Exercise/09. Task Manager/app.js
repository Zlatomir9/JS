function solve() {
    document.getElementsByTagName("form")[0].addEventListener("submit", addTask);
    let sections = Array.from(document.getElementsByTagName("section"));
    let openSection = sections[1];
    let inProgress = sections[2];
    let complete = sections[3];

    function addTask(e) {
        e.preventDefault();
        let form = e.target;
        let title = form.elements[0].value;
        let description = form.elements[1].value;
        let data = form.elements[2].value;
        if (title.length === 0 || description.length === 0 || data.length === 0) {
            return;
        };

        let newArticle = createArticle(title, description, data, { class:"green", text:"Start" }, { class:"red", text:"Delete" });
        openSection.children[1].appendChild(newArticle);
        updateEventListener();
    }

    function updateEventListener() {
        Array.from(document.getElementsByTagName("button")).forEach(button => {
            button.addEventListener("click", handler);
        });
    }

    function createArticle(title, description, data, firstButtonInfo, secondButtonInfo) {
        let buttons = createButton(firstButtonInfo, secondButtonInfo);
        let article = document.createElement("article");
        let innerHTML = `<h3>${title}</h3>` +
                        `<p>Description: ${description}</p>` +
                        `<p>Due Date: ${data}</p>` +
                        buttons;
        article.innerHTML = innerHTML;
        return article;
    }

    function createButton(firstButtonInfo, secondButtonInfo) {
        let buttons = `<div class="flex">` +
                        `<button class="${firstButtonInfo.class}">${firstButtonInfo.text}</button>` +
                        `<button class="${secondButtonInfo.class}">${secondButtonInfo.text}</button>` +
                      `</div>`;

        return buttons;
    }

    function handler(e) {
        if(e.target.innerText === "Add") {
            return;
        };
        let cmdObj = cmd(e);
        let text = e.target.innerText.toLowerCase();

        cmdObj[text](e);
    }

    function cmd(e) {
        let article = e.target.parentElement.parentElement;
        return {
            start: function (e){
                inProgress.children[1].appendChild(article);
                e.target.parentElement.remove();
                article.innerHTML += createButton( { class:"red", text:"Delete" }, { class:"orange", text:"Finish" });
                updateEventListener();             
            },
            delete: function (e){
                article.remove();
            },
            finish: function (e){
                complete.children[1].appendChild(article);
                e.target.parentElement.remove();
            }
        }
    }
}