// commponent
import { useEthPrice } from "@components/hooks/useEthPrice"
import { useAccount, useNetwork } from "@components/hooks/web3"
import { Hero } from "@components/ui/common"
import { CourseCard, CourseList } from "@components/ui/course"
import { BaseLayout } from "@components/ui/layout"
import { OrderCard } from "@components/ui/order"
import { EthRates, Walletbar } from "@components/ui/web3"
import { getAllCourses } from "@content/courses/fetcher"

export default function Home({ courses }) {
  const { account } = useAccount()
  const { network } = useNetwork()
  const { eth } = useEthPrice()

  return (
    <>
      <Hero />
      <Walletbar />
      <CourseList courses={courses}>
        {
          course =>
            <CourseCard key={course.id} course={course} />
        }
      </CourseList>
    </>
  )
}

export function getStaticProps() {
  const { data } = getAllCourses()
  return {
    props: {
      courses: data
    }
  }
}

Home.Layout = BaseLayout