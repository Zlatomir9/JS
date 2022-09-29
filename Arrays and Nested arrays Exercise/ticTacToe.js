function ticTacToe(input){

    let dashboard = [['false', 'false', 'false'], ['false', 'false', 'false'], ['false', 'false', 'false']];
    let turns = 1;
    let someoneWon = false;

    for(let i = 0; i < input.length; i++){

        let move = input[i].split(' ');
        let row = move[0];
        let column = move[1];

        if(dashboard[row][column] == 'false'){
            if(turns % 2 !== 0){
                dashboard[row][column] = 'X';
            }
            else{
                dashboard[row][column] = 'O';
            }
            
        if(turns >= 5){
            if((dashboard[0].every(e => e === dashboard[0][0])) ||
            (dashboard[1].every(e => e === dashboard[1][0])) ||
            (dashboard[2].every(e => e === dashboard[2][0])) ||
            (dashboard[0][0] === dashboard[1][0] && dashboard[1][0] === dashboard[2][0]) ||
            (dashboard[0][1] === dashboard[1][1] && dashboard[1][1] === dashboard[2][1]) ||
            (dashboard[0][2] === dashboard[1][2] && dashboard[1][2] === dashboard[2][2]) ||
            (dashboard[0][0] === dashboard[1][1] && dashboard[1][1] === dashboard[2][2]) ||
            (dashboard[0][2] === dashboard[1][1] && dashboard[1][1] === dashboard[2][0])){

                let winner = turns % 2 == 0 ? 'O' : 'X';

                console.log(`Player ${winner} wins!`);

                console.log(dashboard[0][0] + '\t' + dashboard[0][1] + '\t' + dashboard[0][2]);
                console.log(dashboard[1][0] + '\t' + dashboard[1][1] + '\t' + dashboard[1][2]);
                console.log(dashboard[2][0] + '\t' + dashboard[2][1] + '\t' + dashboard[2][2]);

                someoneWon = true;

                break;
            }
        }

        if(turns >= 9){
            if((dashboard[0].every(e => e !== 'false')) &&
            (dashboard[1].every(e => e !== 'false')) &&
            (dashboard[2].every(e => e !== 'false'))){

                break;
            }
        };

            turns++;
        }
        else{
            console.log("This place is already taken. Please choose another!");
        }
    }

    if(!someoneWon){
        console.log("The game ended! Nobody wins :(");
        console.log(dashboard[0][0] + '\t' + dashboard[0][1] + '\t' + dashboard[0][2]);
        console.log(dashboard[1][0] + '\t' + dashboard[1][1] + '\t' + dashboard[1][2]);
        console.log(dashboard[2][0] + '\t' + dashboard[2][1] + '\t' + dashboard[2][2]);
    }
}

ticTacToe(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);
console.log("------------------------------------------------------------------");
ticTacToe(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]);
console.log("------------------------------------------------------------------");
ticTacToe(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"]);