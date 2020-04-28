// Your code goes here
const MAX_TYPES_PRIZE = 4;
const START_MAX_POCKET = 5;
const STRAT_ATTEMPT = 3;
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
if (confirm('Do you want to play a game?')) {
    let endgame = true;
    let pocket;
    let number_game = 1;
    let max_pocket = START_MAX_POCKET;
    let total_prize = 0;
    let Prize = {
        3: 100,
        2: 50,
        1: 25
    }
    let attempt_left = STRAT_ATTEMPT;
    do {
        if (number_game > 1) {
            max_pocket += max_pocket;
            for (let x = 1; x < MAX_TYPES_PRIZE; x++) {
                Prize[x] += Prize[x];
            }
        }
        pocket = getRandomIntInclusive(0, max_pocket);
        do {
            let answer = prompt('Choose a roulette pocket number from 0 to ' + max_pocket +
                '\nAttempts left: ' + attempt_left + '\nTotal prize: ' + total_prize + '$' +
                '\nPossible prize on current attempt:' + Prize[attempt_left] + '$');
            if (Number(answer) === pocket) {
                total_prize += Prize[attempt_left];
                break;
            } else {
                attempt_left--;
            }
        } while (attempt_left)
        if (attempt_left) {
            let paly_mor = confirm('Congratulation, you won!\nYour prize is: ' + Prize[attempt_left] +
                ' $. \nDo you want to continue?');
            attempt_left = STRAT_ATTEMPT;
            if (paly_mor) {
                number_game++;
            } else {
                endgame = false;
            }
        } else {
            endgame = false;
        }
        if (!endgame) {
            alert('Thank you for your participation. Your prize is: ' + total_prize + '$');
            max_pocket = START_MAX_POCKET;
            number_game = 1;
            attempt_left = STRAT_ATTEMPT;
            total_prize = 0;
            Prize = {
                3: 100,
                2: 50,
                1: 25
            }
            endgame = confirm('Do you want paly again ?');
        }
    } while (endgame)

} else {
    alert('You did not become a billionaire, but can.');
}