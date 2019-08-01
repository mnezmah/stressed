<script>
  import { Link } from "svelte-routing";
</script>

<style>
  .header {
    background: #3b6765;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    height: 12vh;
    line-height: 12vh;
    margin-bottom: 5%;
    width: 100%;
  }

  .header__title {
    color: #ffff;
   /* font-family: "Saira Stencil One", cursive; */
    /* font-family: "Permanent Marker", cursive; */
   /* font-family: "Concert One", cursive; */
   /* font-family: "Oleo Script", cursive; */
   /* font-family: "Oleo Script Swash Caps", cursive; */
    font-family: "Elsie", cursive; 
    padding-left: 5%;
    vertical-align: midddle;
    text-decoration: none;
  }
  .link {
      text-decoration: none;
  }
</style>

<div class="header">
  <Link class="link" to="/">
    <h1 class="header__title">
      <i>stress</i>ED!
    </h1>
  </Link>
</div>
