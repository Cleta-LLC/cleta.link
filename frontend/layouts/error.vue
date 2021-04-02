<template>
  <div>
    <div class="bg-default">
      <!-- Header -->
      <div class="header bg-success py-7 py-lg-8 pt-lg-9">
        <div class="container">
          <div class="header-body text-center mb-7">
            <div class="row justify-content-center">
              <div class="col-xl-5 col-lg-6 col-md-8 px-5">
                <h1 class="text-white">Ooops!</h1>
                <p class="text-lead text-white">
                  Page not found. Either by mistake or purpose, go back to the
                  frontpage.
                </p>

                <nuxt-link to="/" class="font-weight-bold text-white mt-5"
                  >Back to frontpage</nuxt-link
                >
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
      <section class="py-6">
        <div class="container">
          <div class="row row-grid align-items-center">
            <div class="col-md-6">
              <img src="img/theme/landing-2.png" class="img-fluid" />
            </div>
            <div class="col-md-6">
              <div class="pr-md-5">
                <h1 class="text-light">Explore random art</h1>
                <p class="text-light">
                  If you want to get inspiration or before jumping to start
                  creating your own NFTs with Cleta. Or maybe you're lost...
                  aren't we all?
                </p>
                <nuxt-link
                  to="/random"
                  class="font-weight-bold text-warning mt-5"
                  >Explore random page
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'AuthLayout'
}
</script>
