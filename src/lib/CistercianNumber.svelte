<script lang="ts">
	export let value: number = 0;

	const cistercian_bit = [
		'M6,11L6,1', // 0
		'M6,1L11,1', // 1
		'M6,5L11,5', // 2
		'M6,1L11,5', // 3
		'M11,1L6,5', // 4
		'M11,1L11,5', // 6
		'M6,1L1,1', // 10
		'M6,5L1,5', // 20
		'M6,1L1,5', // 30
		'M1,1L6,5', // 40
		'M1,1L1,5', // 60
		'M6,11L11,11', // 100
		'M6,7L11,7', // 200
		'M11,7L6,11', // 300
		'M6,7L11,11', // 400
		'M11,7L11,11', // 600
		'M6,11L1,11', // 1000
		'M6,7L1,7', // 2000
		'M1,7L6,11', // 3000
		'M6,7L1,11', // 4000
		'M1,7L1,11' // 6000
	];

	const mapping: number[][] = [[0], [1], [2], [3], [4], [1, 4], [5], [1, 5], [2, 5], [1, 2, 5]];

	function getCyte(val: number) {
		const v = Math.floor(Math.abs(val ?? 0)) % 10000; // limit to 4 digits (9 9 9 9)
		const sArr = v.toString().split('').reverse().map(Number); // split into array of digits

		const cytes = sArr.map((n, i) => {
			if (n === 0) return [];
			return mapping[n].map((x) => x + i * 5);
		});

		// returns the cistercian "bits" for the given value
		return cytes.flat();
	}

	function toPathArray(val: number): string[] {
		return getCyte(val).map((c) => cistercian_bit[c]);
	}

	$: _bits = toPathArray(value);
</script>

<svg viewBox="0 0 12 12" class="cisterian-number">
	<!-- "0" -->
	<path d={cistercian_bit[0]} />
	{#each _bits as bit}
		<path d={bit} />
	{/each}
	<title>
		{value}
	</title>
</svg>

<style>
	svg {
		height: 100%;
		width: 100%;
		display: block;
		background-color: var(---bgcolor, transparent);
	}
	path {
		stroke-linecap: var(---linecap, round);
		fill: none;
		stroke: var(---color, salmon);
		stroke-width: var(---thickness, 0.5);
	}
</style>
