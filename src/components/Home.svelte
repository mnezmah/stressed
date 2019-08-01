<script>
  import { Link } from "svelte-routing";
  import Header from "./Header.svelte";
  import Stress from "./Stress.svelte";
  import Destress from "./Destress.svelte";
</script>

<style>

  h1 {
    color: #938B85;
    text-align: center;
    padding-bottom: 5%;
    font-family: 'Bitter', serif;
  }

.btn-container {
  align-content: center;
  text-align: center;
}

button {
  color:#3b6765;
  font-weight: 600;
  width: 12rem;
  padding: 12px;
  margin-bottom: 10%;
  border: none;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

</style>

<Header />
<h1>(DE)<i>stress</i>! your life</h1>
<br />
<div class="btn-container">
  <Link to="/stress"><button class="get__stressed">GET stressED!</button></Link>
  <br />
  <Link to="/destress"><button class="get__destressed">GET DEstressed!</button></Link>
</div>
