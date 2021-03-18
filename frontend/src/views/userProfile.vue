<template>
  <div id="app" class="profilePage">
    <nav-bar>
      <router-link
        v-if="component === 'navbar-check'"
        class="nav-link mybudg"
        to="/mybudget"
        >My Budget</router-link
      >
      <router-link v-else class="nav-link mybudg" to="/budgetform"
        >Create Budget</router-link
      >
    </nav-bar>
    <expense-form v-if="component === 'navbar-check'"></expense-form>
    <div class="col" v-else>
      <div class="panel">
        <panel></panel>
      </div>
      <div class="createButton mt-5">
        <router-link class="goToForm" tag="button" to="/budgetform"
          >Create Budget</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import exForm from "../components/expForm.vue";
import navbar from "../components/navbar.vue";
export default {
  components: {
    "nav-bar": navbar,
    "expense-form": exForm,
  },
  data() {
    return {
      component: "",
    };
  },
  methods: {},
  beforeRouteEnter(to, from, next) {
    axios
      .get("/api/budget", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((res) => {
        next((vm) => {
          console.log("it works");
          if (res.data.budget.length > 0) {
            vm.component = "navbar-check";
            console.log("if");
          } else {
            vm.component = "navbar";
            console.log("else");
          }
        });
      })
      .catch((err) => {
        next((vm) => {
          console.log(err.response);
          vm.errored = true;
        });
      });
  },
};
</script>

<style scoped>
.profilePage {
  min-height: 100vh;
  background-color: rgb(239, 235, 243);
  display: flex;
  flex-direction: column;
}

.col {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.goToForm {
  padding: 15px;
  border: 1px;
  border-radius: 20px;
  box-shadow: 3px 3px 3px rgb(25, 26, 25);
}
</style>
