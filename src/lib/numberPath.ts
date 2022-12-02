const cistercian_bits = [
	'M6,11L6,1', // "stem" - 0
	'M6,1L11,1', // 1
	'M6,5L11,5', // 2
	'M6,1L11,5', // 3
	'M11,1L6,5', // 4
	'M11,1L11,5', // 6
	// --
	'M6,1L1,1', // 10 - 7
	'M6,5L1,5', // 20
	'M6,1L1,5', // 30
	'M1,1L6,5', // 40
	'M1,1L1,5', // 60
	// --
	'M6,11L11,11', // 100 - 12
	'M6,7L11,7', // 200
	'M11,7L6,11', // 300
	'M6,7L11,11', // 400
	'M11,7L11,11', // 600
	// --
	'M6,11L1,11', // 1000 - 17
	'M6,7L1,7', // 2000
	'M1,7L6,11', // 3000
	'M6,7L1,11', // 4000
	'M1,7L1,11' // 6000
];

// 1's
// to get 10's, 100's add 5 * position
const mapping = [[0], [1], [2], [3], [4], [1, 4], [5], [1, 5], [2, 5], [1, 2, 5]];

export function toPathArray(val: number): string[] {
	let cistercianDigits: string[] = [cistercian_bits[0]]; // start with stem

	// in the possible range (1-9999) ... we can show 0 as a | but not a part of the system
	if (val > 9999 || val < 1) {
		console.error(`Not in range (1-9999) was: ${val}`);
		return cistercianDigits; // returns just the stem as a error placeholder?
	}

	// 1003 => ["1","0","0","3"]
	const digits = String(val).split('');

	for (let i = digits.length - 1; i >= 0; i--) {
		const digit = +digits[i];

		if (digit === 0) continue; // we already have 0 "stem"

		const position = (digits.length - i) * 5 - 5;

		// get the mapping and parse it to paths
		mapping[digit].forEach((d) => {
			cistercianDigits.push(cistercian_bits[d + position]);
		});
	}

	return cistercianDigits;
}
