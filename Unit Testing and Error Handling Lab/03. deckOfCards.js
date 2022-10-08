function printDeckOfCards(cards) {
    let cardsDeck = [];
    let isInvalid = false;

    cards.forEach(card => {
        createCard(card);
    });

    function createCard(cardData) {
        let face = "";
        let suit = "";

        if(cardData.length == 3) {
            face = cardData[0] + cardData[1];
            suit = cardData[2];
        } else {
            face = cardData[0];
            suit = cardData[1];
        }

        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validSuits = ['S', 'H', 'D', 'C'];

        if (validFaces.indexOf(face.toString()) == - 1 || validSuits.indexOf(suit.toString()) == - 1) {
            console.log(`Invalid card: ${cardData}`);
            isInvalid = true;
            return;
        };

        switch (suit) {
            case 'S': suit = '\u2660'; break;
            case 'H': suit = '\u2665'; break;
            case 'D': suit = '\u2666'; break;
            case 'C': suit = '\u2663'; break;
        };

        cardsDeck.push(face + suit)
    }
    if(!isInvalid){ 
        console.log(cardsDeck.join(' '));
    };
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '1C', '3D', 'QD']);