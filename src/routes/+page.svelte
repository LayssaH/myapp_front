<script>

</script>

<svelte:head>
	<title>Conduit</title>
</svelte:head>

<div>
		<div class="banner">
			<div class="container">
				<h1>Locations</h1>
				<button onclick="window.location.href = '/locations';">Découvrir les lieux de tournage de vos films préférés</button>
				<body>
				<img src="https://www.falstaff.com/fileadmin/_processed_/5/4/csm_00-Long-Weekend-Paris-c-Shutterstock-2640_cb8ed73aaf.jpg">
				</body>
			</div>
		</div>
</div>


<style>
	body{
		background-color: antiquewhite;
	}
	h1 {
		text-align: left;
		text-shadow: 2px 1px #381506 ;
		color: antiquewhite;
	}
	img {
		opacity: 0.5;
		in-height: 100%;
		min-width: 1024px;
		width: 100%;
		height: auto;
		top: 0;
	}
	button{
		display: inline-block;
		background-color: #381506;
		border-radius: 10px;
		border: 4px  #cccccc;
		color: #eeeeee;
		text-align: center;
		font-size: 16px;
		width: 400px;
		transition: all 0.5s;
		cursor: context-menu;
	}
	button:hover {
		background-color: chocolate;
	}
	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>