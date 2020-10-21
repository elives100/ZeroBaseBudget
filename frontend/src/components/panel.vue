<template>
  <div class="container">
    <div class="card-deck">
      <div class="card">
        <div class="card-header ">
          <h5>Write Down Your Total Income</h5>
        </div>
        <div class="card-body">
          <p class="card-text">
            This is your total take-home pay. Include everything such as
            full-time jobs, second jobs, freelance pay, Social Security checks
            etc.
          </p>
        </div>
      </div>
      <span class="arrowRight">&rarr;</span>
      <div class="card">
        <div class="card-header ">
          <h5>List Your Expense</h5>
        </div>
        <div class="card-body">
          <p class="card-text">
            Think about your bills that are due for the month. Plus other costs
            like groceries, entertainment, clothing, etc.
          </p>
        </div>
      </div>
            <span class="arrowRight">&rarr;</span>
      <div class="card">
        <div class="card-header ">
          <h5>Submit</h5>
        </div>
        <div class="card-body">
          <p class="card-text">
            Once your income minus your expenditures equals zero by the end of
            the month
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "panel",
  data() {
    return {};
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}

.card{
  background-color:rgb(20, 95, 3);
  padding: 10px;
  line-height: 25px;
  border-radius: 25px;
  color: wheat;
}

.arrowRight{
  font-size: 40px;
}

.card-deck{
  display: flex;
  align-items: center;
}

@media only screen and (max-width: 414px) {
  .card {
    width: 15rem;
  }

  .card-text {
    font-size: 15px;
  }
}
</style>
