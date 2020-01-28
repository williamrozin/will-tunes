import { keys } from 'ramda'
export const ITUNES_URL = 'https://itunes.apple.com/lookup'

const queryfy = <T extends object>(params: T) => {
    const objectKeys = keys(params)

    return '?' + objectKeys
        .map(key => [key, params[key]])
        .map(value => value.join('='))
        .join('&')
}

export const get = async (searchParams: object) => {
    const queryParams = queryfy(searchParams)

    return fetch(`${ITUNES_URL}${queryParams}`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
           'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .catch(err => console.error(err))
}
