<template>
  <div>
    <!--Header-->
    <div class="header bg-orange pt-5 pb-7">
      <div class="container">
        <div class="header-body">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="pr-5">
                <h1 class="display-2 text-white font-weight-bold mb-0">Cleta.link</h1>
                <h2 class="display-4 text-white font-weight-light">Chainlink Hackathon NFT Tools</h2>
                <p class="text-white mt-4">Various NFT tools developed for the hackathon.</p>
                <div class="mt-5">
                  <nuxt-link to="/mint" class="btn btn-default my-2">Create a NFT</nuxt-link>
                  <nuxt-link to="/metamask" class="btn btn-neutral my-2">Login to Metamask</nuxt-link>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="row pt-5">
                <div class="col-md-6">
                  <div class="card">
                    <div class="card-body">
                      <div class="icon icon-shape bg-gradient-red text-white rounded-circle shadow mb-4">
                        <i class="ni ni-active-40"></i>
                      </div>
                      <h5 class="h3">Mint or Create NFTs</h5>
                      <p>Upload any picture, photo, or video to a decentralized network using filecoin.</p>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-body">
                      <div class="icon icon-shape bg-gradient-info text-white rounded-circle shadow mb-4">
                        <i class="ni ni-active-40"></i>
                      </div>
                      <h5 class="h3">Trade or Move</h5>
                      <p>Fully compatible with other NTF Marketplaces like OpenSea.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 pt-lg-5 pt-4">
                  <div class="card mb-4">
                    <div class="card-body">
                      <div class="icon icon-shape bg-gradient-success text-white rounded-circle shadow mb-4">
                        <i class="ni ni-active-40"></i>
                      </div>
                      <h5 class="h3">Bid</h5>
                      <p>Bid on collections or individual items</p>
                    </div>
                  </div>
                  <div class="card mb-4">
                    <div class="card-body">
                      <div class="icon icon-shape bg-gradient-warning text-white rounded-circle shadow mb-4">
                        <i class="ni ni-active-40"></i>
                      </div>
                      <h5 class="h3">Free</h5>
                      <p>With the awesome technology from Chainlink we can deploy the NFTs to our network fast.
                        Only pay when you take them out of the platmofm.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>
    <!-- Page content -->
    <!-- <section class="py-6 pb-9 bg-default">
      <div class="row justify-content-center text-center">
        <div class="col-md-6">
          <h2 class="display-3 text-white"> Harness the power of off-chain data Hackathon</h2>
          <p class="lead text-white">
Build and showcase any innovative DeFi, NFT, Gaming, or universally connected dApp you can imagine using the industry's leading oracle network.
          </p>
        </div>
      </div>
    </section>
    <section class="section section-lg pt-lg-0 mt--7">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="row">
              <div class="col-lg-4">
                <div class="card card-lift--hover shadow border-0">
                  <div class="card-body py-5">
                    <div class="icon icon-shape bg-gradient-primary text-white rounded-circle mb-4">
                      <i class="ni ni-check-bold"></i>
                    </div>
                    <h4 class="h3 text-primary text-uppercase">Based on Bootstrap 4</h4>
                    <p class="description mt-3">Argon is built on top of the most popular open source toolkit for developing with HTML, CSS, and JS.</p>
                    <div>
                      <span class="badge badge-pill badge-primary">bootstrap 4</span>
                      <span class="badge badge-pill badge-primary">dashboard</span>
                      <span class="badge badge-pill badge-primary">template</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="card card-lift--hover shadow border-0">
                  <div class="card-body py-5">
                    <div class="icon icon-shape bg-gradient-success text-white rounded-circle mb-4">
                      <i class="ni ni-istanbul"></i>
                    </div>
                    <h4 class="h3 text-success text-uppercase">Integrated build tools</h4>
                    <p class="description mt-3">Use Argons's included npm and gulp scripts to compile source code, run tests, and more with just a few simple commands.</p>
                    <div>
                      <span class="badge badge-pill badge-success">npm</span>
                      <span class="badge badge-pill badge-success">gulp</span>
                      <span class="badge badge-pill badge-success">build tools</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="card card-lift--hover shadow border-0">
                  <div class="card-body py-5">
                    <div class="icon icon-shape bg-gradient-warning text-white rounded-circle mb-4">
                      <i class="ni ni-planet"></i>
                    </div>
                    <h4 class="h3 text-warning text-uppercase">Full Sass support</h4>
                    <p class="description mt-3">Argon makes customization easier than ever before. You get all the tools to make your website building process a breeze.</p>
                    <div>
                      <span class="badge badge-pill badge-warning">sass</span>
                      <span class="badge badge-pill badge-warning">design</span>
                      <span class="badge badge-pill badge-warning">customize</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-6 bg-secondary">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-6 order-md-2">
            <img src="~/static/img/theme/landing-1.png" class="img-fluid" alt="Landing image">
          </div>
          <div class="col-md-6 order-md-1">
            <div class="pr-md-5">
              <h1>Awesome features</h1>
              <p>This dashboard comes with super cool features that are meant to help in the process. Handcrafted components, page examples and functional widgets are just a few things you will see and love at first sight.</p>
              <ul class="list-unstyled mt-5">
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <div>
                      <div class="badge badge-circle badge-success mr-3">
                        <i class="ni ni-settings-gear-65"></i>
                      </div>
                    </div>
                    <div>
                      <h4 class="mb-0">Carefully crafted components</h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <div>
                      <div class="badge badge-circle badge-success mr-3">
                        <i class="ni ni-html5"></i>
                      </div>
                    </div>
                    <div>
                      <h4 class="mb-0">Amazing page examples</h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <div>
                      <div class="badge badge-circle badge-success mr-3">
                        <i class="ni ni-satisfied"></i>
                      </div>
                    </div>
                    <div>
                      <h4 class="mb-0">Super friendly support team</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-6">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-6">
            <img src="~/static/img/theme/landing-2.png" class="img-fluid" alt="Landing image 2">
          </div>
          <div class="col-md-6">
            <div class="pr-md-5">
              <h1>Example pages</h1>
              <p>If you want to get inspiration or just show something directly to your clients, you can jump start your development with our pre-built example pages.</p>
              <nuxt-link to="/pages/user" class="font-weight-bold text-warning mt-5">Explore pages</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-6">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-6 order-md-2">
            <img src="~/static/img/theme/landing-3.png" class="img-fluid" alt="Landing image 3">
          </div>
          <div class="col-md-6 order-md-1">
            <div class="pr-md-5">
              <h1>Lovable widgets and cards</h1>
              <p>We love cards and everybody on the web seems to. We have gone above and beyond with options for you to organise your information. From cards designed for content, to pricing cards or user profiles, you will have many options to choose from.</p>
              <nuxt-link to="/widgets" class="font-weight-bold text-info mt-5">Explore widgets</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <section class="py-7 section-nucleo-icons bg-white overflow-hidden">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <h2 class="display-3">NFT Tools</h2>
            <p class="lead">
              With Chainlink we can mint, sell, and trade NFTs for a fraction of the cost with performance gains. Learn more at
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
          <a href="https://demos.creative-tim.com/nuxt-argon-dashboard-pro/documentation/foundation/icons.html">
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
            <span class="blur-hidden h5 text-success">Eplore all the 21.000+ Nucleo Icons</span>
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
  };
</script>
