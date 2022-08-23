<script>
  export let ability;
  export let name;
  let data = JSON.parse(ability.data)

</script>

<div class="container">

  <h3><span class="name">{name}</span>: {ability.name}</h3>
  <p>{ability.description}</p>

  <div>
    
  </div>

</div>


<style>
  .container {
    height: min-content;
    padding: 3em;
  }

  h3 {
    font-size: 2em;
  }

  .name {
    text-transform: capitalize;
  }

  p {
    padding-left: 2em;
  }
</style>
