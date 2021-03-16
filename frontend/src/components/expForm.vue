<template>
    <div class="container">
      <div class="row">
        <div class="col mt-3">
          <h3>{{ budgetOwner }}</h3>
          <hr />
        </div>
      </div>
      <div class="row">
        <div
          v-if="Array.isArray(myExpense) && myExpense.length !== 0"
          class="col-md-12"
        >
          <div class="yourBalance">
            <br />
            <span :class="{ negativeAmount: earnings <= 0 }"
              >${{ earnings }}</span
            >
          </div>

          <form action>
            <div v-for="(expense, index) in expenseButton" :key="index">
              <expense-button
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
          </form>
        </div>
      </div>
  </div>
</template>

<script>
import Expenses from "../components/expenses.vue";
import axios from "axios";

export default {
  components: {
    "expense-button": Expenses,
  },
  data() {
    return {
      budgetOwner: "",
      myExpense: [],
      earnings: null,
      expenseButton: [],
      errored: false,
      negativeAmount: true,
      identity: "",
      result: "",
      showSubmit: false,
    };
  },
  methods: {
    confirmExpense(expense) {
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
            id: this.identity,
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
    },
  },
  computed: {
    addSubExpense() {
      return this.expenseButton.reduce((acc, curr) => {
        acc += Number(curr.subExpense);
        return acc;
      }, 0);
    },
    addExpenseValue() {
      return this.expenseButton.reduce((acc, curr) => {
        acc += Number(curr.expensesValue);
        return acc;
      }, 0);
    },
    newEarnings() {
      return this.earnings - this.addSubExpense;
    },
  },
  mounted(){
    axios
      .get("/api/budget", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((res) => {
          console.log("it works");
          if (res.data.budget.length > 0) {
            this.myExpense = res.data.budget;
            this.earnings = res.data.budget[0].earnings;
            this.identity = res.data._id;
            this.budgetOwner = res.data.name;
            this.expenseButton = res.data.budget[0].expenses;
          }
      })
      .catch((err) => {
          console.log(err.response);
          this.errored = true;
      });
  }
};
</script>

<style scoped>
.yourBalance {
  font-size: 15px;
  margin-bottom: 50px;
}

form {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  border-radius: 5%;
}

.submitClass {
  width: 100%;
}

span {
  font-size: 15px;
}

.negativeAmount {
  color: rgb(104, 0, 0);
  font-size: 20px;
}

</style>
