"use client";
import {AnimatePresence, motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import phython from "../../../../assets/courses/python-abcs-header.png";

const Courses = () => {
    return (
        <div className="md:py-24 py-16">
            <AnimatePresence>
                <div className="container">
                    <motion.div
                        whileInView={{opacity: [0, 1], y: [20, 0]}}
                        transition={{duration: 0.5}}>
                        <h3 className="heading">
                            Our <span className="textGradient">Courses</span>
                        </h3>
                        <p className="desc text-center md:w-[50%] mx-auto">
                            Our free courses
                        </p>
                    </motion.div>
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-10 mt-10">
                        <motion.div
                            whileInView={{opacity: [0, 1], x: [-20, 0]}}
                            transition={{duration: 0.7, delay: 0.5}}>
                            <div className="">
                                <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-black1 dark:border-gray-700">
                                    <Image
                                        className=" w-full  "
                                        src={phython}
                                        alt="Course"
                                    />
                                    <div class="p-5">
                                        <h5 class="text-gray-900 font-semibold text-xl tracking-tight dark:text-gray-200 mb-4">
                                            Basic Python Course
                                        </h5>

                                        <a
                                            href="https://www.youtube.com/playlist?list=PLEdFmldxtMwQGV2OyNi_Up5CRSioe-AoA&si=9Zp9UeEyExdMXZf6"
                                            target="_blank"
                                            class="btn-primary py-3 block w-full text-center text-gray-800">
                                            Get course
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </AnimatePresence>
        </div>
    );
};

export default Courses;
