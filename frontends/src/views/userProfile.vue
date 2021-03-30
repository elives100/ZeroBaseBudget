<template>
  <div id="app" class="profilePage">
    <div class="container">
      <div class="header my-5">
        <h1>{{ userName }}</h1>
        <p>{{ earnings }}</p>
      </div>
      <div class="formContainer p-2">
        <table class="table table-borderless table-hover">
          <thead>
            <tr>
              <th>Number</th>
              <th>Expense Name</th>
              <th>Expense Amount</th>
              <th>Payments</th>
            </tr>
          </thead>
          <tbody v-for="(expense, index) in expenseData" :key="index">
            <tr>
              <td>{{ index + 1 }}</td>
              <td>{{ expense.expensesKey }}</td>
              <td>{{ expense.expensesValue }}</td>
              <td>
                <input
                  type="number"
                  ref="subInput"
                  v-int
                  :value="expense.subExpense"
                  @input="updateSub($event, index)"
                />
                <button
                  v-if="index === hidden"
                  class="btn btn-outline-dark ml-2"
                  @click="changeValue(expense)"
                >
                  confirm
                </button>
              </td>
            </tr>
          </tbody>
          <button class="btn btn-outline-dark" @click="confirmExpense">
            Submit
          </button>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
//import axios from "axios";
//import Expenses from "../components/expenses.vue";

export default {
  components: {
    //   "expense-button": Expenses,
  },
  data() {
    return {
      hidden: null,
    };
  },
  mounted() {
    this.$store.dispatch("loadExpenses");
  },
  computed: {
    userName() {
      return this.$store.state.expenseProfile.name;
    },
    expenseData() {
      return this.$store.state.expenseProfile.budget[0].expenses;
    },
    earnings() {
      return this.$store.state.expenseProfile.budget[0].earnings;
    },
    addExpenseValue() {
      return this.expenseData.reduce((acc, curr) => {
        acc += Number(curr.expensesValue);
        return acc;
      }, 0);
    },
  },
  methods: {
    updateSub(event, index) {
      this.hidden = index;

      const val = {
        subberExpense: event.target.value,
        index: index,
      };
      console.log(val);
      this.$store.commit("UPDATE_SUB", val);
    },
    confirmExpense() {
      let updatedExpenseData = {
        updExpense: this.expenseData,
        updEarnings: this.addExpenseValue,
      };
      this.$store.commit("UPDATE_EXPENSE", updatedExpenseData);
      this.$confirm(
        "Are you sure you want to submit changes to your budget?"
      ).then(() => {
        this.$store.dispatch("addNewBudget");
      });
    },
    changeValue(expense) {
      expense.expensesValue = expense.expensesValue - expense.subExpense;
      expense.subExpense = "";
    },
    /* confirmExpense(expense) {
      expense.expensesValue = expense.expensesValue - expense.subExpense;
      this.earnings = this.addExpenseValue;
      3;
      this.showSubmit = true;
    },
    tryIt(expense) {
      if (expense.expensesValue < 100) {
        expense.expensesValue = expense.expensesValue + expense.subExpense;
      }
    },
    undoButton(expense) {
      if (expense.expensesValue < 100) {
        expense.expensesValue = expense.expensesValue + expense.subExpense;
        this.earnings = this.earnings + this.addSubExpense;
        `New value is ${expense.expensesValue} and new earnigns is ${this.earnings}`;
      }
      expense.subExpense = null;
      this.showSubmit = false;
    },
    updateBudget() {
      if (confirm("Are you sure you want to update this")) {
        axios
          .put("/api/budget", {
            earning: this.earnings,
            expense: this.expenseButton,
          })
          .then(() => {
            this.$router.push("/mybudget");
          })
          .catch((err) => {
            this.errored2 = true;
            this.errored = err;
          });
      }
    },*/
  },
};
</script>

<style scoped>
#app {
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient(
    to bottom right,
    rgb(90, 133, 80),
    rgb(157, 158, 97)
  );
}

.formContainer {
  box-shadow: 1px 1px 2px 2px rgb(44, 41, 41);
  border-radius: 25px;
  background-image: linear-gradient(
    to top left,
    rgb(90, 133, 80),
    rgb(157, 158, 97)
  );
}

button {
  box-shadow: 1px 1px 2px 2px rgb(44, 41, 41);
  background-image: linear-gradient(
    to bottom right,
    rgb(90, 133, 80),
    rgb(157, 158, 97)
  );
}

.hidden {
  background-color: red;
}
</style>
