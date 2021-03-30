<template>
  <div id="id">
    <button
      class="list-group-item"
      hover
      @mouseenter="shown = idx"
      @mouseleave="shown = !idx"
      type="button"
    >
      <div>{{ keys }}</div>
      <div>{{ values }}</div>

      <button
        @click="deleteExpense(expense, idx)"
        class="btn mt-3"
        v-if="idx === shown"
      >
        Delete
      </button>
    </button>
  </div>
</template>

<script>
export default {
  props: ["keys", "values", "idx"],
  data() {
    return {
      shown: null,
    };
  },
  mounted() {
    this.$store.dispatch("loadExpenses");
  },
  computed: {},
  methods: {
    deleteExpense(expense, idx) {
      let newEarning = this.addExpenseValue - expense.expensesValue;
      let val = {
        index: idx,
        earnings: newEarning,
      };

      this.$confirm("Are you sure you want to delete this expense?").then(
        () => {
          this.$store.commit("DELETE_EXPENSE", val);
          this.$store.dispatch("addNewBudget");
        }
      );
    },
  },
};
</script>

<style>
.list-group-item {
  background-image: linear-gradient(
    to bottom right,
    rgb(90, 133, 80),
    rgb(157, 158, 97)
  );
  box-shadow: 1px 1px 1px 1px rgb(44, 41, 41);
}

.list-group-item:hover {
  background-image: linear-gradient(
    to bottom right,
    rgb(157, 158, 97) rgb(90, 133, 80)
  );
}

.btn {
  border-radius: 30px;
  box-shadow: 1px 1px 1px 1px rgb(44, 41, 41);
  background-color: rgb(104, 0, 0);
  border: black;
  border-radius: 20px;
  color: wheat;
}
</style>
