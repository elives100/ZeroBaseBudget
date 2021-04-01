<template>
  <div class="app">
    <navbar></navbar>

    <div class="pt-4">
      <h1>Budget Form</h1>
      <hr />
      <div class="container-fluid">
        <budget-form></budget-form>
      </div>
    </div>
  </div>
</template>

<script>
import BudgetForm from "../components/bform";
export default {
  components: {
    "budget-form": BudgetForm,
  },
  name: "form",
  data() {
    return {};
  },
};
</script>

<style scoped>
.app {
  background-image: linear-gradient(
    to bottom right,
    rgb(90, 133, 80),
    rgb(157, 158, 97)
  );
  height: 100vh;
}
</style>
