
import { Model } from "@components/ui/common";
import { CourseCurriculum, CourseHero, CourseKeypoints } from "@components/ui/course";
import { BaseLayout } from "@components/ui/layout";
import { getAllCourse } from "@content/courses/fetcher";

export default function Course({ course }) {
    return (
        <>
            <CourseHero 
                title={course.title}
                description={course.description}
                image={course.coverImage}
            />
            <CourseKeypoints
                points={course.wsl}
            />
            <CourseCurriculum
                locked={true}
            />
            <Model />
        </>
    )
}

export function getStaticPaths() {
    const { data } = getAllCourse()
    return {
        paths: data.map(c => ({
            params: {
                slug: c.slug
            }
        })),
        fallback: false
    }
}


export function getStaticProps({ params }) {
    const { data } = getAllCourse()
    const course = data.filter(c => c.slug === params.slug)[0]
    return {
        props: {
            course
        }
    }
}


Course.Layout = BaseLayout