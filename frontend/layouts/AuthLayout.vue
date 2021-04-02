<template>
  <div :class="layoutClass" class="auth-layout">
    <base-nav
      v-model="showMenu"
      type="light"
      :transparent="true"
      menu-classes="justify-content-end"
      class="navbar-horizontal navbar-main"
      expand="lg"
    >
      <div slot="brand" class="navbar-wrapper">
        <nuxt-link class="navbar-brand" to="/">
          <img src="img/brand/white.png" alt="Cleta Logo white" />
        </nuxt-link>
      </div>

      <template>
        <div class="navbar-collapse-header">
          <div class="row">
            <div class="col-6 collapse-brand">
              <nuxt-link to="/">
                <img src="img/brand/green.png" alt="Cleta Logo green" />
              </nuxt-link>
            </div>
            <div class="col-6 collapse-close">
              <button
                type="button"
                class="navbar-toggler"
                @click="showMenu = false"
              >
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>

        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <nuxt-link to="/dashboard" class="nav-link">
              <span class="nav-link-inner--text">Dashboard</span>
            </nuxt-link>
          </li>
          <li class="nav-item">
            <!-- Not Authenticated go to login else go to profile -->
            <div v-if="!$auth.isAuthenticated">
              <nuxt-link to="/login" class="nav-link">
                <span class="nav-link-inner--text">Login</span>
              </nuxt-link>
            </div>
            <div v-else>
              <nuxt-link to="/profile" class="nav-link">
                <span class="nav-link-inner--text">Profile</span>
              </nuxt-link>
            </div>
          </li>
        </ul>

        <hr class="d-lg-none" />
        <ul class="navbar-nav align-items-lg-center ml-lg-auto">
          <li class="nav-item">
            <a
              class="nav-link nav-link-icon"
              href="https://www.facebook.com/cleta.io/"
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-square"></i>
              <span class="nav-link-inner--text d-lg-none">Facebook</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link nav-link-icon"
              href="https://www.instagram.com/cleta.io/"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram"></i>
              <span class="nav-link-inner--text d-lg-none">Instagram</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link nav-link-icon"
              href="https://github.com/Cleta-LLC/cleta.link/"
              target="_blank"
              rel="noopener"
              aria-label="Github"
            >
              <i class="fab fa-github"></i>
              <span class="nav-link-inner--text d-lg-none">Github</span>
            </a>
          </li>
          <li class="nav-item d-none d-lg-block ml-lg-4">
            <NuxtLink to="/login" class="btn btn-neutral">Login</NuxtLink>
          </li>
        </ul>
      </template>
    </base-nav>

    <div class="main-content">
      <nuxt> </nuxt>
    </div>

    <footer class="py-5" id="footer-main">
      <div class="container">
        <div class="row align-items-center justify-content-xl-between">
          <div class="col-xl-6">
            <div class="copyright text-center text-lg-left text-muted">
              © {{ year }}
              <a
                href="https://www.cleta.io"
                class="font-weight-bold ml-1"
                target="_blank"
                rel="noopener"
                >Cleta LLC</a
              >
            </div>
          </div>
          <div class="col-xl-6">
            <ul
              class="nav nav-footer justify-content-center justify-content-xl-end"
            >
              <li class="nav-item">
                <a
                  href="https://cleta.link"
                  class="nav-link"
                  target="_blank"
                  rel="noopener"
                  >Cleta.link</a
                >
              </li>
              <li class="nav-item">
                <NuxtLink to="/privacy" class="nav-link">Privacy</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/terms" class="nav-link">Terms</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/use" class="nav-link"
                  >Use and Conditions</NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink to="/cookie" class="nav-link">Cookie Policy</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import BaseNav from '~/components/argon-core/Navbar/BaseNav.vue'

export default {
  components: {
    BaseNav
  },
  props: {
    backgroundColor: {
      type: String,
      default: 'black'
    }
  },
  data() {
    return {
      showMenu: false,
      menuTransitionDuration: 250,
      year: new Date().getFullYear(),
      pageClass: 'login-page'
    }
  },
  computed: {
    title() {
      return `${this.$route.name} Page`
    },
    layoutClass() {
      let exceptions = ['index', 'home']
      if (!exceptions.includes(this.$route.name)) {
        return 'bg-default'
      } else {
        return ''
      }
    }
  },
  methods: {
    closeMenu() {
      document.body.classList.remove('nav-open')
      this.showMenu = false
    }
  },
  watch: {
    '$route.path'() {
      if (this.showMenu) {
        this.closeMenu()
      }
    }
  }
}
</script>
<style lang="scss">
.auth-layout {
  min-height: 100vh;
}
</style>
