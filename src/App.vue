<template>
  <Header />
  <TransactionTable :transactions="transactions" />
</template>

<script>
import Header from "@/components/Header";
import TransactionTable from "@/components/TransactionTable";
import axios from "axios";

export default {
  name: "App",
  components: {
    TransactionTable,
    Header,
  },
  data() {
    return {
      transactions: [],
    };
  },
  methods: {
    getTransactions() {
      this.transactions = [];
      this.getAllTransactionPages(1);
    },
    getTransactionPage(page) {
      return axios.get(`https://resttest.bench.co/transactions/${page}.json`);
    },
    getAllTransactionPages(page) {
      this.getTransactionPage(page)
        .then((response) => {
          const data = response.data;
          this.transactions = this.transactions.concat(data.transactions);

          // Get the next page of transactions if we don't have all of them yet.
          if (this.transactions.length < data.totalCount) {
            this.getAllTransactionPages(page + 1);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  mounted() {
    this.getTransactions();
  },
};
</script>

<style lang="scss">
body {
  background-color: #efede8;
  margin: 0px;
}
</style>
