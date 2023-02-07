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
                    <button onclick="window.location.href = '/locations';">Retour aux locations</button>
                </div>
            </div>
        </div>
    </div>
</div>
<style>
    h1{
        text-align: center;
        padding: 18px;
        width: auto;
        height: 137px;
        margin-left: 26REM;
    }
    button{
        display: inline-block;
        background-color: #381506 ;
        border-radius: 18px;
        border: 4px  #cccccc;
        color: #eeeeee;
        text-align: center;
        font-size: 13px;
        width: 100px;
        transition: all 0.5s;
        cursor: context-menu;
        margin: 30px;
    }
    button:hover {
        background-color: chocolate;
    }
    body{
        background-color: #f2d689;
        z-index: 1;
    }
    table {
        width: 100%;
    }
    th {
        background-color: chocolate;
        border-spacing: 25px;
        font-weight: 900;
        border-style: groove;
        padding: 20px;
        margin: 30px;
    }
    .row {
        margin-right: 50rem;
    }
    td {
        background-color: antiquewhite;
        padding-right: 20px;
        padding-left: 30px;
    }
</style>
