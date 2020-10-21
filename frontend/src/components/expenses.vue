<template>
  <div class="container">
    <div class="buttonList">
      <div>
        <button class="buttonInput btn" type="button" @click="toggleButtons()">
          <span class="expenseKey">{{ expense.expensesKey }}</span>
        </button>
      </div>
      <input
        v-if="toggleInput"
        class="textInput"
        :value="value"
        @input="updatedSubExpense($event.target.value)"
        type="number"
      />
      <div class="buttonClass">
        <button
          class="btn confirm"
          v-if="showConfirm"
          @click="confirmExpense(expense)"
          type="button"
        >✓</button>
        <button v-if="showDelete" class="btn delete" @click="undoExpense" type="button">x</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    expenseButton: Array,
    expense: Object,
    value: Number
  },
  data() {
    return {
      toggleInput: false,
      showDelete: false,
      showConfirm: false
    };
  },
  methods: {
    toggleButtons() {
      this.toggleInput = !this.toggleInput;
    },
    updatedSubExpense(value) {
      this.showDelete = true;
      this.showConfirm = true;
      this.$emit("input", value);
    },
    undoExpense(expense) {
      this.showDelete = false;
      this.$emit("undoExpense", expense);
    },
    confirmExpense(expense) {
      this.showConfirm = false;
      this.$emit("confirm", expense);
    }
  }
};
</script>

<style scoped>
.buttonInput {
  max-width: 150px;
  min-width: 90px;
  margin-bottom: 10px;
  margin-top: 20px;
  background-color:rgb(20, 95, 3);
}

.buttonClass {
  display: flex;
  justify-content: space-around;
}

.textInput {
  margin-bottom: 5px;
  max-width: 100px;
}

.negativeAmounts {
   background-color: rgb(104, 0, 0);
  font-size: 20px;
}

.expenseKey {
  text-decoration: underline;
  color: wheat;
}

.confirm{
background-color: rgb(104, 0, 0);
color: wheat;
}
.delete{
  background-color: rgb(9, 17, 129);
  color: wheat;
}
</style>
