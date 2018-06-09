import history from 'configs/history'

export function navigate(route, params = {}) {
  history.push(route)
}

export function goBack() {
  history.goBack()
}
