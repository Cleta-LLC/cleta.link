<template>
  <div>
    <div class="header pb-6 d-flex align-items-center profile-header">
      <!-- Mask -->
      <span class="mask bg-gradient-default opacity-8"></span>
      <!-- Header container -->
      <div class="container-fluid d-flex align-items-center">
        <div class="row">
          <div class="col-lg-7 col-md-10">
            <h1 class="display-2 text-white">Hello {{ username }}</h1>
            <p class="text-white mt-0 mb-5">
              This is your profile page. You can see the progress you've made
              with your work and manage your collections.
            </p>
            <a href="#!" class="btn btn-neutral">Edit profile</a>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col-xl-4 order-xl-2">
          <user-card></user-card>
          <progress-track-list></progress-track-list>
        </div>
        <div class="col-xl-8 order-xl-1">
          <div class="row">
            <div class="col-lg-6">
              <card gradient="info" class="border-0"> </card>
            </div>
            <div class="col-lg-6">
              <card gradient="danger" class="border-0"> </card>
            </div>
          </div>
          <div>
            <card>
              <!-- Card header -->
              <h5 slot="header" class="h3 mb-0">Create your first NFT</h5>
              <!-- Card body -->
              <p class="card-text mb-4">
                Mint a unique piece of content in a digital format
              </p>
              <base-button to="/mint" type="primary" class="btn btn-primary"
                >Mint a NFT</base-button
              >
              <amplify-s3-album />
              <amplify-s3-image-picker />
            </card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UserCard from '~/components/pages/UserProfile/UserCard.vue'

export default {
  layout: 'DashboardLayout',
  // middleware: 'auth',
  components: {
    UserCard
  },
  data: () => ({
    username: ''
  })
}
</script>
<style>
.profile-header {
  background-image: url(/~/static/img/theme/profile-cover.jpg);
  background-size: cover;
  background-position: center top;
  min-height: 500px;
}

:root {
  --amplify-primary-color: #4287f5;
  --amplify-primary-tint: #005cf0;
  --amplify-primary-shade: #005cf0;
}
</style>
