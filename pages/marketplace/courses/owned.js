import { useAccount, useOwnedCourses } from "@components/hooks/web3"
import { Button } from "@components/ui/common"
import { OwnedCourseCard } from "@components/ui/course"
import { BaseLayout } from "@components/ui/layout"
import { MarketHeader } from "@components/ui/marketplace"
import { getAllCourse } from "@content/courses/fetcher"


export default function OwnedCourses({ courses }) {
    const { account } = useAccount()
    const { ownedCourses } = useOwnedCourses(courses, account.data)

    console.log(ownedCourses)
    console.log(account)

    return (
        <>
            <MarketHeader />
            <section className="grid grid-cols-1">
                {ownedCourses.data?.map(course =>
                    <OwnedCourseCard
                        key={course.id}
                        course={course}
                    >
                        <Button>Watch the course</Button>
                    </OwnedCourseCard>
                )}
            </section>
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

OwnedCourses.Layout = BaseLayout