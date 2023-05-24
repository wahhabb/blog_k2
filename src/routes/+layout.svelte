<script>
    import Footer from '../components/Footer.svelte';
</script>
<nav>
    <a href="/">Home</a>
    <a sveltekit:prefetch href="/about">About</a>
</nav>

<main>
    <slot />
</main>
<Footer author="Wahhab Baldwin"></Footer>

<style >
:global(body) {
    margin: 1em 3em;
    background-color: antiquewhite;
}
nav {
    font-size: 1.5em;
    padding: 1em;
    background-color: tan;
}
nav a {
    padding-right: 3em;
}
</style>