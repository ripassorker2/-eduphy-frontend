/* eslint-disable react/no-unescaped-entities */
"use client";
import {AnimatePresence, motion} from "framer-motion";
const WhyUs = () => {
    return (
        <AnimatePresence>
            <section className=" md:py-28 py-16">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <motion.h2
                        whileInView={{opacity: [0, 1], x: [-20, 0]}}
                        transition={{duration: 0.7, delay: 0.3}}
                        className="heading">
                        Why start from <br />
                        <span className="textGradient">Edupy Academy </span>?
                    </motion.h2>
                    <p className="mt-4 mb-8 text-center desc">
                        Take a look at how we walk you through each step.
                    </p>
                    <motion.div
                        whileInView={{opacity: [0, 1], y: [20, 0]}}
                        transition={{duration: 0.5, delay: 0.3}}
                        className="space-y-4">
                        <details className="w-full border dark:border-gray-700 rounded-lg">
                            <summary className="px-4 py-6  text-blue ">
                                Content from industry experts.
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-secondaryText text-gray-900">
                                Each of our content is created with direct
                                support, guidance and feedback from the
                                industry's top experts.
                            </p>
                        </details>
                        <details className="w-full border dark:border-gray-700 rounded-lg">
                            <summary className="px-4 py-6  text-blue ">
                                Direct support from mentors.
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-secondaryText text-gray-900">
                                If you have any problem while doing the course,
                                you will get the solution from our experienced
                                mentors only by contacting during the specified
                                support hours.
                            </p>
                        </details>
                        <details className="w-full border dark:border-gray-700 rounded-lg">
                            <summary className="px-4 py-6  text-blue ">
                                Projects and Assignments.
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-secondaryText text-gray-900">
                                Market standard practical projects and
                                assignments will be done, which you can add to
                                your portfolio.
                            </p>
                        </details>
                        <details className="w-full border dark:border-gray-700 rounded-lg">
                            <summary className="px-4 py-6  text-blue ">
                                Freelancing support.
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-secondaryText text-gray-900">
                                If you want to do freelancing after the course,
                                you will be given detailed guidelines and
                                support.
                            </p>
                        </details>
                    </motion.div>
                </div>
            </section>
        </AnimatePresence>
    );
};

export default WhyUs;
