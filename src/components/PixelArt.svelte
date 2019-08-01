<script>
// import Table from './Table.svelte'
import Header from './Header.svelte'

  // let table = false;
  let width = 0;
  let height = 0;
  let selectedColor = "black";
  let tableCell = 'x';
  let element = 'y'

  const onSubmit = e => {
    e.preventDefault();
    table = !table;
  };

  const saveColor = e => {
    selectedColor = e.target.value;
    console.log("COLOR: ", selectedColor);
  };

  function changeColor(color, element) {
    console.log("working?, tableCell is ", tableCell);
    tableCell = element;
    console.log('element: ', element)
    element.style.background = color;
    element.oncontextmenu = () => {
    element.style.background = "white";
      return false;
    };
  }
</script>

<style>

.colorPicker-container {
  margin-top: 2%;
  text-align: center;
}

 table,
  tr,
  td {
    border: 1px solid rgba(195, 128, 176, 0.7);
    /* border: 1px solid #bfecf0; */
  }

  table {
    background: white;
    border-collapse: collapse;
    margin: 0 auto;
    margin-bottom: 5%;
  }

  tr {
    height: 20px;
  }

  td {
    width: 20px;
  }

  /* input[type="number"] {
    width: 6em;
  } */
  input {
    border-radius: 4px;
  }
  #colorPicker {
    height: 40px;
    width: 40px;
  }

.instructions {
  color: purple;
  font-size: 1rem; 
  text-align: center;
}

h2 {
  color: rgba(128,0,128, 0.7); 
  padding-bottom: 2%;
  text-align: center;
}

h5 {
  color: purple;
}

</style>

<Header />
<h2>Draw an pixel image</h2>
<p class="instructions">Left-click for coloring the square, Right-click for removing color</p>
<!-- <h2>Choose Grid Size</h2>
<form id="sizePicker" on:submit={onSubmit}>
  Grid Height:
  <input type="number" id="input_height" name="height" min="1" value="1" />
  Grid Width:
  <input type="number" id="input_width" name="width" min="1" value="1" />
  <input type="submit" class="submit" value="go" />
</form> -->
<div class="colorPicker-container">

  <h5><i>Pick A Color</i></h5>
  <input type="color" id="colorPicker" on:change={saveColor} />
</div>
<!-- <h2>Design Canvas</h2> -->
<!-- {#if table} -->
<table>
  <tr>
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
  </tr>
  <tr>
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
  </tr>
  <tr>
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
  </tr>
  <tr>
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
  </tr>
  <tr>
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
  </tr>
  <tr>
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
  </tr>
  <tr>
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
  </tr>
  <tr>
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
  </tr>
  <tr>
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
  </tr>
  <tr>
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
  </tr>
  <tr>
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
  </tr>
  <tr>
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
  </tr>
  <tr>
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
  </tr>
  <tr>
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
  </tr>
  <tr>
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
  </tr>
  <tr>
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
  </tr>
  <tr>
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
  </tr>
  <tr>
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
  </tr>
</table>

<!-- <Table on:changecolor={changeColor} selectedColor={selectedColor} /> -->
<!-- {/if} -->

