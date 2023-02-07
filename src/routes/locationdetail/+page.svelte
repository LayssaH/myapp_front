<script>
    import {onMount} from "svelte";

    /** @type {import('./$types').PageData} */
    export let message;
    export let id;
    export let filmName;
    export let filmType;
    export let filmProducerName;
    export let filmDirectorName;
    export let address;
    export let year;



    onMount(async () => {
        const params = new URLSearchParams(window.location.search);
        id = params.get('id');
        filmName = params.get("filmName");
        filmType = params.get('filmType');
        filmProducerName = params.get('filmProducerName');
        filmDirectorName = params.get('filmDirectorName');
        address = params.get('address');
        year = params.get('year');


    });
</script>

<svelte:head>
    <title>locationdetail • Conduit</title>
</svelte:head>

<div class="auth-page">
    <div class="container page">
        <div class="row">
            <div class="col-md-6 offset-md-3 col-xs-12">
                <h1 class="text-xs-center">Details</h1>
                <div>
                    <table>
                        <tr>
                            <th>id</th>
                            <th>filmName</th>
                            <th>filmType</th>
                            <th>filmProducerName</th>
                            <th>filmDirectorName</th>
                            <th>address</th>
                            <th>year</th>

                        </tr>
                            <tr>
                                <td>{id}</td>
                                <td>{filmName}</td>
                                <td>{filmType}</td>
                                <td>{filmProducerName}</td>
                                <td>{filmDirectorName}</td>
                                <td>{address}</td>
                                <td>{year}</td>
                            </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
