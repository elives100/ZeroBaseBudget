<template>
  <div class="home">
    <div class="container-fluid">
      <h1>Budgeting App</h1>
      <hr />
      <h2>Sign in</h2>
      <a
        class="btn btn-danger"
        target="_self"
        href="http://localhost:3000/auth/usergoogle"
        style="width:12em;"
      >Sign in with Google</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
h1 {
  margin: 60px;
}
h2 {
  margin: 40px;
}
</style>
