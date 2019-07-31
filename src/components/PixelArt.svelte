<script>
  let table = false;
  let width = 0;
  let height = 0;
  let selectedColor = "black";
  let tableCell;

  const onSubmit = e => {
    e.preventDefault();
    table = !table;
  };

  const saveColor = e => {
    selectedColor = e.target.value;
    console.log("COLOR: ", selectedColor);
  };

  function changeColor(color, element) {
    console.log("working?");
    tableCell = element;
    element.style.background = color;
    element.oncontextmenu = () => {
      element.style.background = "white";
      return false;
    };
  }
</script>

<style>
  table,
  tr,
  td {
    border: 1px solid #bfecf0;
  }

  table {
    border-collapse: collapse;
    margin: 0 auto;
  }

  tr {
    height: 20px;
  }

  td {
    width: 20px;
  }

  input[type="number"] {
    width: 6em;
  }
  input {
    border-radius: 4px;
  }
  #colorPicker {
    height: 40px;
    width: 40px;
  }
</style>

<h1>Pixel Art Maker</h1>
<h2>Choose Grid Size</h2>
<form id="sizePicker" on:submit={onSubmit}>
  Grid Height:
  <input type="number" id="input_height" name="height" min="1" value="1" />
  Grid Width:
  <input type="number" id="input_width" name="width" min="1" value="1" />
  <input type="submit" class="submit" value="go" />
</form>
<h2>Pick A Color</h2>
<input type="color" id="colorPicker" on:change={saveColor} />
<h2>Design Canvas</h2>
<table id="pixel_canvas" />
{#if table}
  <tr>
    <td on:click={() => changeColor(selectedColor, this)} />
    <td />
    <td on:mousedown={() => changeColor(selectedColor, this)} />
    <td on:mousedown={() => changeColor(selectedColor, this)} />
    <td on:mousedown={() => changeColor(selectedColor, this)} />
    <td on:mousedown={() => changeColor(selectedColor, this)} />
    <td on:mousedown={() => changeColor(selectedColor, this)} />
    <td on:mousedown={() => changeColor(selectedColor, this)} />
    <td />
    <td />
    <td />
    <td />
  </tr>
  <tr>
    <td />
    <td />
    <td />
    <td />
    <td />
    <td />
    <td />
    <td />
    <td />
    <td />
    <td />
    <td />
  </tr>
  <tr>
    <td />
    <td />
    <td />
    <td />
    <td />
    <td />
    <td />
    <td />
    <td />
    <td />
    <td />
    <td />
  </tr>
  <tr>
    <td />
    <td />
    <td />
    <td />
    <td />
    <td />
    <td />
    <td />
    <td />
    <td />
    <td />
    <td />
  </tr>
  <tr>
    <td />
    <td />
    <td />
    <td />
    <td />
    <td />
    <td />
    <td />
    <td />
    <td />
    <td />
    <td />
  </tr>
  <tr>
    <td />
    <td />
    <td />
    <td />
    <td />
    <td />
    <td />
    <td />
    <td />
    <td />
    <td />
    <td />
  </tr>
  <tr>
    <td />
    <td />
    <td />
    <td />
    <td />
    <td />
    <td />
    <td />
    <td />
    <td />
    <td />
    <td />
  </tr>
{/if}
