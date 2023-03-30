// commponent
import { useAccount } from "@components/hooks/web3/useAccount"
import { useNetwork } from "@components/hooks/web3/useNetwork"
import { CourseCard, CourseList } from "@components/ui/course"
import { BaseLayout } from "@components/ui/layout"
import { Walletbar } from "@components/ui/web3"
import { getAllCourse } from "@content/courses/fetcher"


export default function Home({ courses }) {
    const { account } = useAccount()
    const { network } = useNetwork()

    return (
        <>
            <div className="py-4">
                <Walletbar
                    address={account.data}
                    network={network.data}
                />
                <CourseList courses={courses}>
                    {
                        course =>
                            <CourseCard key={course.id} course={course} />
                    }
                </CourseList>
            </div>
        </>
    )
}

export function getStaticProps() {
    const { data } = getAllCourse()
    return {
        props: {
            courses: data
        }
    }
}

Home.Layout = BaseLayout