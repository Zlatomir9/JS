function validate() {
    let email = document.getElementById('email');

    email.addEventListener('change', validate);

    function validate(e) {
        if (e.target.value
            .match(/^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/)) {
                e.target.removeAttribute("class");
                return;
        }

        e.target.className = "error";
    }
}