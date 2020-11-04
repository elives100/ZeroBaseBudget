<template>
  <div id="app" class="profilePage">
    <component :is="component"></component>
    <div v-if="errored">
      <span class="sorryMessage">
        We're sorry, we're not able to process request at the moment
        <br />
      </span>
    </div>
    <div v-else class="container">
      <div class="row">
        <div class="col">
          <h3>{{ budgetOwner }}</h3>
          <hr />
        </div>
      </div>
      <div class="row">
        <div v-if="Array.isArray(myExpense) && myExpense.length !== 0" class="col-md-12">
          <div class="yourBalance">
            Your monthly balance
            <br />
            <span :class="{ negativeAmount: earnings <= 0 }">${{ earnings }}</span>
          </div>

          <form action>
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
                <p
                  :class="{ negativeAmount: expense.expensesValue <= 0 }"
                >${{ expense.expensesValue }}</p>
              </div>
            </div>
            <div class="submitClass">
              <input v-if="showSubmit" @click="updateBudget()" type="submit" value="Submit" />
            </div>
          </form>
        </div>
        <div v-else class="col">
          <panel></panel>
          <div class="arrowContainer">
            <span class="arrowDown">&darr;</span>
          </div>
          <router-link class="goToForm" tag="button" to="/budgetform">Create Budget</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Expenses from "../components/expenses.vue";
import navbarCheck from "../components/navbars/navCheck.vue";
import navCreate from "../components/navbars/navCreate.vue";
export default {
  components: {
    "expense-button": Expenses,
    "navbar-check": navbarCheck,
    navbar: navCreate
  },
  data() {
    return {
      budgetOwner: "",
      myExpense: [],
      earnings: null,
      expenseButton: [],
      component: "",
      errored: false,
      negativeAmount: true,
      identity: "",
      result: "",
      showSubmit: false
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
            expense: this.expenseButton
          })
          .then(() => {
            this.$router.push("/mybudget");
          })
          .catch(err => {
            this.errored2 = true;
            this.errored = err;
          });
      }
    }
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
    }
  },
  beforeRouteEnter(to, from, next) {
    axios
      .get("/api/budget", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true
      })
      .then(res => {
        next(vm => {
          console.log("it works");
          if (res.data.budget.length > 0) {
            vm.myExpense = res.data.budget;
            vm.earnings = res.data.budget[0].earnings;
            vm.identity = res.data._id;
            vm.budgetOwner = res.data.name;
            vm.expenseButton = res.data.budget[0].expenses;
            vm.component = "navbar-check";
            console.log(res);
          } else {
            vm.budgetOwner = res.data.name;

            vm.component = "navbar";
          }
        });
      })
      .catch(err => {
        next(vm => {
          console.log(err.response);
          vm.errored = true;
        });
      });
  }
};
</script>

<style scoped>
.yourBalance {
  font-size: 15px;
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

.sorryMessage {
  font-size: 20px;
}

.arrowDown {
  font-size: 50px;
}

.goToForm {
  padding: 15px;
  border: 1px dotted;
  border-radius: 20px;
}
</style>
