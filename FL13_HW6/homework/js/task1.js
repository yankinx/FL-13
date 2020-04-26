const MAX_PERSENT = 100;
const DECIMAL = 2;

let number = +prompt('Your number?');
let percentage = +prompt('Your percentage?');
if (isFinite(number) && isFinite(percentage) && percentage <= MAX_PERSENT && percentage >= 0 && number >= 0) {
	let amount = number / MAX_PERSENT * percentage;
	let total_sum = amount + number;
	alert('Check number: ' + number + '\nTip: ' + percentage + '%\nTip amount: ' +
		+ amount.toFixed(DECIMAL) + '\nTotal sum to pay: ' + total_sum.toFixed(DECIMAL))
} else {
	alert('Invalid input data')
}
