<script>
    import PopupLong from './PopupLong.svelte';

    /** @type {import('./$types').PageData} */
    export let data;

    const showPopupLong = () => {
        open(PopupLong);
    };
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
                        <table>
                            <tr>
                                <th>Title</th>
                                <th>Producer</th>

                            </tr>
                            {#each data.locations as location}
                                <tr>
                                    <td>{location.filmName}</td>
                                    <td>{location.filmProducerName}</td>
                                    <button on:click={showPopupLong}>+info</button>
                                </tr>
                            {/each}
                        </table>

                    </div>
                {/if}
            </div>
        </div>
    </div>
</div>
