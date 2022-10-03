function attachEventsListeners() {
    let btns = document.querySelectorAll('input[type=button]');

    for (let btn of btns) {

        if (btn.id === 'daysBtn') {
            btn.addEventListener('click', function (e) {
                let inputValue = Number(e.target.parentElement.children[1].value);
                document.getElementById('hours').value = inputValue * 24;
                document.getElementById('minutes').value = inputValue * 24 * 60;
                document.getElementById('seconds').value = inputValue * 24 * 3600;
            });
        } else if (btn.id === 'hoursBtn') {
            btn.addEventListener('click', function (e) {
                let inputValue = Number(e.target.parentElement.children[1].value);
                document.getElementById('days').value = inputValue / 24;
                document.getElementById('minutes').value = inputValue * 60;
                document.getElementById('seconds').value = inputValue * 3600;
            });
        } else if (btn.id === 'minutesBtn') {
            btn.addEventListener('click', function (e) {
                let inputValue = Number(e.target.parentElement.children[1].value);
                document.getElementById('days').value = inputValue / 24 / 60;
                document.getElementById('hours').value = inputValue / 60;
                document.getElementById('seconds').value = inputValue * 60;
            });
        } else if (btn.id === 'secondsBtn') {
            btn.addEventListener('click', function (e) {
                let inputValue = Number(e.target.parentElement.children[1].value);
                document.getElementById('days').value = inputValue / 24 / 60 / 60;
                document.getElementById('hours').value = inputValue / 60 / 60;
                document.getElementById('minutes').value = inputValue / 60;
            });
        }
    }
}