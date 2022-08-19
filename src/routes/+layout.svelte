<header>
  <nav>
    <a class="firstNav" href="https://revenblade.com">REVENBLADE</a>
    <a href="/">CHARACTERS</a>
  </nav>
</header>

<div class="content">
  <slot />
</div>

<style>
  header {
    width: 100vw;
    height: 4.1rem;
    background-color: hsl(225, 45%, 9%);
    padding: 0 1em;
    font-family: Oswald, sans-serif;
    letter-spacing: 3px;
    font-weight: bold;
    font-size: 16px;
  }

  nav {
    display: flex;
    align-items: center;
    height: 100%;
  }
  .firstNav {
    background-color: hsl(153, 91%, 40%);
    color: hsl(225, 45%, 9%);
  }
  .firstNav:hover {
    color: hsl(225, 45%, 9%);
  }
  nav > a {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 8em;
    margin: 0 1em;
    color: hsl(206, 25%, 43%);
  }
  nav > a:hover {
    color: hsl(206, 25%, 63%);
  }

  .content {
    padding: 4rem;
    font-family: Oswald, sans-serif;
    width: 100%;
    max-width: 100ch;
    margin: auto;
  }
</style>
