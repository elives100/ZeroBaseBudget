<template>
  <div id="app" class="profilePage">
    <!--  <div class="yourBalance">
      Your monthly balance
      <br />
      <span :class="{ negativeAmount: userEarnings <= 0 }"
        >${{ userEarnings }}</span
      >
    </div>-->

    <!--  <form action>
      <div v-for="(expense, index) in expenseButton" :key="index">
        <expense-button
          @input="checkIt(expense)"
          @deleted="tryIt(expense)"
          @confirm="confirmExpense(expense)"
          @undoExpense="undoButton(expense)"
          v-model.number="expense.subExpense"
          :expense="expense"
          :earnings="earnings"
        ></expense-button>

        <div>
          <p>Amount Left</p>
          <p :class="{ negativeAmount: expense.expensesValue <= 0 }">
            ${{ expense.expensesValue }}
          </p>
        </div>
      </div>
      <div class="submitClass">
        <input
          v-if="showSubmit"
          @click="updateBudget()"
          type="submit"
          value="Submit"
        />
      </div>
    </form>-->
    <!-- <expense-button></expense-button>-->
    <div class="container">
      <h1>{{ userName }}</h1>
      <p>{{ earnings }}</p>

      <div class="formContainer">
        <table class="table table-striped table-hover">
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
                  class="ml-2"
                  @click="changeValue(expense)"
                >
                  confirm
                </button>
              </td>
            </tr>
          </tbody>
          <button @click="confirmExpense">Submit</button>
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
  flex-direction: row;
}
.formContainer {
  box-shadow: 3px 3px 3px 3px grey;
}

.hidden {
  background-color: red;
}
</style>
