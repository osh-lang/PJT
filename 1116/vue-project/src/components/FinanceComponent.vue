<template>
  <div>
    <table class="table w-35">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">금</th>
          <th scope="col">융</th>
          <th scope="col">커뮤</th>
        </tr>
      </thead>
      <tbody>
        <tr class="hoverable-row">
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>ㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂ</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
</script>

<style scoped>
  .hoverable-row:hover td {
    background-color: #f5f5f5;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  th, td {
    padding: 8px;
    text-align: left;
  }
</style>
