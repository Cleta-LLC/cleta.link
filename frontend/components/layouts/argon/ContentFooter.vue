<template>
  <footer class="footer px-4 mx-2">
    <div class="row align-items-center justify-content-lg-between">
      <div class="col-lg-6">
        <div class="copyright text-center text-lg-left text-muted">
          © {{ year }}
          <a
            href="https://cleta.link"
            class="font-weight-bold ml-1"
            target="_blank"
            rel="noopener"
            >Cleta.link</a
          >
          &
          <a
            href="https://cleta.io"
            class="font-weight-bold ml-1"
            target="_blank"
            rel="noopener"
            >Cleta LLC</a
          >
        </div>
      </div>
      <div class="col-lg-6">
        <ul
          class="nav nav-footer justify-content-center justify-content-lg-end"
        >
          <li class="nav-item">
            <a
              href="https://cleta.link/privacy"
              class="nav-link"
              target="_blank"
              rel="noopener"
              >Privacy</a
            >
          </li>
          <li class="nav-item">
            <a
              href="https://cleta.link/terms"
              class="nav-link"
              target="_blank"
              rel="noopener"
              >Terms</a
            >
          </li>
          <li class="nav-item">
            <a
              href="http://cleta.link/use"
              class="nav-link"
              target="_blank"
              rel="noopener"
              >Use and Conditions</a
            >
          </li>
          <li class="nav-item">
            <a
              href="https://cleta.link/cookie"
              class="nav-link"
              target="_blank"
              rel="noopener"
              >Cookie Policy</a
            >
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>
<style></style>
