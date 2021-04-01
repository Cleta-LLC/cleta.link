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
              <h1 class="text-lead py-2">Create an account</h1>
              <p class="text-lead py-2">
                Create new account for free for early access.
              </p>
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
      <!-- Table -->
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-8">
          <div class="card bg-secondary border-0">
            <div class="card-header bg-transparent pb-5">
              <base-alert
                dismissible
                type="warning"
                icon="fas fa-exclamation-circle"
                v-if="
                  error &&
                    error !== 'An account with the given email already exists.'
                "
              >
                <strong>
                  {{ error.split(':')[1] }}
                </strong>
              </base-alert>

              <base-alert
                dismissible
                type="danger"
                icon="fas fa-lock"
                v-if="error"
              >
                <strong>
                  {{ error }}
                </strong>
                <NuxtLink to="/login"> Login to your account</NuxtLink>
              </base-alert>

              <div class="text-muted text-center mt-2 mb-4">
                <small>Sign up with</small>
              </div>
              <div class="text-center">
                <a href="#" class="btn btn-neutral btn-icon">
                  <span class="btn-inner--icon"
                    ><img src="~/static/img/icons/common/google.svg"
                  /></span>
                  <span class="btn-inner--text">Facebook</span>
                </a>
              </div>
            </div>

            <div class="card-body px-lg-5 py-lg-5">
              <div v-if="!$auth.isAuthenticated">
                <div class="text-center text-muted mb-4">
                  <small>Or sign up with your email</small>
                </div>
                <validation-observer
                  v-slot="{ handleSubmit }"
                  ref="formValidator"
                >
                  <!-- Register -->
                  <form
                    role="form"
                    v-if="step === steps.register"
                    @submit.prevent="handleSubmit(register)"
                  >
                    <base-input
                      alternative
                      class="mb-3"
                      prepend-icon="fas fa-user"
                      placeholder="Name or Artistic Name"
                      name="username"
                      :rules="{ required: true }"
                      v-model="model.username"
                    >
                    </base-input>
                    <!-- <base-input
                    alternative
                    class="mb-3"
                    prepend-icon="fas fa-phone"
                    placeholder="Phone"
                    name="Phone"
                    :rules="{ required: true, phone: true }"
                    v-model="model.phone_number"
                  >
                  </base-input> -->
                    <base-input
                      alternative
                      class="mb-3"
                      prepend-icon="ni ni-email-83"
                      placeholder="Email"
                      name="Email"
                      :rules="{ required: true, email: true }"
                      v-model="model.email"
                    >
                    </base-input>
                    <base-input
                      alternative
                      class="mb-3"
                      prepend-icon="ni ni-lock-circle-open"
                      placeholder="password"
                      type="password"
                      name="Password"
                      :rules="{ required: true, min: 10 }"
                      v-model="model.password"
                    >
                    </base-input>
                    <div class="row my-4">
                      <div class="col-12">
                        <base-input
                          :rules="{ required: { allowFalse: false } }"
                          name="Privacy"
                          Policy
                        >
                          <base-checkbox v-model="model.agree">
                            <span class="text-muted"
                              >I agree with the
                              <a href="https://cleta.link/privacy"
                                >Privacy Policy</a
                              ></span
                            >
                          </base-checkbox>
                        </base-input>
                      </div>
                    </div>
                    <div class="text-center">
                      <button
                        type="submit"
                        @onclick="register"
                        class="btn btn-success mt-4"
                      >
                        Create account
                      </button>
                    </div>
                  </form>
                  <!-- Confirm Registration -->
                  <form v-else @submit.prevent="handleSubmit(confirm)">
                    <div class="text-center text-muted mb-4">
                      <small>Confirm the code sent to your mail</small>
                    </div>
                    <base-input
                      alternative
                      class="mb-3"
                      prepend-icon="ni ni-email-83"
                      :placeholder="confirmForm.email"
                      name="Email"
                      :rules="{ required: true, email: true }"
                      v-model="confirmForm.email"
                    >
                    </base-input>
                    <base-input
                      alternative
                      class="mb-3"
                      prepend-icon="fas fa-code"
                      placeholder="Recovery Code"
                      name="code"
                      :rules="{ required: true }"
                      v-model="confirmForm.code"
                    >
                    </base-input>
                    <div class="text-center">
                      <button
                        type="submit"
                        @onclick="confirm"
                        class="btn btn-success mt-4"
                      >
                        Confirm
                      </button>
                    </div>
                  </form>
                </validation-observer>
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
</template>
<script>
const steps = {
  register: 'REGISTER',
  confirm: 'CONFIRM'
}
export default {
  // layout: 'AuthLayout',
  name: 'register',
  data: () => ({
    steps: { ...steps },
    step: steps.register,
    confirmForm: {
      email: '',
      code: ''
    },
    model: {
      email: '',
      password: '',
      name: '',
      agree: false
    },
    error: ''
  }),
  methods: {
    async register() {
      try {
        await this.$store.dispatch('auth/register', this.model)
        this.confirmForm.email = this.model.email
        this.step = this.steps.confirm
      } catch (error) {
        console.log({ error })
        this.error = error.message
      }
    },
    async confirm() {
      try {
        await this.$store.dispatch('auth/confirmRegistration', this.confirmForm)
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
<style></style>
