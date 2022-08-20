<script>
  /** @type {import('./$types').PageData} */
  export let data;
  let searchValue = "";
</script>

<main>
  <div class="content">
    <div class="flex flex-col">
      <form class="searchContainer">
        <input
          class="searchbar"
          type="text"
          bind:value={searchValue}
          placeholder="SEARCH"
        />
      </form>

      {#await data}
        <p>...loading</p>
      {:then data}
        <div class="characters flex flex-wrap flex-center-j">
          {#each data.characters as character}
            {#if character.name
              .toLowerCase()
              .includes(searchValue.toLowerCase())}
              <div class="character">
                <div class="wrapper">
                  <a href="/{character.name}" class="characterLink flex-center">
                    <img
                      src="/images/{character.name.toLowerCase()}/icon.png"
                      alt={character.name}
                    />
                  </a>
                </div>
              </div>
            {/if}
          {/each}
        </div>
      {:catch error}
        <p>An error occurred!</p>
        <p>{error}</p>
      {/await}
    </div>
  </div>
</main>

<style>
  main {
    position: fixed;

    background-color: #000;
    background-image: url("/images/character/upperBackground.png");
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    
    overflow: hidden;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    padding-top: 4rem;
  }
  .content {
    padding: 4rem;
    font-family: Oswald, sans-serif;
    width: 100%;
    height: 100%;
    max-width: 100ch;
    margin: auto;

  }
  .searchContainer {
    width: 100%;
    height: 100%;
    display: flex;
    margin: 0 0 2em 0;
  }
  .searchbar {
    background-color: inherit;
    border: solid 2px var(--dark-blue);
    border-radius: 2rem;
    height: 2rem;
    padding: 2rem;
    color: hsl(var(--dark-blue-num));
    font-size: 2rem;
    letter-spacing: 0.4px;
    font-weight: bold;
    flex: 1 0 auto;
  }
  .searchbar::placeholder {
    color: hsl(var(--dark-blue-num));
    text-align: center;
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

  .flex-center-j {
    justify-content: center;
  }
  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wrapper {
    position: relative;
  }

  .character {
    width: 215px;
    height: 130px;
    margin: 1em;
    position: static;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .wrapper {
    position: relative;
    width: 215px;
    height: 130px;
  }
  .characterLink {
    position: absolute;
    left: 0;
    top: 0;
    width: inherit;
    height: inherit;
    box-shadow: 0px 3px 4px black, 0px 0px 3px black;
    color: hsl(206, 25%, 73%);
    font-size: 3rem;
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
    transition: width 0.5s, height 0.5s, left 0.5s, top 0.5s;
  }

  .characterLink:hover {
    width: 258px;
    left: -21.5px;
    top: -16px;
    height: 156px;
  }
  .character img {
    height: 100%;
    width: 100%;
  }
</style>
