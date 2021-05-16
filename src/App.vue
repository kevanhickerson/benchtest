<template>
  <Header />
  <div class="content">
    <div class="message" v-if="message != ''">{{ message }}</div>
    <TransactionTable v-if="message == ''" :transactions="transactions" />
  </div>
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
      message: "",
      transactions: [],
    };
  },
  methods: {
    getTransactions() {
      this.message = "Loading, please wait...";
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
          } else {
            this.message = "";
          }
        })
        .catch((err) => {
          this.message = err.message;
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

.content {
  margin: 24px;
}

.message {
  background-color: #ffffff;
  border-color: #eae9e5;
  border-radius: 4px;
  border-spacing: 0px;
  border-style: solid;
  border-width: 2px;
  color: #098b8c;
  padding: 24px;
  text-align: center;
}
</style>
