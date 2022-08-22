<script>
  export let ability;
  let data = JSON.parse(ability.data)
  console.log(data);
</script>

<div class="container">

  <h3>Passive: {ability.name}</h3>

  <div>
    
  </div>

</div>


<style>
  .container {
    height: min-content;
    padding: 3em;
    background-image: url("/images/character/upperBackground.png");
    background-size: cover;
    background-position: center bottom;
    background-repeat: no-repeat;
  }

  h3 {
    font-size: 2em;
  }
</style>
