<template>
  <Header />
  <TransactionTable />
</template>

<script>
import Header from "@/components/Header";
import TransactionTable from "@/components/TransactionTable";

export default {
  name: "App",
  components: {
    TransactionTable,
    Header,
  },
};
</script>

<style lang="scss">
body {
  background-color: #efede8;
  margin: 0px;
}
</style>
