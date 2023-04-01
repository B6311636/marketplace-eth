import useSWR from 'swr'

const URL = "https://api.coingecko.com/api/v3/coins/ethereum?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false"
const COUSE_PRICE = 200

const fetcher = async url => {
    const res = await fetch(url)
    const json = await res.json()
    return json.market_data.current_price.thb ?? null
}

export const useEthPrice = () => {
    const { data, ...rest } = useSWR(
        URL,
        fetcher,
        { refreshInterval: 10000 }
    )

    const perItem = ( data && (COUSE_PRICE / Number(data)).toFixed(6)) ?? null

    return {
        eth: {
            data,
            perItem,
            ...rest
        }
    }
}