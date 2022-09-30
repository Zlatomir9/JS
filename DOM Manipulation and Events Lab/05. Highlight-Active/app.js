function focused() {
    let fields = document.getElementsByTagName('div')[0];

    Array.from(fields.getElementsByTagName("input")).forEach(element => {
        element.addEventListener("focus", focus);
    });

    Array.from(fields.getElementsByTagName("input")).forEach(element => {
        element.addEventListener("blur", blur);
    });

    function focus(element) {
        let parent = element.target.parentNode;
        parent.classList.add("focused");
    }

    function blur(element) {
        let parent = element.target.parentNode;
        parent.classList.remove("focused");
    }
}