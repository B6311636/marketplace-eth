// commponent
import { useWalletInfo } from "@components/hooks/web3"
import { Button } from "@components/ui/common"
import { CourseCard, CourseList } from "@components/ui/course"
import { BaseLayout } from "@components/ui/layout"
import { MarketHeader } from "@components/ui/marketplace"
import { OrderModel } from "@components/ui/order"
import { getAllCourse } from "@content/courses/fetcher"
import { useState } from "react"


export default function Marketplace({ courses }) {
    const [selectedCoruse, setSelectedCourse] = useState(null)
    const { canPurchaseCourse } = useWalletInfo()

    const purchaseCourse = (order) => {
        alert(JSON.stringify(order))
    }

    return (
        <>
            <MarketHeader />
            <CourseList courses={courses}>
                {
                    course =>
                        <CourseCard
                            disabled={!canPurchaseCourse}
                            key={course.id}
                            course={course}
                            Footer={() =>
                                <div className="mt-4">
                                    <Button
                                        disabled={!canPurchaseCourse}
                                        variant="lightPurple"
                                        onClick={() => setSelectedCourse(course)}
                                    >
                                        Purchase
                                    </Button>
                                </div>
                            }
                        />
                }
            </CourseList>
            {selectedCoruse &&
                <OrderModel
                    course={selectedCoruse}
                    onSubmit={purchaseCourse}
                    onClose={() => setSelectedCourse(null)}
                />
            }
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

Marketplace.Layout = BaseLayout