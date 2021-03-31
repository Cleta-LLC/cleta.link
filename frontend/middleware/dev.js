export default function({ store, redirect }) {
  // Only show in development
  if (store.state.dev.isDev) {
    return redirect('/')
  }
}
