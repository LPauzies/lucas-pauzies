<script lang="ts">
    import TitleContent from "./content/TitleContent.svelte";
    import Jobs from "./content/Jobs.svelte";
</script>

<main>
    <div class="repository-content px-3 mt-5">
        <TitleContent/>
        <div class="d-flex flex-column flex-md-row">
            <Jobs/>
        </div>
    </div>
</main>

<style lang="scss">
	@import "../style/colors";

    .repository-content {
        width: 100%;
    }
</style>