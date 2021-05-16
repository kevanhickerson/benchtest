<template>
  <table>
    <thead>
      <th class="date">Date</th>
      <th class="company">Company</th>
      <th class="account">Account</th>
      <th class="amount">{{ getFormattedAmount(totalAmount) }}</th>
    </thead>
    <tbody>
      <tr v-for="(item, index) in transactions" :key="index">
        <td>{{ item.Date }}</td>
        <td>{{ item.Company }}</td>
        <td>{{ item.Ledger }}</td>
        <td>{{ getFormattedAmount(item.Amount) }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    transactions: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    totalAmount() {
      return this.transactions.reduce(
        (acc, val) => acc + Number(val.Amount),
        0
      );
    },
  },
  methods: {
    getFormattedAmount(unformattedAmount) {
      return new Intl.NumberFormat("en-CA", {
        style: "currency",
        currency: "CAD",
      }).format(unformattedAmount);
    },
  },
};
</script>

<style lang="scss" scoped>
$borderWidth: 2px;
$brandColor: #009b9e;
$tablePadding: 16px;

table {
  border-color: #eae9e5;
  border-radius: 4px;
  border-spacing: 0px;
  border-style: solid;
  border-width: $borderWidth;
  width: 100%;

  > * + * {
    border-bottom-width: $borderWidth;
    border-bottom-style: solid;
  }
}

tbody {
  background-color: #f7f6f4;

  td {
    border-bottom-width: $borderWidth;
    border-bottom-style: solid;
    border-bottom-color: #ececec;
    padding: $tablePadding;

    &:last-child {
      text-align: right;
    }
  }

  tr {
    &:last-child td {
      border-bottom: none;
    }

    &:nth-child(even) {
      color: $brandColor;
    }

    &:nth-child(odd) > td:nth-child(odd) {
      color: #9c9c9e;
    }
  }
}

thead {
  background-color: #ffffff;
  color: $brandColor;
  text-align: left;

  > th {
    padding: $tablePadding;

    &:last-child {
      text-align: right;
    }
  }
}
</style>
