import { keys } from 'ramda'
export const ITUNES_URL = 'https://itunes.apple.com'

const queryfy = <T extends object>(params: T) => {
    const objectKeys = keys(params)

    return '?' + objectKeys
        .map(key => [key, params[key]])
        .map(value => value.join('='))
        .join('&')
}

type TOptions = {
    url?: string
    cors: boolean
    credentials: boolean
    headers: boolean
    params?: object
    method?: string
}

export const get = async (options: TOptions) => {
    const queryParams = options.params ? queryfy(options.params) : ''
    const url = options.url || ITUNES_URL
    const method = options.method
        ? `/${options.method}`
        : ''

    const path = `${url}${method}${queryParams}`

    console.log(path)

    return fetch(path, {
        method: 'GET',
        mode: options.cors ? 'cors' : 'no-cors',
        cache: 'no-cache',
        referrerPolicy: 'strict-origin-when-cross-origin',
        referrer: 'https://will-tunes.now.sh',
        credentials: options.credentials ? 'same-origin' : undefined,
        headers: options.headers ? { 'Content-Type': 'application/json' } : undefined
    })
    .catch(err => console.log(err))
}
