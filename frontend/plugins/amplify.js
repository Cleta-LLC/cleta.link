import Amplify from 'aws-amplify'
// import { Auth } from '@aws-amplify/auth'
import awsconfig from '../src/aws-exports'
import '@aws-amplify/ui-vue'
Amplify.configure(awsconfig)
// Auth.configure(awsconfig)
