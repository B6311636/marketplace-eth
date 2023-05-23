import { useEffect } from "react"
import useSWR from "swr"

const adminAddresses = {
    "0x482c3079dd170316bec5424add5e55ab56ea04b8670af95e1711afdfd61dbb36": true, // encode admin address(pub key) for more secure
    "0x16061cd2923a79790e598db6478fec669eead5eaa1ebf810c2c71568b57a40c9": true,
    "0xead0e6060832ae79b8d37f4a88e6426c6bb810c2b5b8d09d95c043b59b48b303": true 
}

export const handler = (web3, provider) => () => {

    const { data, mutate, ...rest } = useSWR(() =>
        web3 ? "web3/accounts" : null,
        async () => {
            const accounts = await web3.eth.getAccounts()
            const account = accounts[0]
            if (!account) {
                throw new Error("Cannot retreive an account. Please refresh the browser.")
            }
            return account
        }
    )

    useEffect(() => {
        const mutator = accounts => mutate(accounts[0] ?? null)
        provider?.on("accountsChanged", mutator)

        return () => {
            provider?.removeListener("accountsChanged", mutator)
        }
    }, [provider])

    return {
        data,
        isAdmin: (
            data &&
            adminAddresses[web3.utils.keccak256(data)]) ?? false,
        mutate,
        ...rest
    }
}

