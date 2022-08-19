<script>
  /** @type {import('./$types').PageData} */
  export let data;
  let searchValue = "";
</script>

<main>
  <div class="flex flex-col">
    <input type="text" bind:value={searchValue} />

    {#await data}
      <p>...loading</p>
    {:then data}
      <div class="flex flex-wrap">
        {#each data.characters as character}
          {#if character.name.toLowerCase().includes(searchValue)}
            <div class="character">
              <a href="/{character.name}">
                <img
                  src="/images/{character.name.toLowerCase()}/icon.png"
                  alt={character.name}
                />
              </a>
            </div>
          {/if}
        {/each}
      </div>
    {:catch error}
      <p>An error occurred!</p>
      <p>{error}</p>
    {/await}
  </div>
</main>

<style>
  main {
    height: 100%;
    width: 100%;
  }
  .flex {
    display: flex;
  }
  .flex-col {
    flex-direction: column;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }

  .character {
    width: 215px;
    height: 130px;
    margin: 1em;

    display: flex;
    align-items: center;
    justify-content: center;
    border: solid 2px black;
  }
  .character>a{

      width: 100%;
      height: 100%;
  }

</style>
