function validate() {
    let checkBox = document.getElementById("company");

    checkBox.addEventListener("change", (e) => {
        if (e.target.checked) {
            document.getElementById("companyInfo").style.display = "block";
        } else {
            document.getElementById("companyInfo").style.display = "none";
        };
    });

    document.getElementById("submit").addEventListener("click", (e) => {
        e.preventDefault();
        let invalidInput = false;
        let username = document.getElementById("username");
        let email = document.getElementById("email");
        let password = document.getElementById("password");
        let confirmPassword = document.getElementById("confirm-password");

        let usernamePattern = /^[A-Za-z0-9]{3,20}$/;
        let emailPattern = /^[^@.]+@[^@]*\.[^@]*$/;
        let passwordPattern = /^[\w]{5,15}$/;

        if (usernamePattern.test(username.value)) {
            username.style.borderColor = "";
        } else {
            username.style.borderColor = "red";
            invalidInput = true;
        }

        if (emailPattern.test(email.value)) {
            email.style.borderColor = "";
        } else {
            email.style.borderColor = "red";
            invalidInput = true;
        }

        if (passwordPattern.test(password.value) &&
            password.value === confirmPassword.value) {
            password.style.borderColor = "";
            confirmPassword.style.borderColor = "";
        } else {
            password.style.borderColor = "red";
            confirmPassword.style.borderColor = "red";
            invalidInput = true;
        }

        if (checkBox.checked) {

            let companyNumber = document.getElementById("companyNumber");

            if (Number (companyNumber.value) < 1000 || Number(companyNumber.value) > 9999) {
                companyNumber.style.borderColor = "red";
                invalidInput = true;
            } else {
                companyNumber.style.borderColor = "";
            }
        }

        if (invalidInput) {
            document.getElementById("valid").style.display = "none";
        } else {
            document.getElementById("valid").style.display = "block";
        }
    });
}
