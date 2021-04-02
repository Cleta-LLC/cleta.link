<template>
  <div class="card card-profile">
    <!-- <img
      src="img/cleta/user-profile-1000x600.png"
      alt="Image placeholder"
      class="card-img-top"
    /> -->

    <div class="row justify-content-center">
      <div class="col-lg-3 order-lg-2">
        <div class="card-profile-image">
          <a href="/user/1">
            <img src="img/theme/team-2.jpg" class="rounded-circle" />
          </a>
        </div>
      </div>
    </div>

    <div class="card-header text-center border-0 pt-7 pt-md-5 pb-0 pb-md-5">
      <div class="d-flex justify-content-between">
        <!-- <a href="/user/1" class="btn btn-sm btn-info mr-4">Follow</a> -->
        <!-- <a href="/user/1" class="btn btn-sm btn-default float-right">Explore</a> -->
      </div>
    </div>

    <div class="card-body pt-0">
      <div class="row">
        <div class="col">
          <div class="d-flex justify-content-center">
            <h6 class="h2 text-black mb-0">{{ username }}</h6>
          </div>
          <div class="card-profile-stats d-flex justify-content-center">
            <div>
              <span class="heading">22</span>
              <span class="description">Minted NFTs</span>
            </div>
            <div>
              <span class="heading">10</span>
              <span class="description">Open Bids</span>
            </div>
            <div>
              <span class="heading">9 ETH</span>
              <span class="description">Amount Raised</span>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <h5 class="h3">
          Create NFT
        </h5>
        <amplify-s3-album />
        <div class="py-4">
          <i class="ni education_hat mr-2"></i>Only audio, photos and gifs
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    username: "You shoudn't be here: FLAG001 - ${TOO-EASY-TOO-FAST}"
  }),
  computed: {}
}
</script>
<style></style>
