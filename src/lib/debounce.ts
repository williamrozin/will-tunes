export function debounce(fn: Function, delay: number) {
    let timer = 0

    return function <T>(arg: T) {
        clearTimeout(timer)
        timer = setTimeout(() => fn(arg), delay)

        return timer
    }
}
