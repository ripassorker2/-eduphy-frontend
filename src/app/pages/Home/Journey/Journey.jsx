"use client";
import {AnimatePresence, motion} from "framer-motion";
const Journey = () => {
    return (
        <AnimatePresence>
            <div className="md:py-24 py-16">
                <div className="container flex flex-col justify-between">
                    <motion.h3
                        whileInView={{opacity: [0, 1], y: [20, 0]}}
                        transition={{duration: 0.5, delay: 0.3}}
                        className="heading mb-16">
                        With us at a{" "}
                        <span className="textGradient">glance</span> <br />
                        <span className="textGradient">Your</span> Journey.
                    </motion.h3>
                    <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-10 gap-y-14">
                        <motion.div
                            whileInView={{opacity: [0, 1], x: [-20, 0]}}
                            transition={{duration: 0.7, delay: 0.3}}
                            className="group">
                            <div className=" dark:bg-black1  dark:group-hover:bg-blue h-[170px] group-hover:bg-slate-200 duration-300 rounded-md shadow-lg p-5 pb-10 text-center">
                                <div className="flex flex-col items-center">
                                    <div className="flex-shrink-0 relative top-0 -mt-16">
                                        <div className="flex items-center justify-center h-20 w-20 rounded-full duration-300 dark:bg-blue bg-black1 text-gray-100 dark:group-hover:bg-black1 group-hover:bg-blue border-4 border-white text-xl font-semibold">
                                            01
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <h4 className="text-lg group-hover:text-gray-900 leading-6 font-semibold duration-300 ">
                                            Free Seminar
                                        </h4>
                                        <p className="mt-2 desc group-hover:text-gray-900 duration-300 ">
                                            You can know all the information
                                            about the course through the free
                                            seminar.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            whileInView={{opacity: [0, 1], x: [-20, 0]}}
                            transition={{duration: 0.7, delay: 0.5}}
                            className="group">
                            <div className=" dark:bg-black1  dark:group-hover:bg-blue h-[170px] group-hover:bg-slate-200 duration-300 rounded-md shadow-lg p-5 pb-10 text-center">
                                <div className="flex flex-col items-center">
                                    <div className="flex-shrink-0 relative top-0 -mt-16">
                                        <div className="flex items-center justify-center h-20 w-20 rounded-full duration-300 dark:bg-blue bg-black1 text-gray-100 dark:group-hover:bg-black1 group-hover:bg-blue border-4 border-white text-xl font-semibold">
                                            02
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <h4 className="text-lg group-hover:text-gray-900 leading-6 font-semibold duration-300 ">
                                            Demo clases
                                        </h4>
                                        <p className="mt-2 desc group-hover:text-gray-900 duration-300 ">
                                            Before starting the course, there is
                                            an opportunity to do a demo class
                                            for free.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            whileInView={{opacity: [0, 1], x: [-20, 0]}}
                            transition={{duration: 0.7, delay: 0.7}}
                            className="group">
                            <div className=" dark:bg-black1  dark:group-hover:bg-blue h-[170px] group-hover:bg-slate-200 duration-300 rounded-md shadow-lg p-5 pb-10 text-center">
                                <div className="flex flex-col items-center">
                                    <div className="flex-shrink-0 relative top-0 -mt-16">
                                        <div className="flex items-center justify-center h-20 w-20 rounded-full duration-300 dark:bg-blue bg-black1 text-gray-100 dark:group-hover:bg-black1 group-hover:bg-blue border-4 border-white text-xl font-semibold">
                                            03
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <h4 className="text-lg group-hover:text-gray-900 leading-6 font-semibold duration-300 ">
                                            Basic Training
                                        </h4>
                                        <p className="mt-2 desc group-hover:text-gray-900 duration-300 ">
                                            Your journey will begin with basic
                                            training.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            whileInView={{opacity: [0, 1], x: [-20, 0]}}
                            transition={{duration: 0.7, delay: 0.9}}
                            className="group">
                            <div className=" dark:bg-black1  dark:group-hover:bg-blue h-[170px] group-hover:bg-slate-200 duration-300 rounded-md shadow-lg p-5 pb-10 text-center">
                                <div className="flex flex-col items-center">
                                    <div className="flex-shrink-0 relative top-0 -mt-16">
                                        <div className="flex items-center justify-center h-20 w-20 rounded-full duration-300 dark:bg-blue bg-black1 text-gray-100 dark:group-hover:bg-black1 group-hover:bg-blue border-4 border-white text-xl font-semibold">
                                            04
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <h4 className="text-lg group-hover:text-gray-900 leading-6 font-semibold duration-300 ">
                                            Advance Training
                                        </h4>
                                        <p className="mt-2 desc group-hover:text-gray-900 duration-300 ">
                                            You will learn all the advanced
                                            topics of the course.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            whileInView={{opacity: [0, 1], x: [-20, 0]}}
                            transition={{duration: 0.7, delay: 1.1}}
                            className="group">
                            <div className=" dark:bg-black1  dark:group-hover:bg-blue h-[170px] group-hover:bg-slate-200 duration-300 rounded-md shadow-lg p-5 pb-10 text-center">
                                <div className="flex flex-col items-center">
                                    <div className="flex-shrink-0 relative top-0 -mt-16">
                                        <div className="flex items-center justify-center h-20 w-20 rounded-full duration-300 dark:bg-blue bg-black1 text-gray-100 dark:group-hover:bg-black1 group-hover:bg-blue border-4 border-white text-xl font-semibold">
                                            05
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <h4 className="text-lg group-hover:text-gray-900 leading-6 font-semibold duration-300 ">
                                            Assignments
                                        </h4>
                                        <p className="mt-2 desc group-hover:text-gray-900 duration-300 ">
                                            At the end of the course lesson
                                            there is an opportunity to check
                                            yourself.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            whileInView={{opacity: [0, 1], x: [-20, 0]}}
                            transition={{duration: 0.7, delay: 1.3}}
                            className="group">
                            <div className=" dark:bg-black1  dark:group-hover:bg-blue h-[170px] group-hover:bg-slate-200 duration-300 rounded-md shadow-lg p-5 pb-10 text-center">
                                <div className="flex flex-col items-center">
                                    <div className="flex-shrink-0 relative top-0 -mt-16">
                                        <div className="flex items-center justify-center h-20 w-20 rounded-full duration-300 dark:bg-blue bg-black1 text-gray-100 dark:group-hover:bg-black1 group-hover:bg-blue border-4 border-white text-xl font-semibold">
                                            06
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <h4 className="text-lg group-hover:text-gray-900 leading-6 font-semibold duration-300 ">
                                            Lifetime Access
                                        </h4>
                                        <p className="mt-2 desc group-hover:text-gray-900 duration-300 ">
                                            You can take the course at any time
                                            due to having lifetime access.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            whileInView={{opacity: [0, 1], x: [-20, 0]}}
                            transition={{duration: 0.7, delay: 1.5}}
                            className="group">
                            <div className=" dark:bg-black1  dark:group-hover:bg-blue h-[170px] group-hover:bg-slate-200 duration-300 rounded-md shadow-lg p-5 pb-10 text-center">
                                <div className="flex flex-col items-center">
                                    <div className="flex-shrink-0 relative top-0 -mt-16">
                                        <div className="flex items-center justify-center h-20 w-20 rounded-full duration-300 dark:bg-blue bg-black1 text-gray-100 dark:group-hover:bg-black1 group-hover:bg-blue border-4 border-white text-xl font-semibold">
                                            07
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <h4 className="text-lg group-hover:text-gray-900 leading-6 font-semibold duration-300 ">
                                            Jon Placemnet
                                        </h4>
                                        <p className="mt-2 desc group-hover:text-gray-900 duration-300 ">
                                            Our team will work for your job
                                            placement.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            whileInView={{opacity: [0, 1], x: [-20, 0]}}
                            transition={{duration: 0.7, delay: 1.7}}
                            className="group">
                            <div className=" dark:bg-black1  dark:group-hover:bg-blue h-[170px] group-hover:bg-slate-200 duration-300 rounded-md shadow-lg p-5 pb-10 text-center">
                                <div className="flex flex-col items-center">
                                    <div className="flex-shrink-0 relative top-0 -mt-16">
                                        <div className="flex items-center justify-center h-20 w-20 rounded-full duration-300 dark:bg-blue bg-black1 text-gray-100 dark:group-hover:bg-black1 group-hover:bg-blue border-4 border-white text-xl font-semibold">
                                            08
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <h4 className="text-lg group-hover:text-gray-900 leading-6 font-semibold duration-300 ">
                                            Work With Us
                                        </h4>
                                        <p className="mt-2 desc group-hover:text-gray-900 duration-300 ">
                                            At the end of the course the
                                            selected students will get an
                                            opportunity to work with us.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </AnimatePresence>
    );
};

export default Journey;
