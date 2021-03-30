<template>
  <div id="app">
    <!--  <div v-if="errored">
      <p>
        We're sorry, we're not able to process your request, please try back
        later
      </p>
    </div>-->
    <div class="rootCont">
      <h1 class="pt-5">My Budget</h1>
      <hr />
      <div class="container p-3">
        <div class="earning">$ {{ earnings }} - {{ addExpenseValue }}</div>
        <div class="expContainer">
          <div v-for="(expense, idx) in expenseData" :key="idx">
            <div class="list-group py-3">
              <expense-panel
                :keys="expense.expensesKey"
                :values="expense.expensesValue"
                :idx="idx"
              ></expense-panel>
            </div>
          </div>
          <button @click="add()">jddj</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import axios from "axios";
import ExpensePanel from "../components/expenseItem.vue";

export default {
  components: {
    "expense-panel": ExpensePanel,
  },
  name: "myBudget",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("loadExpenses");
  },
  methods: {
    add() {
      this.expenseData.push({
        expensesKey: "",
        expensesValue: null,
        subExpense: null,
      });
    },
  },
  computed: {
    earnings() {
      return this.$store.state.expenseProfile.budget[0].earnings;
    },
    expenseData() {
      return this.$store.state.expenseProfile.budget[0].expenses;
    },
    addExpenseValue() {
      return this.expenseData.reduce((acc, curr) => {
        acc += Number(curr.expensesValue);
        return acc;
      }, 0);
    },
    /*
    addAllExpenses() {
      return this.myExpenses.reduce((acc, curr) => {
        acc += Number(curr.expensesValue);
        return acc;
      }, 0);
    },
  },
  beforeRouteEnter(to, from, next) {
    axios
      .get("/api/budget", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((res) => {
        next((vm) => {
          vm.identifier = res.data._id;
          vm.myExpenses = res.data.budget[0].expenses;
          vm.earnings = res.data.budget[0].earnings;
        });
      })
      .catch((err) => {
        next((vm) => {
          console.log(err.response);
          vm.errored = true;
        });
      });*/
  },
};
</script>

<style scoped>
#app {
  height: 100vh;
  background-image: linear-gradient(
    to bottom right,
    rgb(90, 133, 80),
    rgb(157, 158, 97)
  );
}
.container {
  background-image: linear-gradient(
    to top left,
    rgb(90, 133, 80),
    rgb(157, 158, 97)
  );
  border-radius: 30px;
  box-shadow: 1px 1px 2px 2px rgb(44, 41, 41);
}

.deleteAll {
  background-color: rgb(104, 0, 0);
  color: wheat;
}

.submitButton {
  background-color: rgb(9, 17, 129);
  color: wheat;
}

.confirmBtn {
  background-color: rgb(9, 17, 129);
  color: wheat;
  margin-top: 20px;
}

.editBtn {
  background-color: rgb(9, 17, 129);
  color: wheat;
}

::placeholder {
  font-style: italic;
}

.row {
  display: flex;
  justify-content: space-evenly;
  border-radius: 30px;
}

@media only screen and (max-width: 414px) {
  .column {
    display: flex;
    justify-content: center;
  }
}
</style>
