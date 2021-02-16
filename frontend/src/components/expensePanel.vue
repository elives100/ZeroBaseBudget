<template>
  <div
    class="card"
    @mouseover="hover = true ? showDelete : true"
    @mouseleave="hover = false"
    @click="deleteExpense(expense) ? showDelete : true"
    :class="{ deleteMe: showDelete, highlightIt: hover }"
  >
    <div class="card-header">
      {{ expense.expensesKey }}
      <br />
      <slot name="inputKey"></slot>
    </div>
    <hr />
    <div class="card-body">{{ expense.expensesValue }}</div>
    <div class="blue">
      <slot name="inputValue"></slot>
    </div>
    <br />
    <slot name="confirmButton"></slot>
  </div>
</template>

<script>
export default {
  props: {
    expense: Object,
    myExpenses: Array,
    showDelete: Boolean,
  },
  data() {
    return {
      hover: false,
    };
  },
  methods: {
    deleteExpense(expense) {
      this.$emit("deleteOne", expense);
    },
    addExpense(expense) {
      this.$emit("addOne", expense);
    },
  },
};
</script>

<style scoped>
.card {
  background-color: rgb(20, 95, 3);
  color: wheat;
  border-radius: 25px;
  padding: 10px;
  box-shadow: 3px 3px 3px rgb(25, 26, 25);
}

.deleteMe {
  border-color: rgb(192, 20, 20);
  border-width: 1.5px;
  cursor: pointer;
  box-shadow: 3px 3px 3px rgb(25, 26, 25);
}

.highlightIt {
  border-color: rgb(20, 20, 20);
}

@media only screen and (max-width: 414px) {
  .card {
    width: 200px;
  }
}
</style>
