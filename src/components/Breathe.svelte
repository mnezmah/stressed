<script>
  import Header from "./Header.svelte";
  import ProgressBar from "@okrad/svelte-progressbar";
  export let series = 0;
  const pb = new ProgressBar({
    target: document.body,
    props: {
      style: "radial",
      series: [100],
      thickness: 5,
      height: 50
    }
  });
</script>

<style>
  h1 {
    position: absolute;
    top: 40%;
    left: 45%;
    text-align: center;
    font-family: "Mr Bedfort", cursive;
    font-size: 3rem;
    color: rgba(195, 128, 176, 0.7);
  }
p {
    color: rgba(195, 128, 176, 0.7);
    text-align: center;
    padding-top: 40%;
}

</style>

<Header />
<h1>
  Just
  <br />
  Breathe
</h1>
<p>Ged DEstressed! with breathing in just 30 seonds :)</p>