import {
  applyPolyfills,
  defineCustomElements
} from '@aws-amplify/ui-components/loader'

import Amplify from 'aws-amplify'
import awsconfig from '../src/aws-exports'
// import { Auth } from '@aws-amplify/auth'
// Auth.configure(awsconfig)
Amplify.configure(awsconfig)

applyPolyfills().then(() => {
  defineCustomElements(window)
})

// import { createApp } from 'vue'
// import App from './App.vue'
// const app = createApp(App)
// app.config.isCustomElement = tag => tag.startsWith('amplify-')
// app.mount('#app')
