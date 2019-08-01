
<script>
import Header from './Header.svelte'
</script>


<style>
.iframe-container{
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; 
  height: 0;
}
.iframe-container iframe{
  /* position: absolute; */
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
}
.waterfall {
min-width: 100%;
height: 65vh;
}

</style>


<Header />
<div>
<iframe class="waterfall" src="https://player.vimeo.com/video/208796540?autoplay=1" title="waterfall" 
allow="accelerometer; autoplay; encrypted-media; gyroscope;
    picture-in-picture"
allowfullscreen
webkitallowfullscren
frameborder=0
/>
 </div>
<div class="iframe-container">
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/lpzR8QZp_w4?autoplay=1"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope;
    picture-in-picture"
    title="calming flute"/>
</div>
