<template>
  <div>
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
              <h1 class="text-lead py-2">Recover your account</h1>
              <h3 class="text-lead py-2">
                Please use the following form below to recover or confirm your
                account.
              </h3>
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
        <div class="col-lg-6 col-md-8 mt--8">
          <div v-if="!$auth.isAuthenticated">
            <amplify-authenticator>
              <amplify-forgot-password
                header-text="Please enter your Cleta username"
                slot="forgot-password"
              ></amplify-forgot-password>
            </amplify-authenticator>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    error: ''
  })
}
</script>

<style></style>
