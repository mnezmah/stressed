<script>
import { Link } from 'svelte-routing'
import Video from './Video.svelte'
import PixelArt from './PixelArt.svelte'
import Breathe from './Breathe.svelte'

import Header from './Header.svelte'
</script>

<style>

h2 {
  text-align: center;
  color: #938B85;
    text-align: center;
    padding-bottom: 5%;
    font-family: 'Bitter', serif;
}

button {
  clear: both;
  color:#3b6765;
  font-weight: 600;
  width: 12rem;
  padding: 12px;
  margin-bottom: 5%;
  border: none;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}


.btn-container {
  align-content: center;
  text-align: center;
}

</style>

<Header />
<div class="btn-container">
<h2>DEstress!</h2>
<Link to="/destress/video"><button>Destress with Music</button></Link>
<br>
<Link to="/destress/pixel-art"><button>Destress with Drawing</button></Link>
<br>
<Link to="/destress/breathe"><button>Destress with Breathing</button></Link>
</div>

