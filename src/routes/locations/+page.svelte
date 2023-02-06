<script>
    import {enhance} from '$app/forms';
    import ListErrors from '$lib/ListErrors.svelte';
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
                <p>{data.locations.length}</p>
                <button class="btn btn-lg btn-primary pull-xs-right" type="submit">Sign in</button>
            </div>
        </div>
    </div>
</div>