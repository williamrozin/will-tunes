import { get } from "../api"
import countriesList from "./countries"

export const getRandomDate = () => {
    const start = new Date('1960-01-12')
    const end = new Date('2012-12-31')
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

export const getResume = async () => {
    const quotes: string[] = []
    const quoteParams = { url: 'https://api.kanye.rest/' }

    for (let i = 0; i <= 5; i++) {
        // @ts-ignore
        const { quote } =  await get(quoteParams).then(res => res.json())
        quotes.push(quote)
    }

    return quotes.join(' ')
}

export const getRandomCountry = () => {
    const{ countries } = countriesList
    const index = Math.floor(Math.random() * countries.length)

    return countries[index]
}
