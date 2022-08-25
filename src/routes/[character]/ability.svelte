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

  let showPercent = (e) => {
    if (e.currentTarget.classList.contains("percentValue")) {
      e.currentTarget.innerHTML = e.currentTarget.getAttribute("damageValue");
    } else {
      e.currentTarget.innerHTML =
        e.currentTarget.getAttribute("percentValue") + "%";
    }
    e.currentTarget.classList.toggle("percentValue");
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
                <span class="key "
                  >{replaceUnderscore(key).replace(" percent", "")}:</span
                ><span class="stats">
                  {#each stat as value}
                    <span
                      class="arrayValue percent"
                      on:click={showPercent}
                      damageValue={(value * 0.01 * powerValue).toFixed(2)}
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
              <span class="key "
                >{replaceUnderscore(key).replace(" percent", "")}:</span
              ><span class="stats "
                ><span
                  on:click={showPercent}
                  style="--percentValue: '{stat}%'"
                  class="percent"
                  damageValue={(stat * 0.01 * powerValue).toFixed(2)}
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
    display: flex;
    flex-direction: column;
  }
  section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    border-top: 1px solid white;
    padding: 20px;
    height: min-content;
    min-height: 300px;
  }
  section:first-child {
    border-top: none;
  }

  .details {
    width: 100%;
    padding-bottom: 30px;
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
    text-align: center;
  }

  .dataContainer {
    display: grid;
    grid-template-columns: 2fr 3.3fr;
    font-size: 1.4rem;
  }

  .statID {
    text-transform: capitalize;
    font-size: 2.5rem;
    grid-column: 1/4;
    text-align: center;
  }

  .statDescription {
    text-align: center;
    grid-column: 1/4;
    padding-bottom: 20px;
    padding-left: 8px;
    font-size: 14px;
  }

  .arrayValue {
    margin-right: 5px;
    width: 6ch;
    display: inline-block;
  }

  .key {
    text-transform: capitalize;
    grid-column: 1/2;
    padding-right: 10px;
    justify-self: right;
  }

  .stats {
    grid-column: 2/3;
  }

  .percent {
    cursor: pointer;
    border-bottom: 2px dotted #cfcfcf;
    width: 5.5ch;
    display: inline-block;
  }

  .image {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (min-width: 600px) {
    .details {
      width: 600px;
    }
    .name,
    .description {
      text-align: left;
    }
    .image {
      width: 600px;
    }
    .dataContainer {
      font-size: 1.8rem;
    }
    .statID, .statDescription {
      text-align: left;
    }
    .key {
      justify-self: left;
    }
  }
</style>
