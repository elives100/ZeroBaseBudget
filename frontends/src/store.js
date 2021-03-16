import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "./router";

Vue.use(Vuex);

const mainURI = "/api/budget";
const expenseObj = {
  expensesKey: "",
  expensesValue: null,
  subExpense: null,
};

export const store = new Vuex.Store({
  state: {
    earnings: null,
    expenseProfile: [],
    expenses: [
      {
        expensesKey: "",
        expensesValue: null,
        subExpense: null,
      },
    ],
    newBudget: [],
  },
  getters: {
    earnings: (state) => {
      return state.expenseProfile.budget[0].earnings;
    } /*
    expenseData: (state) => {
      return state.expenseProfile.budget[0].expenses;
    } */,
    subTracker(state) {
      return state.expenseProfile.budget[0].expenses.reduce((acc, curr) => {
        acc += Number(curr.subExpense);
        return acc;
      }, 0);
    },
  },
  actions: {
    loadExpenses({ commit }) {
      axios
        .get(mainURI, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        })
        .then((res) => {
          console.log(res.data);
          let expenseData = res.data;
          commit("GRAB_BUDGET", expenseData);
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    addBudget({ commit, state }) {
      axios
        .post(mainURI, {
          id: state.expenseProfile._id,
          earnings: state.earnings,
          expenses: state.expenses,
        })
        .then((res) => {
          router.push({ path: "/userprofile" });

          console.log(res.data.budget[0]);
          let newExpense = res.data.budget[0];
          commit("SUBMIT_BUDGET", newExpense);
        });
    },
    addNewBudget({ commit, state }) {
      axios
        .put(mainURI, {
          id: state.expenseProfile._id,
          earning: state.expenseProfile.budget[0].earnings,
          expense: state.expenseProfile.budget[0].expenses,
        })
        .then((res) => {
          console.log("works so far");
          console.log(res.data);
          console.log("after");
          let newExpense = res.data;
          commit("SUBMIT_BUDGET", newExpense);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mutations: {
    GRAB_BUDGET: (state, payload) => (state.expenseProfile = payload),
    SUBMIT_BUDGET: (state, payload) => (state.newBudget = payload),
    ADD_EXPENSEINPUT: (state) => state.expenses.push({ ...expenseObj }),
    DELETE_EXPENSEINPUT: (state) => state.expenses.pop(),
    UPDATE_EARNINGS(state, earnings) {
      state.earnings = earnings;
    },
    UPDATE_KEYS(state, payload) {
      Vue.set(
        state.expenses[payload.index],
        "expensesKey",
        payload.expenseKeyValue
      );
    },
    UPDATE_VALUE(state, payload) {
      Vue.set(
        state.expenses[payload.index],
        "expensesValue",
        payload.expenseValueValue
      );
    },
    UPDATE_SUB(state, payload) {
      Vue.set(
        state.expenseProfile.budget[0].expenses[payload.index],
        "subExpense",
        payload.subberExpense
      );
    },
    UPDATE_EXPENSE(state, payload) {
      state.expenseProfile.budget[0].expenses = payload.updExpense;
      state.expenseProfile.budget[0].earnings = payload.updEarnings;
    },
  },
});
