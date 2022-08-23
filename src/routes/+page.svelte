<script>
	import CistercianNumber from '$lib/CistercianNumber.svelte';

	let numbers = [1, 2, 3, 4, 5, 6, 100, 200, 300, 400, 500, 3500, 5000, 6000, 7000];
</script>

<h1>Preview</h1>
<ul>
	{#each numbers as n}
		<li>
			<CistercianNumber value={n} />
			{n}
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style: none;
		display: flex;
		height: 6em;
	}

	li {
		margin: 5px;
		border: 1px solid black;

		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
