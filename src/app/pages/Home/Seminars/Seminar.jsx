"use client";
import {AnimatePresence, motion} from "framer-motion";
import {MdLocationPin, MdOutlineEventAvailable} from "react-icons/md";
import {CgCalendarDates} from "react-icons/cg";
import Link from "next/link";

const Seminar = () => {
    return (
        <div className="md:py-24 py-16">
            <AnimatePresence>
                <div className="container">
                    <motion.div
                        whileInView={{opacity: [0, 1], y: [20, 0]}}
                        transition={{duration: 0.5}}>
                        <h3 className="heading">
                            Our <span className="textGradient">Seminars</span>
                        </h3>
                        <p className="desc text-center md:w-[50%] mx-auto">
                            We impart ideas about modern technology to students
                            through free seminars in various educational
                            institutions of Bangladesh.
                        </p>
                    </motion.div>
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-10 mt-10 pl">
                        <Link href={"/shahjadpur"}>
                            {" "}
                            <motion.div
                                whileInView={{opacity: [0, 1], x: [-20, 0]}}
                                transition={{duration: 0.7, delay: 0.5}}
                                className="dark:bg-[#001d30] shadow-lg h-[210px] rounded-lg p-6">
                                <div className="flex pt-2">
                                    <div>
                                        <CgCalendarDates className="text-lg mr-2" />
                                    </div>
                                    <p>17 July, 2023</p>
                                </div>
                                <div className="flex  pt-2">
                                    <div>
                                        <MdOutlineEventAvailable className="!text-lg mr-2" />
                                    </div>
                                    <p className="textGradient">
                                        EMPOWERING JUNIORS WITH CODING SKILLS
                                        AND CYBER AWARENESS
                                    </p>
                                </div>
                                <div className="flex pt-2">
                                    <div>
                                        <MdLocationPin className="text-lg mr-2" />
                                    </div>
                                    <p>
                                        Shahjadpur Ibrahim Pilot Girls School,
                                        Sirajganj
                                    </p>
                                </div>
                            </motion.div>
                        </Link>
                        <Link href={"/pubna"}>
                            <motion.div
                                whileInView={{opacity: [0, 1], x: [-20, 0]}}
                                transition={{duration: 0.7, delay: 0.7}}
                                className="dark:bg-[#001d30] shadow-lg h-[210px] rounded-lg p-6">
                                <div className="flex pt-2">
                                    <div>
                                        <CgCalendarDates className="text-lg mr-2" />
                                    </div>
                                    <p>14 June, 2023</p>
                                </div>
                                <div className="flex  pt-2">
                                    <div>
                                        <MdOutlineEventAvailable className="!text-lg mr-2" />
                                    </div>
                                    <p className="textGradient">
                                        CODING For All And Soft skill
                                    </p>
                                </div>
                                <div className="flex pt-2">
                                    <div>
                                        <MdLocationPin className="text-lg mr-2" />
                                    </div>
                                    <p>Pabna Science and Technology, Pabna</p>
                                </div>
                            </motion.div>
                        </Link>
                        <Link href={"/rangdhonu"}>
                            <motion.div
                                whileInView={{opacity: [0, 1], x: [-20, 0]}}
                                transition={{duration: 0.7, delay: 0.9}}
                                className="dark:bg-[#001d30] shadow-lg h-[210px] rounded-lg p-6">
                                <div className="flex pt-2">
                                    <div>
                                        <CgCalendarDates className="text-lg mr-2" />
                                    </div>
                                    <p>25 June, 2023</p>
                                </div>
                                <div className="flex pt-2">
                                    <div>
                                        <MdOutlineEventAvailable className="!text-lg mr-2" />
                                    </div>
                                    <p className="textGradient">
                                        EMPOWERING JUNIORS WITH CODING SKILLS
                                        AND CYBER AWARENESS
                                    </p>
                                </div>
                                <div className="flex pt-2">
                                    <div>
                                        <MdLocationPin className="text-lg mr-2" />
                                    </div>
                                    <p>Rangdhonu Model School, Sirajganj</p>
                                </div>
                            </motion.div>
                        </Link>
                    </div>
                </div>
            </AnimatePresence>
        </div>
    );
};

export default Seminar;
