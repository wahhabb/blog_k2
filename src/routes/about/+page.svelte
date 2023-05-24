<script>
    export let data;
</script>

<svelte:head>
<title>About My Great App</title>
<meta
    name="description"
    content="About Building SvelteKit Skills."
/>
</svelte:head>

<h1>A Random Dad Joke</h1>
<p><i>This is <b>About</b> as bad as it gets.</i></p>
<p style="font-size:1.6em;">{data.joke.joke}</p>