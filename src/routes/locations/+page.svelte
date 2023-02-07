<script>
    import { enhance } from '$app/forms';
    import ListErrors from '$lib/ListErrors.svelte';

    /** @type {import('./$types').PageData} */
    export let data;

    export let form;

    let message = "Hello from parent";
    function handleClick(id,filmName,filmType,filmProducerName,filmDirectorName,address,year) {
        const params = new URLSearchParams();

        params.set('id', id);
        params.set('filmName', filmName);
        params.set('filmType', filmType);
        params.set('filmProducerName', filmProducerName);
        params.set('filmDirectorName', filmDirectorName);
        params.set('address', address);
        params.set('year', year);

        window.location.href = `/locationdetail?${params.toString()}`;
    }
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
                                    <button on:click={() => handleClick(location._id,location.filmName,location.filmType,location.filmProducerName,location.filmDirectorName,location.address, location.year)}>+info</button>
                                </tr>
                            {/each}
                        </table>

                    </div>
                {/if}
            </div>
        </div>
    </div>
</div>
