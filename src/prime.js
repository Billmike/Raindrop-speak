const rainDrops = (number) => {
	let num = parseInt(number, 10);
	if (isNaN(num) === false && num !== "") {
		if (Math.floor(num) === num && num >= 0) {
			let result = "";
			let primeFactors = [3,5,7];
			if (num % primeFactors[0] === 0 || num % primeFactors[1] === 0 || num % primeFactors[2] === 0) {
				if (num % primeFactors[0] === 0) {
					result += 'pling';
				}
				if (num % primeFactors[1] === 0) {
					result += 'plang';
				}
				if (num % primeFactors[2] === 0) {
					result += 'plong';
				}
				console.log(result);
			}
			else {
				console.log(number);
			}
		}
		else {
			return 'Not a number';
		}
	}
}

rainDrops(34);