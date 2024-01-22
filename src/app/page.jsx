import UpcomingEvent from "@/app/components/UpcomingEvent/UpcomingEvent";
import Banner from "@/app/pages/Home/Banner/Banner";
import CourseCategory from "@/app/pages/Home/CourseCategory/CourseCategory";
import GetSupport from "@/app/pages/Home/GetSupport/GetSupport";
import Journey from "@/app/pages/Home/Journey/Journey";
import Seminar from "@/app/pages/Home/Seminars/Seminar";
import Team from "@/app/pages/Home/Team/Team";
import WhyUs from "@/app/pages/Home/WhyUs/WhyUs";
import Courses from "./pages/Home/Courses/Courses";

export default function Home() {
    return (
        <>
            <Banner />
            <UpcomingEvent />
            <Seminar />
            <CourseCategory />
            <Courses />
            <Journey />
            <GetSupport />
            <WhyUs />
            <Team />
        </>
    );
}
