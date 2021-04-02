<template>
  <footer class="py-5" id="footer-main">
    <div class="container">
      <div class="row align-items-center justify-content-xl-between">
        <div class="col-xl-6">
          <div class="copyright text-center text-lg-left text-muted">
            © {{ year }}
            <NuxtLink to="/"> Cleta LLC </NuxtLink>
          </div>
        </div>
        <div class="col-xl-6">
          <ul
            class="nav nav-footer justify-content-center justify-content-xl-end"
          >
            <li class="nav-item">
              <a
                href="https://cleta.io"
                class="nav-link"
                target="_blank"
                rel="noopener"
                >Cleta.io</a
              >
            </li>
            <li class="nav-item">
              <NuxtLink to="/privacy" class="nav-link">Privacy</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/terms" class="nav-link">Terms</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/use" class="nav-link">Use and Conditions</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/cookie" class="nav-link">Cookie Policy</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    backgroundColor: {
      type: String,
      default: 'black'
    }
  },
  data() {
    return {
      year: new Date().getFullYear()
    }
  },
  computed: {}
}
</script>
<style lang="scss"></style>
