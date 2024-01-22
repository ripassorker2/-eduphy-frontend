"use client";
import {AnimatePresence, motion} from "framer-motion";
import categoryImg from "../../../../assets/category/binbag2.png";
import kid from "../../../../assets/category/kids.png";
import creativity from "../../../../assets/category/cretivity.png";
import develpment from "../../../../assets/category/development.png";
import self from "../../../../assets/category/abilities.png";
import academic from "../../../../assets/category/college.png";
import extra from "../../../../assets/category/extra.png";
import Image from "next/image";

const CourseCategory = () => {
    return (
        <div className="md:py-24 py-16">
            <div className="container">
                <AnimatePresence>
                    <div className="md:grid md:grid-cols-2 gap-10">
                        <div>
                            <motion.h2
                                whileInView={{opacity: [0, 1], x: [-20, 0]}}
                                transition={{duration: 0.7, delay: 0}}
                                className="heading text-start pb-3">
                                One and only place to learn{" "}
                                <span className="textGradient">everything</span>
                            </motion.h2>
                            <p className="desc">
                                Go to the section of your choice to learn
                                anything on any topic
                            </p>
                            <motion.div
                                whileInView={{
                                    opacity: [0, 1],
                                    y: [20, 0],
                                }}
                                transition={{
                                    duration: 0.5,
                                }}>
                                <Image
                                    src={categoryImg}
                                    alt="category image"
                                    className="md:h-[440px]"
                                />
                            </motion.div>{" "}
                        </div>
                        <div className="md:flex items-center">
                            <div className="grid md:grid-cols-3 gap-6 ">
                                <motion.div
                                    whileInView={{opacity: [0, 1], x: [-20, 0]}}
                                    transition={{duration: 0.7, delay: 0.3}}
                                    className="group">
                                    <div className="dark:bg-[#001d30]  h-[200px]  shadow-lg border rounded-lg border-gray-600 p-2 flex   items-center flex-col justify-center text-center group-hover:bg-blue duration-300">
                                        <Image
                                            src={kid}
                                            alt="category image"
                                            className="h-12 w-12"
                                        />

                                        <h3 className="text-blue group-hover:text-gray-900 text-lg py-1 font-semibold">
                                            Kid Zone
                                        </h3>
                                        <p className="desc text-sm ">
                                            Go here to view all content for
                                            clases 5-9
                                        </p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    whileInView={{opacity: [0, 1], x: [-20, 0]}}
                                    transition={{duration: 0.7, delay: 0.5}}
                                    className="group ">
                                    <div className="dark:bg-[#001d30]  h-[200px]  shadow-lg border rounded-lg border-gray-600 p-2 flex   items-center flex-col justify-center text-center group-hover:bg-blue duration-300">
                                        <Image
                                            src={creativity}
                                            alt="category image"
                                            className="h-12 w-12"
                                        />
                                        <h3 className="text-blue group-hover:text-gray-900 text-lg py-1 font-semibold">
                                            Creativity
                                        </h3>
                                        <p className="desc text-sm ">
                                            Go here to see Graphics, Motion,
                                            Illustrations content
                                        </p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    whileInView={{opacity: [0, 1], x: [-20, 0]}}
                                    transition={{duration: 0.7, delay: 0.7}}
                                    className="group ">
                                    <div className="dark:bg-[#001d30]  h-[200px]  shadow-lg border rounded-lg border-gray-600 p-2 flex   items-center flex-col justify-center text-center group-hover:bg-blue duration-300">
                                        <Image
                                            src={develpment}
                                            alt="category image"
                                            className="h-12 w-12"
                                        />
                                        <h3 className="text-blue group-hover:text-gray-900 text-lg py-1 font-semibold">
                                            Development
                                        </h3>
                                        <p className="desc text-sm ">
                                            Go here to see all coding related
                                            content
                                        </p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    whileInView={{opacity: [0, 1], x: [-20, 0]}}
                                    transition={{duration: 0.7, delay: 0.9}}
                                    className="group ">
                                    <div className="dark:bg-[#001d30]  h-[200px]  shadow-lg border rounded-lg border-gray-600 p-2 flex   items-center flex-col justify-center text-center group-hover:bg-blue duration-300">
                                        <Image
                                            src={self}
                                            alt="category image"
                                            className="h-12 w-12"
                                        />
                                        <h3 className="text-blue group-hover:text-gray-900 text-lg py-1 font-semibold">
                                            Self Growth
                                        </h3>
                                        <p className="desc text-sm ">
                                            Go here to see all the content on
                                            making yourself professional
                                        </p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    whileInView={{opacity: [0, 1], x: [-20, 0]}}
                                    transition={{duration: 0.7, delay: 1.1}}
                                    className="group ">
                                    <div className="dark:bg-[#001d30]  h-[200px]  shadow-lg border rounded-lg border-gray-600 p-2 flex   items-center flex-col justify-center text-center group-hover:bg-blue duration-300">
                                        <Image
                                            src={academic}
                                            alt="category image"
                                            className="h-12 w-12"
                                        />
                                        <h3 className="text-blue group-hover:text-gray-900 text-lg py-1 font-semibold">
                                            Academic
                                        </h3>
                                        <p className="desc text-sm ">
                                            Go here to see all the content of
                                            Entrance Test, Job Test, IELTS,
                                            Higher Education
                                        </p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    whileInView={{opacity: [0, 1], x: [-20, 0]}}
                                    transition={{duration: 0.7, delay: 1.3}}
                                    className="group ">
                                    <div className="dark:bg-[#001d30]  h-[200px]  shadow-lg border rounded-lg border-gray-600 p-2 flex   items-center flex-col justify-center text-center group-hover:bg-blue duration-300">
                                        <Image
                                            src={extra}
                                            alt="category image"
                                            className="h-12 w-12"
                                        />
                                        <h3 className="text-blue group-hover:text-gray-900 text-lg py-1 font-semibold">
                                            Extra Activities
                                        </h3>
                                        <p className="desc text-sm ">
                                            Go here to see all the content of
                                            Being Extraordinary
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default CourseCategory;
