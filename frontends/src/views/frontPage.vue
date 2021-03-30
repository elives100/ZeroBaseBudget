<template>
  <div class="frontPage">
    <!-- <component :is="component"></component>-->
    <!--   <div v-if="errored">
      <span class="sorryMessage">
        We're sorry, we're not able to process request at the moment
        <br />
      </span>
    </div>-->
    <div class="container-fluid">
      <div class="row title">
        <h3>{{ userInfo.name }}</h3>
      </div>
      <div class="row pageBody">
        <div class="col-6 left">
          <img class="mb-4" src="@/assets/budget1.jpg" width="200" />
          <instructions></instructions>
        </div>
        <div class="col-6 right">
          <budget-form></budget-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import axios from "axios";
/*import navbarCheck from "../components/navbars/navCheck.vue";
import navCreate from "../components/navbars/navCreate.vue";*/
import BudgetForm from "../components/budgetForm.vue";
import Panel from "../components/panel";
export default {
  components: {
    "budget-form": BudgetForm,
    instructions: Panel,
  },
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("loadExpenses");
  },
  computed: {
    userInfo() {
      return this.$store.state.expenseProfile;
    },
  },
};
</script>

<style scoped>
.frontPage {
  height: 100vh;
  background-image: linear-gradient(
    to bottom right,
    rgb(90, 133, 80),
    rgb(157, 158, 97)
  );
}

.container-fluid {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}

.pageBody {
  flex: 5;
}

.left {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}

img {
  border-radius: 100px;
}
</style>
