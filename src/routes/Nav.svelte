<script>
	import { page } from '$app/stores';
</script>

<nav class="navbar navbar-light">
	<div class="container">
		<a class="navbar-brand" href="/">conduit</a>
		<ul class="nav navbar-nav pull-xs-right">
			<li class="nav-item">
				<a class="nav-link" class:active={$page.url.pathname === '/'} href="/">Home</a>
			</li>
			<li class="nav-item">
				<a href="/locations" class="nav-link" class:active={$page.url.pathname === '/locations'}>
					Locations
				</a>
			</li>

			<li class="nav-item">
				<a href="/locationdetail" class="nav-link" class:active={$page.url.pathname === '/locationdetail'}>
					Details
				</a>
			</li>

			{#if $page.data.user}
				<li class="nav-item">
					<a href="/settings" class="nav-link" class:active={$page.url.pathname === '/settings'}>
						<i class="ion-gear-a" />&nbsp;Settings
					</a>
				</li>
			{:else}
				<li class="nav-item">
					<a href="/login" class="nav-link" class:active={$page.url.pathname === '/login'}>
						Sign in
					</a>
				</li>

				<li class="nav-item">
					<a href="/register" class="nav-link" class:active={$page.url.pathname === '/register'}>
						Sign up
					</a>
				</li>
			{/if}
		</ul>
	</div>
</nav>
