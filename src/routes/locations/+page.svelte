<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>Locations • Conduit</title>
</svelte:head>

<div class="auth-page">
    <div class="container page">
        <div class="row">
            <div class="col-md-6 offset-md-3 col-xs-12">
                <h1 class="text-xs-center">Locations</h1>
                {#if data.locations?.length === 0}
                    <div class="article-preview">No locations here... yet.</div>
                {:else}
                    <div>
                        {#each data.locations as location}
                            <p> {location.filmName}</p>
                        {/each}
                    </div>
                {/if}
            </div>
        </div>
    </div>
</div>
