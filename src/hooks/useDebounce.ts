import { useCallback, useEffect, useState } from 'react'
import { debounce } from '../lib/debounce'

type TDebounce<T> = ((value: T) => number)
type TReturn<T> = [T, TDebounce<T>]

export const useDebounce = <T>(value: T, timeout = 300): TReturn<T> => {
    const [newValue, setNewValue] = useState<T>(value)

    const update: TDebounce<T> =
        useCallback(debounce(setNewValue, timeout), [newValue])

    useEffect(() => {
        const timer = update(value)

        return () => {
            clearTimeout(timer)
        }
    }, [value, update])

    return [newValue, update]
}
