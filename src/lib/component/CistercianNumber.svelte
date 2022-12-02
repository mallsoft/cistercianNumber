<script lang="ts">
	import { cistercianNumberPaths } from '$lib/component/numberPath.js';

	export let value: number = 0;

	$: paths = cistercianNumberPaths(value);
</script>

<svg viewBox="0 0 12 12" class="cisterian-number">
	{#each paths as d}
		<path {d} />
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
