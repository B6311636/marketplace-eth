import { useWeb3 } from "@components/providers"
import Link from "next/link"
import { Button } from "@components/ui/common"
import { useAccount } from "@components/hooks/web3/useAccount"
import { useRouter } from "next/router"

export default function Navbar() {
    const { connect, isLoading, isWeb3Loaded } = useWeb3()
    const { account } = useAccount()
    const { pathname } = useRouter()

    return (
        <section>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                <nav className="relative" aria-label="Global">
                    <div className="flex justify-between">
                        <div className="py-3">
                            <Link href="/" className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                                Product
                            </Link>
                            <Link href="/marketplace" className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                                Marketplace
                            </Link>
                            <Link href="/" className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                                Features
                            </Link>
                        </div>
                        <div>
                            <Link href="/" className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                                Wishlist
                            </Link>
                            {isLoading ?
                                <Button disabled={true} onClick={connect}>
                                    Loading...
                                </Button>
                                : isWeb3Loaded ?
                                    account.data ?
                                        <Button hoverable={false} className="cursor-default">
                                            Hi there {account.isAdmin && "Admin"}
                                        </Button>
                                        :
                                        <Button onClick={connect}>
                                            Connect Wallet
                                        </Button>
                                    :
                                    <Button onClick={() => window.open("https://metamask.io/download.html", "_blank")}>
                                        Install Metamask
                                    </Button>
                            }
                        </div>
                    </div>
                </nav>
                <div>
                    {account.data &&
                        !pathname.includes("/marketplace") &&
                        <div className="flex justify-end pt-1">
                            <div className="text-white bg-indigo-600 rounded-md p-2">
                                {account.data}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}