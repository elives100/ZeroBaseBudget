<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <div class="navbar-brand">Budgeting App</div>

    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar1"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar1">
        <ul class="navbar-nav nav nav-pills ml-auto">
          <li class="nav-item">
            <router-link class="nav-link profile" to="/userprofile">
              <span>Profile</span>
            </router-link>
          </li>
          <li class="nav-item">
            <slot></slot>
          </li>
          <li class="nav-item">
            <a
              target="_self"
              href="https://zerobudget.herokuapp.com/auth/logout"
              class="btn logout"
              >Logout</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navBar",
};
</script>

<style scoped>
.create {
  text-decoration: underline;
}

.logout {
  background-color: rgb(104, 0, 0);
  color: wheat;
  box-shadow: 3px 3px 3px rgb(25, 26, 25);
}

.profile {
  background-color: rgb(9, 17, 129);
  box-shadow: 3px 3px 3px rgb(25, 26, 25);
}

span {
  color: wheat;
}
</style>
