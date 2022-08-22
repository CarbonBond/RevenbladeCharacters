<script>
  import { onMount } from "svelte";
  import { each } from "svelte/internal";

  /** @type {import('./$types').PageData} */
  export let data;
  let levelIndex = 1;

  let levelContainer;
  let selectLevel = () => {
    console.log("not Mounted")
  }

  let addSelectLevel = (level) => {
    let levelDiv = levelContainer.querySelectorAll(`.level${level}`);
    levelDiv[0].classList.add('selectLevel')
    levelDiv.forEach((element) => {
      element.classList.add("yellowText");
    });
  }

  onMount(() => {
    addSelectLevel(levelIndex);

    selectLevel = (e) => {
      let levelDivs = levelContainer.querySelectorAll(`.level${levelIndex}`);
      levelDivs.forEach(element => {
        element.classList.remove(`yellowText`)
        element.classList.remove(`selectLevel`)
      })
      levelIndex = e.target.innerHTML;
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non
        tincidunt arcu. Proin egestas pharetra justo sed placerat. Aenean
        mollis, mi sed venenatis vulputate, arcu dolor egestas tortor, ut
        scelerisque velit erat convallis purus. Maecenas mauris nisl, vulputate
        id eleifend at, aliquet vel metus.
      </p>
    </div>
  </div>
  <div class="LevelSection" bind:this={levelContainer}>
    <div class="LevelContainer">
      <div class="tableContainer">
        <table>
          <div />
          <tr class="LevelRow">
            <td>Level</td>
            {#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16] as level, i}
              <td class="tdLevel level{i + 1}" on:click={selectLevel}
                >{level}</td
              >
            {/each}
          </tr>
          <tr class="HealthRow">
            <td>Health</td>
            {#each data.character.health as health, i}
              <td class="level{i + 1}">{health}</td>
            {/each}
          </tr>
          <tr class="PowerRow">
            <td>Power</td>
            {#each data.character.power as power, i}
              <td class="level{i + 1}">{power}</td>
            {/each}
          </tr>
        </table>
      </div>

      <div class="levelSelectionContainer">
        <div class="LevelItem level">
          Level:
          <input type="number" bind:value={levelIndex} min="1" max="16" />
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
    </div>
  </div>

</main>

<style>
  main {
    font-family: Oswald, sans-serif;
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
    background-size: 100% 100%;
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
    background: linear-gradient(220deg, #101415 0%, #252728 100%);
  }

  .tableContainer {
    display: none;
    font-size: 18px;
    width: 1000px;
  }

  table {
    table-layout: fixed;
    width: inherit;
  }

  td {
    width: 5%;
    text-align: center;
  }

  .tdLevel {
    width: 5%;
    position: relative;
    cursor: pointer;
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
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
  }

  .selectLevel::after {
    content: "";
    position: absolute;
    transform: translateX(-12px);
    left: 50%;
    top: -40%;
    width: 0px;
    height: 0px;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-top: 12px solid #e8e8e8;
  }

  .yellowText {
    color: yellow;
  }

  @media screen and (min-width: 1000px) {
    .tableContainer {
      display: block;
    }
    .levelSelectionContainer {
      display: none;
    }
  }
</style>
