<script>
	import { enhance } from '$app/forms';
	import ListErrors from '$lib/ListErrors.svelte';

	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<svelte:head>
	<title>Sign in • Conduit</title>
</svelte:head>

<div class="auth-page">
	<div class="container page">
		<div class="row">
			<div class="col-md-6 offset-md-3 col-xs-12">
				<h1 class="text-xs-center">Sign In</h1>
				<p class="text-xs-center">
					<a href="/register">Need an account?</a>
				</p>

				<ListErrors errors={form?.errors} />

				<form use:enhance method="POST">
					<fieldset class="form-group">
						<input
							class="form-control form-control-lg"
							name="username"
							type="username"
							required
							placeholder="Username"
						/>
					</fieldset>
					<fieldset class="form-group">
						<input
							class="form-control form-control-lg"
							name="password"
							type="password"
							required
							placeholder="Password"
						/>
					</fieldset>
					<button class="btn btn-lg btn-primary pull-xs-right" type="submit">Sign in</button>
				</form>
			</div>
		</div>
	</div>
</div>

<style>
	h1{
		text-align: center;
		padding: 10px;
		width: auto;
		height: 120px;
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
		margin: 10px;
	}
	button:hover {
		background-color: chocolate;
	}
	a{
		color: #381506;
	}

</style>
