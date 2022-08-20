<script>
  /** @type {import('./$types').PageData} */
  export let data;
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
</style>
