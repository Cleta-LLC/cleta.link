<template>
  <div>
    <!-- Header -->
    <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
      <div class="container">
        <div class="header-body text-center mb-7">
          <div class="row justify-content-center">
            <div class="col-xl-5 col-lg-6 col-md-8 px-5">
              <NuxtLink to="/">
                <img
                  height="60px"
                  contain
                  alt="cleta banner logo"
                  src="/cleta_banner_638x224.png"
                /><img />
              </NuxtLink>
              <h1 class="text-lead py-4">
                Login to your account or create a new one for free
              </h1>
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
    <!-- Page content -->
    <div class="container mt--8 pb-5">
      <div class="row justify-content-center">
        <div class="col-lg-5 col-md-7">
          <div class="card bg-secondary border-0 mb-0">
            <div class="card-header bg-transparent pb-5">
              <!-- not exists -->
              <div class="alert" v-if="error === 'User does not exist.'">
                <base-alert
                  dismissible
                  type="danger"
                  icon="fas fa-question"
                  v-if="error === 'User does not exist.'"
                >
                  <strong> {{ error }} </strong>
                  <NuxtLink to="/register">Create an account</NuxtLink>
                </base-alert>
              </div>
              <!-- not confirmed -->
              <div class="alert" v-else-if="error === 'User is not confirmed.'">
                <base-alert dismissible type="warning" icon="fas fa-question">
                  <strong> {{ error }} </strong>
                  <NuxtLink to="/recovery">Confirm your account</NuxtLink>
                </base-alert>
              </div>
              <!-- other  error -->
              <div class="alert" v-else-if="error">
                <base-alert dismissible type="danger" icon="fas fa-lock">
                  <strong> {{ error }} </strong>
                </base-alert>
              </div>

              <div class="text-muted text-center mt-2 mb-3">
                <small>Sign in with</small>
              </div>
              <div class="btn-wrapper text-center">
                <a href="#" class="btn btn-neutral btn-icon">
                  <span class="btn-inner--icon"
                    ><img src="~/static/img/icons/common/google.svg"
                  /></span>
                  <span class="btn-inner--text">Facebook</span>
                </a>
              </div>
            </div>
            <div class="card-body px-lg-5 py-lg-5">
              <div class="text-center text-muted mb-4">
                <small>Or sign in with credentials</small>
              </div>
              <validation-observer
                v-slot="{ handleSubmit }"
                ref="formValidator"
              >
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

                  <!-- <base-checkbox v-model="model.rememberMe"
                    >Remember me</base-checkbox
                  > -->
                  <div class="text-center">
                    <base-button
                      type="primary"
                      native-type="submit"
                      class="my-4"
                      @onclick="login"
                      >Sign in</base-button
                    >
                  </div>
                </form>
              </validation-observer>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-6">
              <router-link to="/recovery" class="text-light"
                ><small>Forgot password?</small></router-link
              >
            </div>
            <div class="col-6 text-right">
              <router-link to="/register" class="text-light"
                ><small>Create new account</small></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    model: {
      email: '',
      password: '',
      rememberMe: false
    },
    error: ''
  }),
  methods: {
    async login() {
      try {
        await this.$store.dispatch('auth/login', this.model)
        this.$router.push('/')
      } catch (error) {
        console.log({ error })
        this.error = error.message
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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
