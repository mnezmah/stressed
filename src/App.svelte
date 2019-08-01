<script>
  import { Router, Link, Route } from "svelte-routing";

  import Home from "./components/Home.svelte";
  import Stress from "./components/Stress.svelte";
  import Destress from "./components/Destress.svelte";
	import Video from "./components/Video.svelte";
	import PixelArt from "./components/PixelArt.svelte";
	import Breathe from "./components/Breathe.svelte";
	import Images from "./components/Images.svelte";
	import Music from "./components/Music.svelte";
	
  export let name;
</script>

<Router>
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/stress" component={Stress} />
    <Route path="/destress" component={Destress} />
    <Route path="/destress/video" component={Video} />
    <Route path="/destress/pixel-art" component={PixelArt} />
    <Route path="/destress/breathe" component={Breathe} />
    <Route path="/stress/images" component={Images} />
    <Route path="/stress/music" component={Music} />
  </div>
</Router>
