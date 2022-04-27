export function backGuard() {
  if (sessionStorage.getItem("ACCESS_TOKEN") === null) {
    window.history.forward();
  }
}
