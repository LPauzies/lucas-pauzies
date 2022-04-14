<script lang="ts">
	let name: string = "World";
</script>

<main>
	<h1>Hello {name}!</h1>
</main>

<style lang="scss">
	@import "style/colors";
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}

	h1 {
		color: $color-title;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
</style>