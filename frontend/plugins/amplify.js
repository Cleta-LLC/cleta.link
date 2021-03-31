import Amplify, { Auth } from 'aws-amplify'
import awsconfig from '~/src/aws-exports'
import '@aws-amplify/ui-vue'
Amplify.configure(awsconfig)
Auth.configure(awsconfig)
