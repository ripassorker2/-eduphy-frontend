"use client";
import MultiStep from "react-multistep";
import {AnimatePresence, motion} from "framer-motion";
import {IoCall} from "react-icons/io5";
import {BsDiscord} from "react-icons/bs";
import support from "../../../../assets/socialSupport.png";
import Image from "next/image";
const GetSupport = () => {
    return (
        <AnimatePresence>
            <div className="container">
                <div className=" py-16">
                    <motion.h3
                        whileInView={{opacity: [0, 1], x: [-20, 0]}}
                        transition={{duration: 0.7, delay: 0.3}}
                        className="heading">
                        How do you <span className="textGradient">get</span>{" "}
                        <br />
                        <span className="textGradient">SUPPORT</span> from us ?
                    </motion.h3>
                    <MultiStep
                        activeStep={0}
                        nextButton={{
                            title: "Next",
                            style: {
                                display: "none",
                            },
                        }}
                        prevButton={{
                            title: "Prev",
                            style: {
                                display: "none",
                            },
                        }}
                        showNavigation={true}
                        stepCustomStyle={{width: "100%"}}>
                        <motion.div
                            whileInView={{opacity: [0, 1], y: [20, 0]}}
                            transition={{duration: 0.5, delay: 0.3}}
                            title="First Step"
                            className="flex items-center justify-center ">
                            <div className="dark:bg-[#001019] p-8 rounded-md text-center">
                                <div className="block  mb-1 textGradient text-lg md:text-3xl">
                                    Select the course of your choice.
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            whileInView={{opacity: [0, 1], y: [20, 0]}}
                            transition={{duration: 0.5, delay: 0.3}}
                            title="Second Step"
                            className="flex items-center justify-center ">
                            <div className="dark:bg-[#001019] p-8 rounded-md text-center">
                                <div className="block  mb-1 textGradient text-lg md:text-3xl">
                                    Go to payment option and make payment.
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            whileInView={{opacity: [0, 1], y: [20, 0]}}
                            transition={{duration: 0.5, delay: 0.3}}
                            title="Third Step"
                            className="flex items-center justify-center ">
                            <div className="dark:bg-[#001019] p-8 rounded-md text-center">
                                <div className="block  mb-1 textGradient text-lg md:text-3xl">
                                    All questions will be answered in a very
                                    organized manner through private discord
                                    groups.
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            whileInView={{opacity: [0, 1], y: [20, 0]}}
                            transition={{duration: 0.5, delay: 0.3}}
                            title="Four Step"
                            className="flex items-center justify-center ">
                            <div className="dark:bg-[#001019] p-8 rounded-md text-center">
                                <div className="block  mb-1 textGradient text-lg md:text-3xl">
                                    Weekly/Monthly with Live Problem Solving
                                    facility with Mentor
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            whileInView={{opacity: [0, 1], y: [20, 0]}}
                            transition={{duration: 0.5, delay: 0.3}}
                            title="Five Step"
                            className="flex items-center justify-center ">
                            <div className="dark:bg-[#001019] p-8 rounded-md text-center">
                                <div className="block  mb-1 textGradient text-lg md:text-3xl">
                                    At the end of the course, our job panel will
                                    give you ultimate guidelines to get your
                                    dream job.
                                </div>
                            </div>
                        </motion.div>
                    </MultiStep>
                    <div className="md:flex   justify-between mt-28">
                        <motion.div
                            whileInView={{opacity: [0, 1], x: [0, -0]}}
                            transition={{duration: 0.7, delay: 0.4}}
                            className="md:w-[50%] mx-auto md:mr-7">
                            <h2 className="md:text-3xl text-xl mb-2 dark:text-slate-50 text-gray-900">
                                There is a{" "}
                                <span className="textGradient">
                                    Discord support channel
                                </span>{" "}
                                for round-the-clock support
                            </h2>
                            <p className="desc ">
                                For each course we have created a private
                                Discord support channel where the course
                                instructor along with 4-5 course moderators will
                                directly answer your various questions. We
                                promise to answer your questions within 24 hours
                                maximum. But in most cases you will get the
                                answer in less time than that. Besides, there
                                will be live sessions every week where you can
                                directly ask questions and get answers. Discord
                                Channel Support Center
                            </p>
                            <div className="flex flex-row mt-5">
                                <button className="btn-primary inline-flex items-center mr-4 text-gray-700">
                                    <IoCall className={"mr-2"} /> Support Center
                                </button>
                                <button className="btn-primary inline-flex items-center bg-gray-600 hover:bg-gray-700">
                                    <BsDiscord className={"mr-2 text-blue"} />{" "}
                                    Discord
                                </button>
                            </div>
                        </motion.div>
                        <motion.div
                            whileInView={{opacity: [0, 1], x: [-0, 0]}}
                            transition={{duration: 0.7, delay: 0.4}}
                            className="md:w-[50%] mx-auto mt-14  md:-mt-5">
                            <Image
                                src={support}
                                alt="support"
                                className="md:w-[90%] mx-auto"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </AnimatePresence>
    );
};

export default GetSupport;
