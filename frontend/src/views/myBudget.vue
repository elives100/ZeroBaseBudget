<template>
  <div>
    <navbar-check></navbar-check>

    <div v-if="errored">
      <p>
        We're sorry, we're not able to process your request, please try back
        later
      </p>
    </div>
    <div v-else>
      <div class="container"></div>
      <h1>My Budget</h1>
      <hr />
      <div class="container monthly">
        <p v-cloak class="mt-2 myincome">Montly Income</p>
        <p>${{ earnings }}</p>
      </div>

      <div class="container-fluid">
        <div class="addContainer mb-2">
          <button
            @click="editButton = !editButton"
            class="btn editBtn"
            type="button"
            v-if="editButton"
          >Edit</button>
          <button v-if="!editButton" @click="addExpense()" class="addButton mr-5 btn">+</button>
          <button
            v-if="!editButton"
            @click="deleteExpense(idx)"
            class="deleteButton btn "
          >-</button>
        </div>
        <div class="row">
          <div
            class="column col-lg-4 col-md-4 mb-3"
            v-for="(expense, idx) in myExpenses"
            :key="idx"
          >
            <expense-panel
              v-model.number="expense.expensesValue"
              :expense="expense"
              :myExpenses="myExpenses"
              :showInput="showInput"
              :showDelete="showDelete"
              @deleteOne="deleteFinalized(idx)"
            >
              <input
                class="inputKey"
                slot="inputKey"
                placeholder="Expense Name"
                v-model="expense.expensesKey"
                v-if="showInput && idx === myExpenses.length - 1"
                type="text"
                name="newInput"
              />
              <input
                class="inputValue"
                slot="inputValue"
                placeholder="Expense Amount"
                v-model.number="expense.expensesValue"
                v-if="showInput && idx === myExpenses.length - 1"
                type="number"
                name="newInput"
              />
            </expense-panel>
            <button
              class="confirmBtn btn "
              @click="confirmExpense(idx)"
              slot="confirmButton"
              v-if="showInput && idx === myExpenses.length - 1"
            >Confirm</button>
          </div>
        </div>
      </div>
      <div class="mt-5">
        <button class="btn deleteAll" @click="deleteBudget()">Delete All</button>
      </div>
      <br />
      <button :disabled="myExpenses.length < 1" class="btn submitButton" @click="submitBudget()" type="submit">Submit</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ExpensePanel from "../components/expensePanel.vue";

export default {
  components: {
    "expense-panel": ExpensePanel
  },
  name: "myBudget",
  data() {
    return {
      myExpenses: [],
      earnings: null,
      identifier: "",
      errored: "",
      showInput: false,
      showDelete: false,
      showSubmit: false,
      editButton: true
    };
  },
  methods: {
    deleteExpense() {
      this.showDelete = !this.showDelete;
    },
    deleteFinalized(idx) {
      if (this.showDelete === true) {
        if (
          confirm(
            "Are you sure you want to delete expense. You can not undo changes"
          )
        ) {
          this.myExpenses.splice(idx, 1);
          this.showDelete = false;
          this.earnings = this.addAllExpenses;
        }
      }
    },
    addExpense() {
      this.myExpenses.push({
        expensesKey: "",
        expensesValue: null,
        subExpense: null
      });
      this.showInput = true;
      this.showDelete = false;
    },
    confirmExpense() {
      this.showInput = false;
      this.earnings = this.addAllExpenses;
    },
    deleteBudget() {
      axios
        .post("/api/budget/delete", {
          id: this.identifier
        })
        .then(() => {
          this.$router.push("/userprofile");
        });
    },
    submitBudget() {
      axios
        .put("/api/budget", {
          id: this.identifier,
          earning: this.earnings,
          expense: this.myExpenses
        })
        .then(() => {
          this.$router.push("/userprofile");
        })
        .catch(err => {
          this.errored2 = true;
          this.errored = err;
        });
    }
  },
  computed: {
    addAllExpenses() {
      return this.myExpenses.reduce((acc, curr) => {
        acc += Number(curr.expensesValue);
        return acc;
      }, 0);
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
          vm.identifier = res.data._id;
          vm.myExpenses = res.data.budget[0].expenses;
          vm.earnings = res.data.budget[0].earnings;
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
.inputKey,
.inputValue {
  max-width: 150px;
}

.myincome {
  font-size: 21px;
}

.addContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.addButton {
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  background-color: rgb(9, 17, 129);
  color: wheat;
}

.deleteButton {
  height: 35px;
  display: flex;
  align-items: center;
  background-color: rgb(104, 0, 0);
  color: wheat;
}
.deleteAll{
      background-color: rgb(104, 0, 0);
      color: wheat;
}

.submitButton{
  background-color: rgb(9, 17, 129);
   color: wheat;
}

.confirmBtn{
  background-color: rgb(9, 17, 129);
  color: wheat;
}

.editBtn{
    background-color: rgb(9, 17, 129);
    color: wheat;
}

::placeholder {
  font-style: italic;
}

.row {
  background-color: rgba(71, 221, 11, 0.171);
  display: flex;
  justify-content: center;
}

@media only screen and (max-width: 414px) {
  .column {
    display: flex;
    justify-content: center;
  }
}
</style>
