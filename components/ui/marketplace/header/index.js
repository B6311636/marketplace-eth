import { Breadcrumbs } from "@components/ui/common";
import { EthRates, Walletbar } from "@components/ui/web3";

const LINKS = [{
    href: "/marketplace",
    value: "Buy"
}, {
    href: "/marketplace/courses/owned",
    value: "My Courses"
}, {
    href: "/marketplace/courses/manage",
    value: "Manage Courses"
}]

export default function Header() {
    return (
        <>
            <Walletbar />
            <EthRates />
            <Breadcrumbs items={LINKS}/>
        </>
    )
}