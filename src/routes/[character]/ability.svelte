<script>
  import { power } from "./stores";
  export let data;

  let abilityData = JSON.parse(data.data);

  let replaceUnderscore = (string) => {
    return (string + "").replaceAll("_", " ");
  };

  let powerValue;

  power.subscribe((value) => {
    powerValue = value;
  });

  let percentEnter = (e) => {
    console.log(e.currentTarget.getAttribute("percentValue"));
    e.currentTarget.classList.add("percentValue");
    console.log(e.currentTarget.classList);
  };
  let percentLeave = (e) => {
    e.currentTarget.classList.remove("percentValue");
  };
</script>

<div class="percentValue" style="display: none" />
<div class="container">
  {#each Object.entries(abilityData) as [key, stats], i}
    <section>
      <div class="details">
        {#if i === 0}
          <div class="nameContainer">
            <h3 class="name">{data.name}</h3>
            <p class="description">{data.description}</p>
          </div>
        {/if}

        <div class="dataContainer">
          <h4 class="statID">{replaceUnderscore(key)}</h4>
          {#each Object.entries(stats) as [key, stat]}
            {#if key == "description"}
              <span class="statDescription">{replaceUnderscore(stat)}</span>
            {:else if Array.isArray(stat)}
              {#if key.includes("percent")}
                <span class="key"
                  >{replaceUnderscore(key).replace(" percent", "")}:</span
                ><span class="stats">
                  {#each stat as value}
                    <span
                      class="arrayValue"
                      style="--percentValue: '{value}%'"
                      on:mouseenter={percentEnter}
                      on:mouseleave={percentLeave}
                      percentValue={value}
                      >{(value * 0.01 * powerValue).toFixed(2)}</span
                    >
                  {/each}
                </span>
              {:else}
                <span class="key">{replaceUnderscore(key)}:</span><span
                  class="stats"
                >
                  {#each stat as value}
                    <span class="arrayValue">{value}</span>
                  {/each}
                </span>
              {/if}
            {:else if key.includes("percent")}
              <span class="key"
                >{replaceUnderscore(key).replace(" percent", "")}:</span
              ><span class="stats "
                ><span
                  on:mouseenter={percentEnter}
                  on:mouseleave={percentLeave}
                  style="--percentValue: '{stat}%'"
                  percentValue={stat}
                  >{(stat * 0.01 * powerValue).toFixed(2)}</span
                ></span
              >
            {:else}
              <span class="key">{replaceUnderscore(key)}:</span><span
                class="stats">{stat}</span
              >
            {/if}
          {/each}
        </div>
      </div>
      <div class="image">
        {#if key === "stats"}
          <img
            src="/images/{data.character_name.toLowerCase()}/{data.ability_name}/img{i}"
            alt="Ability IMG"
          />
        {:else}
          <img
            src="/images/{data.character_name.toLowerCase()}/{data.ability_name}/img{i}"
            alt="Ability - {key} IMG"
          />
        {/if}
      </div>
    </section>
  {/each}
</div>

<style>
  .container {
    height: min-content;
    min-height: 500px;
    padding: 0 3em;
    display: flex;
    flex-direction: column;
  }
  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-top: 1px solid white;
    padding: 20px;
    height: min-content;
    min-height: 300px;
  }
  section:first-child {
    border-top: none;
  }

  .details {
    align-self: center;
  }
  .nameContainer {
    margin-bottom: 20px;
  }
  .name {
    font-size: 2em;
  }
  .description {
    padding-left: 1em;
    font-size: 15px;
  }

  .name,
  .description {
    grid-column: 1 / 2;
    justify-self: flex-start;
    align-self: flex-start;
  }

  .dataContainer {
    display: grid;
    width: 100%;
    margin: auto;
    grid-template-columns: 1fr 2fr;
  }

  .statID {
    text-transform: capitalize;
    font-size: 18px;
  }

  .statDescription {
    grid-column: 1/3;
    padding-bottom: 20px;
    padding-left: 8px;
    font-size: 14px;
  }

  .arrayValue {
    padding-right: 5px;
  }

  .key {
    text-transform: capitalize;
    grid-column: 1/2;
  }
  .stats {
    grid-column: 2/3;
  }

  .percentValue {
    position: relative;
    cursor: default;
  }
  .percentValue::after {
    content: var(--percentValue);
    position: absolute;
    font-size: 13px;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    color: yellow;
  }

  .image {
    grid-column: 2/3;
    align-self: center;
    justify-self: center;
  }
</style>
