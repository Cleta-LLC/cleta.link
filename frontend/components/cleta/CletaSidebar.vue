<template>
  <side-bar>
    <template slot-scope="props" slot="links">
      <sidebar-item
        :link="{
          name: 'NFT Markeplace',
          icon: 'ni ni-shop text-primary'
        }"
      >
        <sidebar-item
          :link="{ name: 'Create a NFT', path: '/mint' }"
        ></sidebar-item>
        <sidebar-item
          :link="{ name: 'Sell a NFT', path: '/sell' }"
        ></sidebar-item>
        <sidebar-item
          :link="{ name: 'Transfer a NFT', path: '/transfer' }"
        ></sidebar-item>
      </sidebar-item>

      <sidebar-item
        :link="{
          name: 'Explore',
          icon: 'ni ni-world text-orange',
          path: '/discover'
        }"
      >
      </sidebar-item>

      <sidebar-item
        :link="{
          name: 'Wallet',
          icon: 'ni ni-credit-card text-success',
          path: '/wallet'
        }"
      >
      </sidebar-item>

      <sidebar-item
        :link="{
          name: 'Settings',
          icon: 'ni ni-settings text-grey',
          path: '/settings'
        }"
      >
      </sidebar-item>
    </template>

    <template slot="links-after">
      <hr class="my-3" />
      <h6 class="navbar-heading p-0 text-muted">Resources</h6>

      <ul class="navbar-nav mb-md-3">
        <li class="nav-item">
          <a
            class="nav-link"
            href="https://cleta.io/docs"
            target="_blank"
            rel="noopener"
          >
            <i class="ni ni-spaceship"></i>
            <span class="nav-link-text">Getting started</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="https://cleta.io/donate"
            target="_blank"
            rel="noopener"
          >
            <i class="ni ni-satisfied"></i>
            <span class="nav-link-text">Donate</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="https://cleta.io/logout"
            target="_blank"
            rel="noopener"
          >
            <i class="ni ni-user-run"></i>
            <span class="nav-link-text">Logout</span>
          </a>
        </li>
      </ul>
    </template>
  </side-bar>
</template>
