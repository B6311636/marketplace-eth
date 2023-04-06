import { CourseFilter, OwnedCourseCard } from "@components/ui/course"
import { Button } from "@components/ui/common"
import { BaseLayout } from "@components/ui/layout"
import { MarketHeader } from "@components/ui/marketplace"
import { useAccount, useOwnedCourses } from "@components/hooks/web3"


export default function ManageCourses({ courses }) {
    const { account } = useAccount()
    const { ownedCourses } = useOwnedCourses(courses, account.data)

    return (
        <>
            <MarketHeader />
            <CourseFilter />
            <section className="grid grid-cols-1">
                {ownedCourses.data?.map(course =>
                    <OwnedCourseCard
                        key={course.id}
                        course={course}
                    >
                        <div className="flex mr-2 relative rounded-md">
                            <input
                                type="text"
                                name="account"
                                id="account"
                                className="w-96 focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md"
                                placeholder="0x2341ab..."
                            />
                            <Button>
                                verify
                            </Button>
                        </div>
                    </OwnedCourseCard>
                )}
            </section>
        </>
    )
}

ManageCourses.Layout = BaseLayout