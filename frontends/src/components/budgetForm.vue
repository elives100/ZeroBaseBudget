<template>
  <div class="app">
    <h1>Budget Form</h1>
    <div class="container mt-5 pt-2">
      <form>
        <div class="form-group">
          <label for="monthlypay">Monthly pay</label>
          <br />
          <input
            class="w-10"
            type="number"
            name="monthlypay"
            id="monthlypay"
            v-model="earnings"
            v-int
          />
        </div>
        <div></div>
        <div class="container-fluid">
          <div class="form-group col-md-12 col-sm-12 addDelete">
            <button class="btn addExpense" type="button" @click="addInputs">
              Add
            </button>
            <button
              v-if="expenses.length > 1"
              class="btn deleteInput ml-1"
              type="button"
              @click="deleteInputs"
            >
              Delete
            </button>
          </div>
          <div
            class="row inputRow"
            v-for="(expense, idx) in expenses"
            :key="idx"
          >
            <div class="col-md-6 col-sm-6 mb-1">
              <input
                class="form-control"
                placeholder="Expense"
                :value="expense.expensesKey"
                @input="updateKey($event, idx)"
                type="text"
              />
            </div>
            <div class="col-md-6 col-sm-6">
              <input
                class="form-control"
                placeholder="Amount"
                :value="expense.expensesValue"
                @input="updateValue($event, idx)"
                type="number"
                v-int
              />
            </div>
          </div>
          <div class="submit py-3">
            <!-- v-if="getDifference == 0 && earnings > 0" -->
            <div class="row">
              <button
                class="btn submitButton"
                type="submit"
                @click.stop.prevent="submitBudget"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "form",
  data() {
    return {};
  },
  methods: {
    addInputs() {
      this.$store.commit("ADD_EXPENSEINPUT");
    },
    deleteInputs() {
      this.$store.commit("DELETE_EXPENSEINPUT");
    },
    submitBudget() {
      this.$store.dispatch("addBudget");
      console.log("triggers");
    },
    updateKey(event, idx) {
      const val = {
        expenseKeyValue: event.target.value,
        index: idx,
      };
      this.$store.commit("UPDATE_KEYS", val);
    },
    updateValue(event, idx) {
      const val = {
        expenseValueValue: event.target.value,
        index: idx,
      };
      this.$store.commit("UPDATE_VALUE", val);
    },
  },
  computed: {
    expenses() {
      return this.$store.state.expenses;
    },
    earnings: {
      get() {
        return this.$store.state.earnings;
      },
      set(value) {
        this.$store.commit("UPDATE_EARNINGS", value);
      },
    },
    /* getTotal() {
      return this.$store.state.expenses.reduce((acc, curr) => {
        acc += curr.expensesValue;
        return acc;
      }, 0);
    },
    getDifference() {
      return this.earnings - this.getTotal;
    },*/
  },
};
</script>

<style scoped>
.container {
  background-image: linear-gradient(
    to top left,
    rgb(90, 133, 80),
    rgb(110, 110, 71)
  );
  border-radius: 30px;
  width: 300px;
}

.submitButton {
  background-color: rgb(9, 17, 129);
  color: wheat;
  box-shadow: 1px 1px 2px 2px rgb(44, 41, 41);
}

.addExpense {
  background-color: rgb(20, 95, 3);
  color: wheat;
  padding: 4px;
  box-shadow: 1px 1px 2px 2px rgb(44, 41, 41);
}

.deleteInput {
  background-color: rgb(9, 17, 129);
  color: wheat;
  box-shadow: 1px 1px 2px 2px rgb(44, 41, 41);
  padding: 3px;
}

.submit {
  display: flex;
  justify-content: center;
}

h1 {
  font-size: 30px;
}
h2 {
  font-size: 22px;
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
