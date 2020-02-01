import { get, getOrElse } from "../api"
import countriesList from "./countries"
import randomSyllable from 'random-syllable'

export const getRandomLetter = () => {
    const syllable = randomSyllable({ length: 3 })
    
    return syllable
}

export const getRandomDate = () => {
    const start = new Date('1960-01-12')
    const end = new Date('2012-12-31')
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

export const getResume = async () => {
    const quotes: string[] = []
    const quoteParams = {
        url: 'https://api.kanye.rest/',
        cors: true,
        credentials: true,
        headers: true
    }

    for (let i = 0; i <= 7; i++) {
        const { quote } = await get(quoteParams).then(getOrElse)
        quotes.push(quote)
    }

    return quotes.join('. ').replace(/\.\./g, '.')
}

export const getRandomCountry = () => {
    const{ countries } = countriesList
    const index = Math.floor(Math.random() * countries.length)

    return countries[index]
}
