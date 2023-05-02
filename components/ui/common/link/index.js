import Link from "next/link"
import { useRouter } from "next/router"

export default function ActiveLink({ children, href, className }) {
    const router = useRouter()

    const handleClick = (e) => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <Link href={href} onClick={handleClick} className={`${className} ${router.asPath === href && "text-indigo-600"}` }>
            {children}
        </Link>
    )
}