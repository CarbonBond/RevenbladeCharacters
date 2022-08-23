<script>
  import { power } from "./stores";
  export let data;

  let replaceUnderscore = (string) => {
    return (string + "").replaceAll("_", " ");
  };

  let powerValue;

  power.subscribe((value) => {
    powerValue = value;
  });
</script>

<div class="container">
  {#each Object.entries(data) as [stat, value]}
    <div class="grid">
      {#if stat.includes("percent")}
        <span class="stat"
          >{replaceUnderscore(stat.replace("percent", ""))}:
        </span>
        <span class="value">{(value * 0.01 * powerValue).toFixed(2)}</span>
      {:else}
        <span class="stat">{replaceUnderscore(stat)}:</span>
        <span class="value">{value}</span>
      {/if}
    </div>
  {/each}
</div>

<style>
  .container {
    padding-top: 20px;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-bottom: 2px solid black;
  }
  .stat {
    text-transform: capitalize;
    grid-column: 1 / 2;
    padding-right: 4px;
  }
  .value {
    grid-column: 2 / 3;
    padding-left: 4px;
  }
</style>
