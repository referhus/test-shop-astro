export function tryLocalStorage(callback: () => void) {
  try {
    if (localStorage) {
      callback()
    }
  } catch (e: unknown) {
    console.log(e)
    console.error('localStorage is not defined')
  }
}
