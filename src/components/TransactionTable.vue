<template>
  <table>
    <thead>
      <th>Date</th>
      <th>Company</th>
      <th>Account</th>
      <th>$0</th>
    </thead>
    <tbody>
      <tr v-for="(item, index) in transactions" :key="index">
        <td>{{ item.Date }}</td>
        <td>{{ item.Company }}</td>
        <td>{{ item.Ledger }}</td>
        <td>{{ item.Amount }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    transactions: Array,
  },
};
</script>

<style lang="scss" scoped>
$borderWidth: 2px;

table {
  border-color: #eae9e5;
  border-radius: 4px;
  border-style: solid;
  border-width: $borderWidth;
  margin: 24px;

  > * + * {
    border-bottom-width: $borderWidth;
    border-bottom-style: solid;
  }
}

tbody {
  background-color: #f7f6f4;

  > * + * {
    border-bottom-width: $borderWidth;
    border-bottom-style: solid;
  }
}

thead {
  background-color: #ffffff;
}

th {
  padding: 0px;
}
</style>
