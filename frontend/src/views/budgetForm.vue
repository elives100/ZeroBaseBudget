<template>
  <div class="app">
    <navbar></navbar>

    <div class="pt-4">
      <h1>Budget Form</h1>
      <hr />
      <div class="container-fluid">
        <form>
          <div class="form-group">
            <label for="monthlypay">Monthly pay</label>
            <br />
            <input
              class="w-10"
              type="number"
              name="monthlypay"
              id="monthlypay"
              v-model.number="earnings"
            />
          </div>
          <h2>Expenses</h2>
          <div>
            <p>Available Balance- {{ getDifference }}</p>
          </div>
          <div class="warning">
            <span
              v-if="getDifference !== 0 && earnings > 0"
              class="alert-danger"
              >Can't submit untill all income is accounted for</span
            >

            <span class="alert-danger" v-else-if="errored">{{
              errResponse
            }}</span>
          </div>
          <div class="row outer">
            <div
              class="form-group inputRow col-md-9 col-sm-12"
              v-for="(expense, idx) in expenses"
              :key="idx"
            >
              <div class="col-md-4 dummy"></div>
              <div class="col-md-4 col-sm-6 key">
                <input
                  class="form-control"
                  placeholder="Expense"
                  v-model="expense.expensesKey"
                  type="text"
                />
              </div>
              <div class="col-md-4 col-sm-6 value">
                <input
                  class="form-control"
                  placeholder="Amount"
                  v-model.number="expense.expensesValue"
                  type="number"
                />
              </div>
            </div>
            <div class="form-group col-md-3 col-sm-12 addDelete">
              <button class="btn addExpense" type="button" @click="addInputs()">
                Add
              </button>
              <button
                v-if="expenses.length > 1"
                class="btn deleteInput ml-3"
                type="button"
                @click="deleteInputs()"
              >
                Delete
              </button>
            </div>
          </div>
          <div class="submit mb-5">
            <div v-if="getDifference == 0 && earnings > 0" class="row">
              <button
                class="btn submitButton"
                type="submit"
                @click.stop.prevent="submitBudget"
              >
                Submt
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "form",
  data() {
    return {
      earnings: "",
      expenses: [
        {
          expensesKey: "",
          expensesValue: null,
          subExpense: null,
        },
      ],
      result: "",
      isRead: true,
      identifier: "",
      errored: false,
      errResponse: "Something went wrong, please try again later",
    };
  },
  methods: {
    addInputs() {
      this.expenses.push({
        expensesKey: "",
        expensesValue: null,
        subExpense: null,
      });
    },
    deleteInputs() {
      this.expenses.pop();
    },
    submitBudget() {
      axios
        .post("/api/budget", {
          id: this.identifier,
          earnings: this.earnings,
          expenses: this.expenses,
        })
        .then((response) => {
          this.result = response;
          this.$router.push("/userprofile");
        })
        .catch((err) => {
          console.log(err);
          this.errored = true;
        });
    },
  },
  created() {
    axios
      .get("/api/budget", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((res) => {
        this.identifier = res.data._id;
      })
      .catch((err) => {
        console.log(err);
        this.errored = true;
      });
  },
  computed: {
    getTotal() {
      return this.expenses.reduce((acc, curr) => {
        acc += curr.expensesValue;
        return acc;
      }, 0);
    },
    getDifference() {
      return this.earnings - this.getTotal;
    },
  },
};
</script>

<style scoped>
.app {
  background-color: rgba(70, 88, 57, 0.253);
  height: 100vh;
}

.warning {
  margin-bottom: 15px;
}

.submitButton {
  background-color: rgb(9, 17, 129);
  color: wheat;
  box-shadow: 1px 1px 1px 1px black;
}

.addExpense {
  background-color: rgb(20, 95, 3);
  color: wheat;
  box-shadow: 1px 1px 1px 1px black;
}

.deleteInput {
  background-color: rgb(9, 17, 129);
  color: wheat;
  box-shadow: 1px 1px 1px 1px black;
}

.inputRow {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.addDelete {
  display: flex;
  justify-content: start;
  align-content: flex-start;
  align-items: flex-start;
}

.submit {
  display: flex;
  justify-content: center;
}

h1,
h2 {
  font-size: 30px;
}

@media (max-width: 767px) {
  h2 {
    font-size: 24px;
  }

  .dummy {
    display: none;
  }

  .inputRow {
    display: flex;
    justify-content: center;
    order: 2;
  }

  .addDelete {
    display: flex;
    justify-content: center;
    order: 1;
  }
}
</style>
