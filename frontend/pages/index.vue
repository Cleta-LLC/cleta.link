<template>
  <div>
    <!--Header-->
    <div class="header gradient-custom pt-5 pb-7">
      <div class="container">
        <div class="header-body">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="pr-5">
                <h1 class="display-2 text-white font-weight-bold mb-0">
                  Cleta.link
                </h1>
                <h2 class="display-4 text-white font-weight-light">
                  Chainlink Hackathon NFT Tools
                </h2>
                <p class="text-white mt-4">
                  Various NFT tools developed for the hackathon.
                </p>
                <div class="mt-5">
                  <nuxt-link to="/mint" class="btn btn-default my-2"
                    >Create a NFT</nuxt-link
                  >
                  <nuxt-link to="/metamask" class="btn btn-neutral my-2"
                    >Login to Metamask</nuxt-link
                  >
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="row pt-5">
                <div class="col-md-6">
                  <div class="card">
                    <div class="card-body">
                      <div
                        class="icon icon-shape bg-gradient-red text-white rounded-circle shadow mb-4"
                      >
                        <i class="ni ni-active-40"></i>
                      </div>
                      <h5 class="h3">Mint or Create NFTs</h5>
                      <p>
                        Upload any picture, photo, or video to a decentralized
                        network using filecoin.
                      </p>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-body">
                      <div
                        class="icon icon-shape bg-gradient-info text-white rounded-circle shadow mb-4"
                      >
                        <i class="ni ni-active-40"></i>
                      </div>
                      <h5 class="h3">Trade or Move</h5>
                      <p>
                        Fully compatible with other NTF Marketplaces like
                        OpenSea.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 pt-lg-5 pt-4">
                  <div class="card mb-4">
                    <div class="card-body">
                      <div
                        class="icon icon-shape bg-gradient-success text-white rounded-circle shadow mb-4"
                      >
                        <i class="ni ni-active-40"></i>
                      </div>
                      <h5 class="h3">Bid</h5>
                      <p>Bid on collections or individual items</p>
                    </div>
                  </div>
                  <div class="card mb-4">
                    <div class="card-body">
                      <div
                        class="icon icon-shape bg-gradient-warning text-white rounded-circle shadow mb-4"
                      >
                        <i class="ni ni-active-40"></i>
                      </div>
                      <h5 class="h3">Free</h5>
                      <p>
                        With the awesome technology from Chainlink we can deploy
                        the NFTs to our network fast. Only pay when you take
                        them out of the platmofm.
                      </p>
                    </div>
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
    <section class="py-7 section-nucleo-icons bg-white overflow-hidden">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <h2 class="display-3">NFT Tools</h2>
            <p class="lead">
              With Chainlink we can mint, sell, and trade NFTs for a fraction of
              the cost with performance gains. Learn more at
              <a href="https://docs.chain.link">chain.link</a>.
            </p>
            <div class="btn-wrapper">
              <NuxtLink class="btn btn-primary" to="/mint">
                Mint a NFT
              </NuxtLink>
              <NuxtLink class="btn btn-default mt-3 mt-md-0" to="/login">
                Login
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="blur--hover">
          <a
            href="https://demos.creative-tim.com/nuxt-argon-dashboard-pro/documentation/foundation/icons.html"
          >
            <div class="icons-container blur-item mt-5">
              <!-- Center -->
              <i class="icon ni ni-diamond"></i>
              <!-- Right 1 -->
              <i class="icon icon-sm ni ni-album-2"></i>
              <i class="icon icon-sm ni ni-app"></i>
              <i class="icon icon-sm ni ni-atom"></i>
              <!-- Right 2 -->
              <i class="icon ni ni-bag-17"></i>
              <i class="icon ni ni-bell-55"></i>
              <i class="icon ni ni-credit-card"></i>
              <!-- Left 1 -->
              <i class="icon icon-sm ni ni-briefcase-24"></i>
              <i class="icon icon-sm ni ni-building"></i>
              <i class="icon icon-sm ni ni-button-play"></i>
              <!-- Left 2 -->
              <i class="icon ni ni-calendar-grid-58"></i>
              <i class="icon ni ni-camera-compact"></i>
              <i class="icon ni ni-chart-bar-32"></i>
            </div>
            <span class="blur-hidden h5 text-success"
              >Eplore all the 21.000+ Nucleo Icons</span
            >
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { Tooltip } from 'element-ui'
export default {
  layout: 'AuthLayout',
  name: 'home-page',
  components: {
    [Tooltip.name]: Tooltip
  }
}
</script>
<style lang="scss" scoped>
.gradient-custom {
  /* fallback for old browsers */
  background: #fa709a;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(
    to right,
    rgba(250, 112, 154, 1),
    rgba(254, 225, 64, 1)
  );

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(
    to right,
    rgba(250, 112, 154, 1),
    rgba(254, 225, 64, 1)
  );
}
</style>
