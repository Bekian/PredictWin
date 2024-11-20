import { apiKey } from "./key"
export async function callApi() {
    let res 
    try {
        res = await fetch(`https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds?regions=us&oddsFormat=american&apiKey=${apiKey}`, {
            method: "GET"
        })

    } catch (e) {
        console.log(e)
    }
    if (res.ok) {
        const data = await res.json()
        console.log(data)

    }
}