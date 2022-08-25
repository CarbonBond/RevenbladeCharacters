<script>
  import { onMount } from "svelte";
  import Ability from "./ability.svelte";
  import Tabs from "./tabs.svelte";
  import { power } from "./stores.js";
  /** @type {import('./$types').PageData} */

  export let data;
  let levelIndex = 1;
  power.set(data.character.power[levelIndex - 1]);

  let abilityList = [
    "passive",
    "primary",
    "secondary",
    "heavy",
    "defensive",
    "mobility",
  ];

  let abilities = [];
  let v = 1;
  abilityList.forEach((ability) => {
    abilities.push({
      label: ability,
      value: v,
      component: Ability,
      data: {
        character_name: data.name,
        ability_name: ability,
        ...data.character[ability],
      },
    });
    v++;
  });

  let selectLevel = () => {
    console.log("not Mounted");
  };

  let levelContainer;
  let addSelectLevel = (level) => {
    let levelDiv = levelContainer.querySelector(`[level="${level}"]`);
    levelDiv.classList.add("selectLevel");
  };

  onMount(() => {
    addSelectLevel(levelIndex);

    selectLevel = (e) => {
      let levelDiv = levelContainer.querySelector(`[level="${levelIndex}"]`);
      levelDiv.classList.remove(`selectLevel`);
      if (e.currentTarget.getAttribute("level")) {
        levelIndex = e.currentTarget.getAttribute("level");
        power.set(data.character.power[levelIndex - 1]);
      } else {
        power.set(data.character.power[levelIndex - 1]);
      }
      addSelectLevel(levelIndex);
    };
  });
</script>

<main>
  <div class="UpperSection">
    <div class="BackgroundGradient" />
    <div class="PortraitContainer" />
    <div class="FadeContainer">
      <div class="fade" style="" />
    </div>
    <div class="summary">
      <h2>{data.name}</h2>
      <p>
        {data.character.lore}
      </p>
    </div>
  </div>
  <div class="LevelSection" bind:this={levelContainer}>
    <div class="LevelContainer">
      <div class="tableContainer">
        {#each [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16] as level}
          {#if level == 0}
            <div class="levelData">
              <div>Level:</div>
              <div>Health:</div>
              <div>Power:</div>
            </div>
          {:else}
            <div on:click={selectLevel} class="levelClick" {level}>
              <div>{level}</div>
              <div>{data.character.power[level - 1]}</div>
              <div>{data.character.health[level - 1]}</div>
            </div>
          {/if}
        {/each}
      </div>

      <div class="levelSelectionContainer">
        <div class="LevelItem level">
          <p>Level</p>
          <input
            class="input"
            type="number"
            bind:value={levelIndex}
            on:change={selectLevel}
            min="1"
            max="16"
          />
        </div>
        <div class="LevelItem health">
          Health:
          <span> {data.character.health[levelIndex - 1]} </span>
        </div>
        <div class="LevelItem power">
          Power:
          <span> {data.character.power[levelIndex - 1]} </span>
        </div>
      </div>

      <div class="movement">
        <p>
          Movement Speed: {data.character.movement_speed}
        </p>
      </div>
    </div>
  </div>

  <div class="tabSection">
    <Tabs bind:items={abilities} />
  </div>
  <!-- {#each abilities as ability } -->
  <!--   <Ability ability={data.character[ability]} name={ability} /> -->
  <!-- {/each } -->

  <div class="selectLevel" style="display: none;" />
</main>

<style>
  main {
    font-family: Oswald, sans-serif;
  }

  .tabSection {
    background-image: url("/images/character/upperBackground.png");
    background-size: cover;
    background-position: center bottom;
    background-repeat: no-repeat;

    min-height: 20em;
  }

  .summary {
    position: absolute;
    padding: 2em;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    z-index: 99;
  }
  .summary > h2 {
    max-width: 40ch;
    color: white;
    letter-spacing: 2px;
    font-size: 4em;
    text-transform: uppercase;
  }
  .summary > p {
    max-width: 60ch;
    font-size: 1.4em;
    letter-spacing: 2px;
    line-height: 1.2;
    font-weight: 400;
    padding-bottom: 2em;
  }
  .BackgroundGradient {
    width: 150%;
    height: 650px;
    position: absolute;
    transform: skewY(-45deg) translateX(-50vw);
    overflow: hidden;
    background-color: #00000060;
    z-index: 90;

    animation-duration: 1.5s;
    animation-timing-function: ease-out;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-name: BarIn;
  }

  .UpperSection {
    width: 100%;
    height: 85vh;
    min-height: 700px;
    background-color: #000;
    background-image: url("/images/character/upperBackground.png");
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    overflow: hidden;
    position: relative;
  }

  .FadeContainer {
    left: 0px;
    bottom: 0px;
    right: 0px;

    z-index: 98;
  }
  .fade {
    background: rgba(0, 0, 0, 0)
      linear-gradient(
        rgba(0, 0, 0, 0) 70%,
        rgba(0, 0, 0, 0.733) 100%,
        rgb(0, 0, 0) 100%
      )
      repeat scroll 0% 0%;
  }
  .fade,
  .FadeContainer {
    pointer-events: none;
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .LevelSection {
    width: 100%;
    padding: 2rem;
    height: fit-content;
    box-shadow: 0 0 8px #000;
    background: linear-gradient(220deg, #424265 0%, #424259 30%, #101025 100%);
  }

  .tableContainer {
    display: none;
    font-size: 20px;
    width: 1200px;
    justify-content: center;
    align-items: center;
  }

  .tableContainer > *:nth-child(1) {
    text-align: left;
    font-weight: bold;
  }

  .tableContainer > * {
    text-align: center;
    margin: 4px;
  }

  .LevelContainer {
    padding: 3rem 0;
    width: inherit;
    min-height: 150px;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
  }

  .levelSelectionContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
  }

  .levelClick {
    cursor: pointer;
  }

  .selectLevel {
    color: hsl(050, 70%, 60%);
    position: relative;
  }

  .selectLevel::after {
    content: "";
    position: absolute;
    transform: translateX(-12px);
    left: 50%;
    top: -20%;
    width: 0px;
    height: 0px;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-top: 12px solid hsl(050, 70%, 60%);
  }

  .LevelItem:first-child {
    width: 100%;
    max-width: 600px;
  }

  .level > p {
    text-align: center;
  }

  .LevelItem {
    margin-bottom: 2em;
    font-size: 20px;
  }
  .movement {
    font-size: 20px;
  }

  .input {
    width: 100%;
    text-align: center;
    background-color: hsl(240, 24%, 18%);
    border: 1px solid #cfcfcf;
    border-radius: 18px;
    padding: 4px 14px;
    color: #cfcfcf;
    text-indent: 3%;
  }

  @media screen and (min-width: 1200px) {
    .movement {
      padding-top: 6rem;
    }
    .tableContainer {
      display: flex;
    }
    .levelSelectionContainer {
      display: none;
    }
  }
</style>
