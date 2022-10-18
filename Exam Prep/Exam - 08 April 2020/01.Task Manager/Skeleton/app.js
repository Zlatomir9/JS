function solve() {
    let task = document.getElementById("task");
    let description = document.getElementById("description");
    let dueDate = document.getElementById("date");
    let addBtn = document.getElementById("add");
    let openSection = document.getElementsByTagName("section")[1];
    let progressSection = document.getElementsByTagName("section")[2];
    let completeSection = document.getElementsByTagName("section")[3];

    addBtn.addEventListener("click", addTask);

    function addTask(e){
        e.preventDefault();

        if(!(task.value.length === 0 || description.value.length === 0 || dueDate.value.length === 0))
        {
            let article = document.createElement("article");
            let taskHeader = document.createElement("h3");
            taskHeader.textContent = task.value;
            let descrPar = document.createElement("p");
            descrPar.textContent = `Description: ${description.value}`;
            let datePar = document.createElement("p");
            datePar.textContent = `Due Date: ${dueDate.value}`;
            let div = document.createElement("div");
            div.className = "flex";

            let startBtn = document.createElement("button");
            startBtn.className = "green";
            startBtn.textContent = "Start";

            startBtn.addEventListener("click", startTask);

            let deleteBtn = document.createElement("button");
            deleteBtn.className = "red";
            deleteBtn.textContent = "Delete";

            deleteBtn.addEventListener("click", deleteTask);

            div.appendChild(startBtn);
            div.appendChild(deleteBtn);

            article.appendChild(taskHeader);
            article.appendChild(descrPar);
            article.appendChild(datePar);
            article.appendChild(div);

            openSection.children[1].appendChild(article);

            task.value = "";
            description.value = "";
            dueDate.value = "";
        }
    }

    function startTask(e){
        let article = e.target.parentNode.parentNode;
        e.target.parentNode.children[0].className = "red";
        e.target.parentNode.children[0].textContent = "Delete";

        e.target.parentNode.children[0].addEventListener("click", deleteTask);

        e.target.parentNode.children[1].className = "orange";
        e.target.parentNode.children[1].textContent = "Finish";
        e.target.parentNode.children[1].addEventListener("click", finishTask);

        progressSection.children[1].appendChild(article);
    }

    function deleteTask(e){
        e.target.parentNode.parentNode.remove();
    }

    function finishTask(e){
        let article = e.target.parentNode.parentNode;
        e.target.parentNode.remove();

        completeSection.children[1].appendChild(article);
    }
}