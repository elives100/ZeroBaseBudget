<template>
  <div class="home">
    <div class="signIn">
      <div class="card">
        <div class="card-header">
          <h2>Budgeting App</h2>
        </div>
        <div class="card-body">
          <h5 class="card-title">Sign In</h5>
          <a
            class="btn btn-outline-dark"
            href="http://localhost:3000/auth/usergoogle"
            style="text-transform:none"
          >
            <img
              width="20px"
              style="margin-bottom:3px; margin-right:5px"
              alt="Google sign-in"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
            />
            Login with Google
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.home {
  background-image: linear-gradient(
    to bottom right,
    rgb(90, 133, 80),
    rgb(157, 158, 97)
  );
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  background-image: linear-gradient(
    to top left,
    rgb(90, 133, 80),
    rgb(157, 158, 97)
  );
  border-radius: 30px;
  padding: 30px;
  box-shadow: 1px 1px 2px 2px rgb(0, 0, 0);
}

.card-header {
  background-color: rgba(87, 102, 62, 0);
}

.btn {
  box-shadow: 1px 1px 1px 1px;
  margin: 15px;
}
</style>
