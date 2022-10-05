function solve() {
    let points = 0;
    let correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
    let questions = document.getElementsByClassName('question');
    let sections = Array.from(document.querySelectorAll('section'));

    for (let i = 0; i < questions.length; i++) {

        let buttons = sections[i].querySelectorAll('p');

        for (let btn of buttons) {
            btn.addEventListener('click', checkAnswer);
        };

        function checkAnswer(e) {
            if (correctAnswers.includes(e.target.textContent)) {
                points++;
            }

            if (i < 2) {
                sections[i].style.display = 'none';
                sections[i + 1].style.display = 'block';
            } else {
                sections[i].style.display = 'none';
                document.getElementById("results").style.display = 'block';
                let result = '';
                points == 3 ? result = 'You are recognized as top JavaScript fan!' : result = `You have ${points} right answers`;
                document.getElementsByClassName("results-inner")[0].children[0].textContent = result;
            }
        };
    }
}