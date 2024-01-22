"use client";
import Image from "next/image";
import boy from "../../../assets/banner/boy.png";
import girl from "../../../assets/banner/girl.png";
import student from "../../../assets/banner/student.png";
import {FaLocationDot} from "react-icons/fa6";
import {AnimatePresence, motion} from "framer-motion";
const UpcomingEvent = () => {
    return (
        <AnimatePresence>
            <div className=" relative md:mt-36">
                <motion.div
                    whileInView={{opacity: [0, 1], y: [20, 0]}}
                    transition={{duration: 0.5}}>
                    <Image
                        src={student}
                        alt="student"
                        className="absolute h-[280px] md:block hidden w-[280px] -top-[250px] right-[43%] -z-30"
                    />
                </motion.div>
                <motion.div
                    whileInView={{opacity: [0, 1], y: [20, 0]}}
                    transition={{duration: 0.5}}
                    className="container">
                    <div className="dark:bg-[#001019] bg-slate-100 md:mt-20 rounded-lg z-0">
                        <div className="md:flex justify-between md:space-x-10 relative">
                            <div className="md:w-[50%] relative">
                                <Image
                                    src={boy}
                                    alt="boy"
                                    className="md:max-h-[400px]  max-w-lg"
                                />
                                <Image
                                    src={girl}
                                    alt="girl"
                                    className="h-[200px] w-[200px] absolute bottom-[10%] right-[34%]"
                                />
                            </div>

                            <div className="md:w-[50%] md:pr-8 pr-3 pl-3 md:flex items-center ">
                                <div className="flex flex-col justify-end ">
                                    <div className="flex md:justify-end">
                                        <button className="btn-primary text-sm text-gray-900 ">
                                            Upcoming...
                                        </button>
                                    </div>
                                    <h3 className="md:text-3xl md:text-end text-xl mb-1 dark:text-slate-50 text-gray-900 ">
                                        Our Upcoming Event
                                    </h3>

                                    <p className="md:text-end desc textGradient">
                                        Divisional level cultural competition
                                    </p>
                                    <p className="md:text-end desc text-sm">
                                        Cultural development is a very important
                                        issue for building a smart Bangladesh,
                                        realizing the need, the Honorable Prime
                                        Minister has given an order to bring out
                                        talented people at the grass root level.
                                        Keeping that order in mind, we, the
                                        Edupy family have taken up the endeavor
                                        to bring forward and train the talented
                                        people of Rajshahi Division, which can
                                        take a major form with the help of the
                                        Government.
                                    </p>
                                    <div className="flex md:justify-end items-center mt-2 mb-6 md:mb-0">
                                        <FaLocationDot />
                                        <p className="md:text-end ml-2">
                                            Rabindra University, Bangladesh
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default UpcomingEvent;
