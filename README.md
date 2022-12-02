# Svelte Cistercian-Number Svg Component

Svelte component for displaying Cistercian Numbers as svg paths

## To use:

`npm i cistercian-number`

```html
<script>
	import CistercianNumber from 'cistercian-number';
</script>

<div>
	<CistercianNumber value="{555}" />
</div>

<style>
	div {
		---color: salmon; /* Default */
		---linecap: round; /* Default */
		---thickness: 0.5; /* Default */
		---bgcolor: transparent; /* Default */
		height: 200px;
	}
</style>
```

If you like the defaults you can omit the `div` as it's only for the css variables and sizing.

## Results in the following:

```html
<!-- generated -->
<svg viewBox="0 0 12 12" class="cisterian-number">
	<path d="M6,11L6,1"></path>
	<path d="M6,1L11,1"></path>
	<path d="M11,1L6,5"></path>
	<path d="M6,1L1,1"></path>
	<path d="M1,1L6,5"></path>
	<path d="M6,11L11,11"></path>
	<path d="M6,7L11,11"></path>
	<title>555</title>
</svg>
```

Looking like:

![preview](https://user-images.githubusercontent.com/36839009/186229729-7dd8595c-87f3-4bf6-98f5-63481309862f.png)

#

### "I wanna roll my own mode"

```html
<script>
	import { cistercianNumberPaths } from 'cistercian-number';
	const numbers = [1, 2, 3];
</script>
<!-- Create an `<svg>` or symbol element -->

<svg viewBox="0 0 12 12">
	{#each numbers.map(cistercianNumberPaths) as d}
	<path {d} />
	{/each}
</svg>
```
