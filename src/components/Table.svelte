<script>
import { createEventDispatcher } from "svelte"

const dispatch = createEventDispatcher()

export let selectedColor
export let tableCell 

const onChangeColor = (e) => {
  tableCell= tableCell
  dispatch("changecolor", selectedColor)
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
</style>

<table>
  <tr>
    <td on:click={() => onChangeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
    <td on:click={() => changeColor(selectedColor, this)} />
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
