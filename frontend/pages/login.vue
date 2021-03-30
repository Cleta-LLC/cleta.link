<template>
  <div>
    <!-- Header -->
    <div class="header gradient-custom py-3 py-lg-8 pt-lg-9">
      <div class="container">
        <div class="header-body text-center mb-7">
          <div class="row justify-content-center">
            <div class="col-xl-5 col-lg-6 col-md-8 px-5">
              <div class="max-w-md mx-auto pt-6">
                <h1 class="text-white">Welcome to Cleta</h1>
                <p class="text-lead text-white">
                  Please create a free account
                </p>
                <h1 class="text-xl mb-3">Login</h1>
                <div class="card-body px-lg-5 py-lg-5">
                  <div class="text-center text-muted mb-4">
                    <small>Or sign in with credentials</small>
                  </div>

                  <div v-if="!$auth.isAuthenticated">
                    <validation-observer
                      v-slot="{ handleSubmit }"
                      ref="formValidator"
                    >
                      <!-- <form @submit.prevent="login"> -->

                      <form role="form" @submit.prevent="handleSubmit(login)">
                        <base-input
                          alternative
                          class="mb-3"
                          name="Email"
                          :rules="{ required: true, email: true }"
                          prepend-icon="ni ni-email-83"
                          placeholder="Email"
                          v-model="model.email"
                        >
                        </base-input>

                        <base-input
                          alternative
                          class="mb-3"
                          name="Password"
                          :rules="{ required: true, min: 6 }"
                          prepend-icon="ni ni-lock-circle-open"
                          type="password"
                          placeholder="Password"
                          v-model="model.password"
                        >
                        </base-input>

                        <base-checkbox v-model="model.rememberMe"
                          >Remember me</base-checkbox
                        >
                        <div class="text-center">
                          <base-button
                            type="primary"
                            native-type="submit"
                            class="my-4"
                            >Sign in</base-button
                          >

                          <button type="submit" class="button--green">
                            Login
                          </button>
                        </div>
                      </form>
                    </validation-observer>
                    <!-- Unauthenticated -->

                    <nuxt-link to="/register"
                      >Need an account? Register</nuxt-link
                    >
                  </div>

                  <!-- Authenticated -->
                  <div v-else>
                    You're logged in as {{ $auth.email }}.
                    <button
                      @click="$store.dispatch('auth/logout')"
                      class="button--green"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="separator separator-bottom separator-skew zindex-100">
        <svg
          x="0"
          y="0"
          viewBox="0 0 2560 100"
          preserveAspectRatio="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            class="fill-default"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </div>
    <!-- <img
          height="40px"
          contain
          alt="cleta banner logo"
          src="/cleta_banner_638x224.png"
        /><img /> -->
  </div>
</template>

<script>
export default {
  data: () => ({
    model: {
      email: '',
      password: '',
      rememberMe: false
    }
  }),
  methods: {
    async login() {
      try {
        await this.$store.dispatch('auth/login', this.form)
        this.$router.push('/')
      } catch (error) {
        console.log({ error })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
:root {
  --amplify-primary-color: #e08f8c;
  --amplify-primary-tint: #f47e57;
  --amplify-primary-shade: #d47867;
}
.gradient-custom {
  /* fallback for old browsers */
  background: #6a85b6;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(
    to bottom,
    rgba(106, 133, 182, 1),
    rgba(186, 200, 224, 1)
  );

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(
    to bottom,
    rgba(106, 133, 182, 1),
    rgba(186, 200, 224, 1)
  );
}
</style>
