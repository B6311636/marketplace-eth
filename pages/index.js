// commponent
import { useAccount, useNetwork } from "@components/hooks/web3"
import { Breadcrumbs, Hero } from "@components/ui/common"
import { CourseCard, CourseList } from "@components/ui/course"
import { BaseLayout } from "@components/ui/layout"
import { OrderCard } from "@components/ui/order"
import { EthRates, Walletbar } from "@components/ui/web3"
import { getAllCourse } from "@content/courses/fetcher"

export default function Home({ courses }) {
  const { account } = useAccount()
  const { network } = useNetwork()

  return (
    <>
      <Hero />
      <Breadcrumbs />
      <Walletbar
        address={account.data}
        network={{
          data: network.data,
          target: network.target,
          isSupported: network.isSupported,
          hasInitialResponse: network.hasInitialResponse
        }}
      />
      <EthRates />
      <OrderCard />
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
  const { data } = getAllCourse()
  return {
    props: {
      courses: data
    }
  }
}

Home.Layout = BaseLayout