<script>
	import CistercianNumber from '$lib/CistercianNumber.svelte';
</script>

<h1>Preview</h1>

<ul>
	{#each [0, 1, 2, 9, 10, 11, 30, 31, 5000, 5001, 900, 9000, 9999] as n}
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
