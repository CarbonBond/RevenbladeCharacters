<script>
  const fetchImage = (async () => {
    const response = await fetch("http://localhost:8080/query", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query findCharacters {
            characters {
            name
          }
        }`,
      }),
    });
    return await response.json();
  })();
</script>

<main>
  {#await fetchImage}
    <p>...loading</p>
  {:then data}
    {#each data.data.characters as character}
      <li>{character.name}</li>
    {/each}
  {:catch error}
    <p>An error occurred!</p>
    <p>{error}</p>
  {/await}
</main>
