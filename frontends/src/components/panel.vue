<template>
  <div class="container">
    <div class="pb-3">
      <h5>Write Down Your Total Income</h5>
      <p>
        This is your total take-home pay. Include everything such as full-time
        jobs, second jobs, freelance pay, Social Security checks etc.
      </p>
    </div>
    <div class="pb-3">
      <h5>List Your Expense</h5>
      <p>
        Think about your bills that are due for the month. Plus other costs like
        groceries, entertainment, clothing, etc.
      </p>
    </div>
    <div>
      <h5>Submit</h5>
      <p>
        Once your income minus your expenditures equals zero by the end of the
        month
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "panel",
  data() {
    return {};
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h5 {
  font-size: 16px;
}

p {
  font-size: 13px;
}

@media only screen and (max-width: 484px) {
  .card {
    width: 13rem;
  }

  .card-text {
    font-size: 12px;
  }

  h5 {
    font-size: 17px;
  }
}
</style>
