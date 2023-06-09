import { useWalletInfo } from "@components/hooks/web3"
import { useWeb3 } from "@components/providers"
import { Button } from "@components/ui/common"

export default function Walletbar() {
    const { requireInstall } = useWeb3()
    const { account, network } = useWalletInfo()

    return (
        <section className="mb-4 text-white bg-indigo-600 rounded-lg">
            <div className="p-8">
                <h1 className="text-2xl">Hello, {account.data}</h1>
                <h2 className="subtitle mb-5 text-xl">I hope you are having a great day!</h2>
                <div className="flex justify-between items-center">
                    <div className="sm:flex sm:justify-center lg:justify-start">
                        <Button
                            className="mr-2 text-sm xs:text-lg p-2"
                            variant="white"
                        >
                            Learn how to purchase
                        </Button>
                    </div>
                    <div>
                        {network.hasInitialResponse && !network.isSupported &&
                            <div className="bg-red-400 p-4 rounded-t-lg">
                                <div>Conected to wrong network</div>
                                <div>
                                    Conect to: {` `}
                                    <strong className="text-2xl">{network.target}</strong>
                                </div>
                            </div>
                        }
                        {network.data &&
                            <div>
                                <div><span>Currently on </span><strong className="text-2xl">{network.data}</strong></div>
                            </div>
                        }
                        {requireInstall &&
                            <div className=" text-yellow-400">
                                Sorry, Cannot connect to network. Please install Metamask.
                            </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}