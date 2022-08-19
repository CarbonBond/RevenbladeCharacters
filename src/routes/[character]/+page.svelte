
<script>
  /** @type {import('./$types').PageData} */
  export let data;

</script>

<main>
  {#await data}
    <p>...loading</p>
  {:then data}
    <h2>{data.name}</h2>
   <p>{data.character.power}</p> 
  {:catch error}
    <p>An error occurred!</p>
    <p>{error}</p>
  {/await}
</main>
