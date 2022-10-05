function encodeAndDecodeMessages() {
    let btns = document.getElementsByTagName('button');

    for (let btn of btns) {
        let btnValue = btn.innerText;

        btn.addEventListener('click', function (e) {
            if (btnValue === 'Encode and send it') {
                let input = e.target.parentNode.children[1];
                let result = '';

                for (let i = 0; i < input.value.length; i++) {
                    result += String.fromCharCode((input.value.charCodeAt(i) + 1));
                }

                input.value = '';

                let resultArea = document.getElementsByTagName('textarea')[1];
                resultArea.value = result;
            } else if (btnValue === 'Decode and read it') {
                let text = e.target.parentNode.children[1];
                let result = '';

                for (let i = 0; i < text.value.length; i++) {
                    result += String.fromCharCode((text.value.charCodeAt(i) - 1));
                }

                text.value = result;
            }
        });
    }
}