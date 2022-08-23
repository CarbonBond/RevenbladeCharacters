<script>
  import Tabs from "./tabs.svelte";
  import AbilityData from "./abilitydata.svelte";

  export let data;
  let items = [];
  let v = 1;
  let abilityData = JSON.parse(data.data);
  for (const [key, value] of Object.entries(abilityData)) {
    items.push({
      label: key,
      value: v,
      component: AbilityData,
      data: value,
    });
    v++;
  }
</script>

<div class="container">
  <div>
    <h3>{data.name}</h3>
    <p>{data.description}</p>
  </div>

  <div><Tabs bind:items={items} /></div>
</div>

<style>
  .container {
    height: min-content;
    padding: 3em;
    display: flex; 
  }
  .container>*{
    width: 50%;
  }

  h3 {
    font-size: 2em;
  }

  p {
    padding-left: 1em;
  }
</style>
