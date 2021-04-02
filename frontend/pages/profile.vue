<template>
  <div>
    <div>
      <div class="header pb-6 d-flex align-items-center profile-header">
        <!-- Mask -->
        <span class="mask bg-gradient-orange opacity-8"></span>
        <div class="container-fluid mt-4">
          <div class="py-8">
            <div class="card-deck flex-column flex-xl-row">
              <UploadAlbumCard />
              <ProfileWithNFTCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UploadAlbumCard from '~/components/cleta/UploadAlbumCard.vue'
import ProfileWithNFTCard from '~/components/cleta/ProfileWithNFTCard.vue'

export default {
  layout: 'DashboardLayout',
  // middleware: 'auth',
  components: {
    UploadAlbumCard,
    ProfileWithNFTCard
  },
  data: () => ({
    username: 'fill username dynamically'
  })
}
</script>
<style>
.profile-header {
  background-image: url(/~/static/img/avatar.jpg);
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
