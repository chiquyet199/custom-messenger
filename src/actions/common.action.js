export const TOGGLE_LOADING = 'TOGGLE_LOADING'

export { toggleLoading }

function toggleLoading() {
  return {
    type: TOGGLE_LOADING,
    payload: true,
  }
}
