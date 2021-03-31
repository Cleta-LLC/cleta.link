<template>
  <div>
    <!-- Header -->
    <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
      <div class="container">
        <div class="header-body text-center mb-7">
          <div class="row justify-content-center">
            <div class="col-xl-5 col-lg-6 col-md-8 px-5">
              <h1 class="text-white">Choose the best plan for your brand</h1>
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
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="pricing card-group flex-column flex-md-row mb-3">
            <card
              header-classes="bg-transparent"
              body-classes="px-lg-7"
              class="card-pricing border-0 text-center mb-4"
            >
              <h4
                slot="header"
                class="text-uppercase ls-1 text-primary py-3 mb-0"
              >
                Brand Loyalty Program
              </h4>

              <div class="display-2">$999</div>
              <span class="text-muted">Includes 10,000 Mintable NTFs</span>
              <ul class="list-unstyled my-4">
                <li>
                  <div class="d-flex align-items-center">
                    <div>
                      <div
                        class="icon icon-xs icon-shape bg-gradient-primary shadow rounded-circle text-white"
                      >
                        <i class="fas fa-terminal"></i>
                      </div>
                    </div>
                    <div>
                      <span class="pl-2"
                        >NFTs offer massive value to your business</span
                      >
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex align-items-center">
                    <div>
                      <div
                        class="icon icon-xs icon-shape bg-gradient-primary shadow rounded-circle text-white"
                      >
                        <i class="fas fa-terminal"></i>
                      </div>
                    </div>
                    <div>
                      <span class="pl-2">Add your own smart contracts</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex align-items-center">
                    <div>
                      <div
                        class="icon icon-xs icon-shape bg-gradient-primary shadow rounded-circle text-white"
                      >
                        <i class="fas fa-pen-fancy"></i>
                      </div>
                    </div>
                    <div>
                      <span class="pl-2"
                        >Low price of $0.99 per minted NFT</span
                      >
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex align-items-center">
                    <div>
                      <div
                        class="icon icon-xs icon-shape bg-gradient-primary shadow rounded-circle text-white"
                      >
                        <i class="fas fa-hdd"></i>
                      </div>
                    </div>
                    <div>
                      <span class="pl-2">NFTs are backed-up in the cloud</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex align-items-center">
                    <div>
                      <div
                        class="icon icon-xs icon-shape bg-gradient-primary shadow rounded-circle text-white"
                      >
                        <i class="fas fa-hdd"></i>
                      </div>
                    </div>
                    <div>
                      <span class="pl-2"
                        >NFTs are available in any compatible platform</span
                      >
                    </div>
                  </div>
                </li>
              </ul>

              <base-button type="primary" class="mb-3"
                >Start free trial</base-button
              >

              <a slot="footer" href="/brands/faqs" class="text-light"
                >Frequently Asked Questions</a
              >
            </card>

            <!-- <card
              gradient="info"
              class="card-pricing zoom-in shadow-lg rounded border-0 text-center mb-4"
              header-classes="bg-transparent"
              body-classes="px-lg-7"
              footer-classes="bg-transparent"
            >
              <h4
                slot="header"
                class="text-uppercase ls-1 text-white py-3 mb-0"
              >
                Organization Program
              </h4>

              <div class="display-1 text-white">$9,999</div>
              <span class="text-white">per 3 packs</span>
              <ul class="list-unstyled my-4">
                <li>
                  <div class="d-flex align-items-center">
                    <div>
                      <div
                        class="icon icon-xs icon-shape bg-white shadow rounded-circle text-muted"
                      >
                        <i class="fas fa-terminal"></i>
                      </div>
                    </div>
                    <div>
                      <span class="pl-2 text-white"
                        >Create up to 3 collections with up to 20,000 NFTs
                        each</span
                      >
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex align-items-center">
                    <div>
                      <div
                        class="icon icon-xs icon-shape bg-white shadow rounded-circle text-muted"
                      >
                        <i class="fas fa-pen-fancy"></i>
                      </div>
                    </div>
                    <div>
                      <span class="pl-2 text-white"
                        >Working materials in Sketch</span
                      >
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex align-items-center">
                    <div>
                      <div
                        class="icon icon-xs icon-shape bg-white shadow rounded-circle text-muted"
                      >
                        <i class="fas fa-hdd"></i>
                      </div>
                    </div>
                    <div>
                      <span class="pl-2 text-white">2GB cloud storage</span>
                    </div>
                  </div>
                </li>
              </ul>

              <base-button type="secondary" class="mb-3"
                >Start free trial</base-button
              >

              <a slot="footer" href="#!" class="text-white">Contact sales</a>
            </card> -->
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-lg-center px-3 mt-5">
        <div>
          <div
            class="icon icon-shape bg-gradient-white shadow rounded-circle text-primary"
          >
            <i class="ni ni-building text-primary"></i>
          </div>
        </div>
        <div class="col-lg-6">
          <p class="text-white">
            <strong>The Arctic Ocean</strong> freezes every winter and much of
            the sea-ice then thaws every summer, and that process will continue
            forever.
          </p>
        </div>
      </div>
      <div class="row row-grid justify-content-center">
        <div class="col-lg-10">
          <div class="table-responsive">
            <base-table class="table table-dark mt-5" :data="features">
              <template slot="columns">
                <th class="px-0 bg-transparent" scope="col">
                  <span class="text-light font-weight-700">Features</span>
                </th>
                <th class="text-center bg-transparent" scope="col">
                  Loyalty Program
                </th>
                <th class="text-center bg-transparent" scope="col">
                  Free
                </th>
              </template>

              <template slot-scope="{ row }">
                <td class="px-0">{{ row.title }}</td>
                <td class="text-center" v-html="row.bravo"></td>
                <td class="text-center" v-html="row.alpha"></td>
              </template>
            </base-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BaseTable from '~/components/argon-core/BaseTable.vue'
export default {
  layout: 'AuthLayout',
  name: 'pricing-page',
  components: {
    BaseTable
  },
  data() {
    return {
      features: [
        {
          title: 'Cloud backup',
          bravo: '<i class="fas fa-check text-success"></i>',
          alpha: '<i class="fas fa-check text-success"></i>'
        },
        {
          title: 'IPFS backup',
          bravo: '<i class="fas fa-check text-success"></i>',
          alpha: '<i class="fas fa-check text-success"></i>'
        },
        {
          title: 'Automatic Signature',
          bravo: '<i class="fas fa-check text-success"></i>',
          alpha: '<i class="fas fa-check text-success"></i>'
        },
        {
          title: 'Bulk NFT Mint Cap',
          bravo: '<span class="text-sm text-light">999</span>',
          alpha: '<span class="text-sm text-light">Limited 1 per piece</span>'
        },
        {
          title: 'Works on Ethereum',
          bravo: '<i class="fas fa-check text-success"></i>',
          alpha: '<i class="fas fa-check text-success">'
        },
        {
          title: 'Able to use RNG for extra Exclusivity',
          bravo: '<i class="fas fa-check text-success"></i>',
          alpha: '-'
        },
        {
          title: 'Able to add up to 10 credits to each NFT',
          bravo: '<i class="fas fa-check text-success"></i>',
          alpha: '-'
        },
        {
          title: 'Smart contract extra information',
          bravo: '<i class="fas fa-check text-success"></i>',
          alpha: '-'
        },
        {
          title: 'Technical Support',
          bravo: '<i class="fas fa-check text-success"></i>',
          alpha: '-'
        }
      ]
    }
  }
}
</script>
<style></style>
