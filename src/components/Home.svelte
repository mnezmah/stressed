<script>
  import { Link } from "svelte-routing";
  import Header from "./Header.svelte";
  import Stress from "./Stress.svelte";
  import Destress from "./Destress.svelte";
</script>

<style>
body {
  
}
  h1 {
    color: #938B85;
  }
</style>

<Header />
<h1>(DE)stress! your life</h1>
<br />
<Link to="/stress"><button class="get__stressed">GET stressED!</button></Link>
<br />
<Link to="/destress"><button class="get__destressed">GET DEstressed!</button></Link>
