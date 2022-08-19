<script>
  /** @type {import('./$types').PageData} */
  export let data;
  let searchValue = "";
</script>

<main>
  <div class="flex flex-col">
    <form class="searchContainer">


      <input class="searchbar" type="text" bind:value={searchValue} placeholder="SEARCH" />
    </form >

    {#await data}
      <p>...loading</p>
    {:then data}
      <div class="characters flex flex-wrap">
        {#each data.characters as character}
          {#if character.name.toLowerCase().includes(searchValue.toLowerCase())}
            <div class="character">
              <a href="/{character.name}" class="flex-center">
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
  .searchContainer {
    width: 100%;
    height: 100%;
    display: flex;
    margin: 0 0 2em 0;
  }
  .searchbar {
    background-color: inherit;
    border: solid 2px hsl(206, 25%, 43%);
    border-radius: 2rem;
    height: 2rem;
    padding: 2rem;
    color: hsl(206, 25%, 75%);
    font-size: 2rem;
    letter-spacing: 0.4px;
    font-weight: bold;
    flex: 1 0 auto;
  }
  .searchbar::placeholder {
    color: hsl(206, 25%, 75%);
    text-align: center;
  }
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

  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .character {
    width: 215px;
    height: 130px;
    margin: 1em;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .character > a {
    width: 100%;
    height: 100%;
    box-shadow: 0px 3px 4px black, 0px 0px 3px black;
    color: hsl(206, 25%, 73%);
    font-size: 3rem;
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
</style>
