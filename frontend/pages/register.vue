<template>
  <div>
    <!-- Header -->
    <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
      <div class="container">
        <div class="header-body text-center mb-7">
          <div class="row justify-content-center">
            <div class="col-xl-5 col-lg-6 col-md-8 px-5">
              <h1 class="text-white">Create an account</h1>
              <p class="text-lead text-white">
                Use these awesome forms to login or create new account in your
                project for free.
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

      <div v-if="error">
        <base-alert dismissible type="danger" icon="ni ni-like-2">
          {{ error }}
          <NuxtLink to="/login">
            Sign In Here
          </NuxtLink>
        </base-alert>
      </div>
    </div>

    <!-- Page content -->
    <div class="container mt--8 pb-5">
      <!-- Table -->
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-8">
          <div class="card bg-secondary border-0">
            <div class="card-header bg-transparent pb-5">
              <div class="text-muted text-center mt-2 mb-4">
                <small>Sign up with</small>
              </div>
              <div class="text-center">
                <a href="#" class="btn btn-neutral btn-icon mr-4">
                  <span class="btn-inner--icon"
                    ><img src="~/static/img/icons/common/github.svg"
                  /></span>
                  <span class="btn-inner--text">Github</span>
                </a>
                <a href="#" class="btn btn-neutral btn-icon">
                  <span class="btn-inner--icon"
                    ><img src="~/static/img/icons/common/google.svg"
                  /></span>
                  <span class="btn-inner--text">Google</span>
                </a>
              </div>
            </div>
            <div class="card-body px-lg-5 py-lg-5">
              <!-- Unauthenticated -->

              <!-- <div v-if="!$auth.isAuthenticated"> -->
              <div class="text-center text-muted mb-4">
                <small>Or sign up with credentials</small>
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
                    :rules="{ required: true, min: 6 }"
                    v-model="model.password"
                  >
                  </base-input>
                  <!-- <div class="text-muted font-italic">
                    <small
                      >password strength:
                      <span class="text-success font-weight-700"
                        >strong</span
                      ></small
                    >
                  </div> -->
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
                            <a href="https://cleta.io/privacy"
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
                      class="btn btn-primary mt-4"
                    >
                      Create account
                    </button>
                  </div>
                </form>

                <!-- Confirm Registration -->
                <form v-else @submit.prevent="handleSubmit(register)">
                  <!-- @submit.prevent="confirm"> -->
                  <input
                    v-model="confirmForm.email"
                    type="email"
                    placeholder="Email"
                    class="form-control"
                  />
                  <input
                    v-model="confirmForm.code"
                    placeholder="Code"
                    class="form-control"
                  />
                  <button type="submit" class="button--green">Confirm</button>
                </form>
              </validation-observer>
            </div>
            <!-- Authenticated -->
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
      name: '',
      email: '',
      password: '',
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
        await this.$store.dispatch('auth/login', this.registerForm)
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
