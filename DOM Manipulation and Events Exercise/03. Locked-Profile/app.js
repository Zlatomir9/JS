function lockedProfile() {
    let btns = document.getElementsByTagName('button');

    for (let btn of btns) {
        btn.addEventListener('click', function(e) {
            let moreInformation = btn.parentNode.getElementsByTagName('div')[0];

            if(btn.parentNode.querySelector('input[type="radio"]:checked').value === 'unlock') {
                if (btn.textContent === 'Show more') {
                    moreInformation.style.display = 'inline-block';
                    btn.textContent = 'Hide it';
                } else if (btn.textContent === 'Hide it') {
                    moreInformation.style.display = 'none';
                    btn.textContent = 'Show more';
                }
            };
        });
    }
}