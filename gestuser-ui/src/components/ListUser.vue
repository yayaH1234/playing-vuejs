<template>
<div>
<div class="center">
  <nobr>
    <input type="text" placeholder="search bare..." style="width:500px;height: 60px" >
    <button type="submit" >search</button>
    <button>Add</button>
  </nobr>
</div>
  <div>

    <table>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Points</th>
      </tr>
      <tr>
        <td>Jill</td>
        <td>Smith</td>
        <td><button>edit</button> </td>
      </tr>
      <tr>
        <td>Eve</td>
        <td>Jackson</td>
        <td><button>edit</button></td>
      </tr>

    </table>

  </div>
</div>


</template>
<script>


</script>
<style scoped>

table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}

th, td {
  text-align: left;
  padding: 16px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>
