"use client";
import mehedi from "../../../../assets/team/mehedi.jpg";
import nahid from "../../../../assets/team/nahid.jpeg";
import shykat from "../../../../assets/team/shykat.jpg";
import mati from "../../../../assets/team/mati.jpg";
import ananna from "../../../../assets/team/ananna.jpg";

import {AnimatePresence, motion} from "framer-motion";
import Image from "next/image";
const Team = () => {
    return (
        <AnimatePresence>
            <div className="md:py-24 py-16">
                <motion.div
                    whileInView={{opacity: [0, 1], y: [20, 0]}}
                    transition={{duration: 0.5, delay: 0.3}}
                    className="mb-16">
                    <h3 className="heading ">
                        Our Skilled ,<span className="textGradient">Team</span>
                        Your <br />
                        <span className="textGradient">Skilled </span> Mentor.
                    </h3>
                    <p className="desc text-center">
                        Our teacher panel are graduates from universities in
                        Bangladesh and outside Bangladesh
                    </p>
                </motion.div>
                <div className="grid container md:gap-6 gap-11  md:grid-cols-3 lg:grid-cols-5">
                    <div>
                        <div className="relative overflow-hidden transition duration-300 transform md:mx-0 mx-6 rounded-md shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                            <Image
                                className=" w-full md:h-[350px] h-[300px] "
                                src={mehedi}
                                alt="team"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4  transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-1 font-semibold text-gray-300">
                                    MD. Mehedi Hasan
                                </p>

                                <div>
                                    <button className="text-xs mb-2 bg-purple-600 text-gray-300 px-3 py-1 rounded-md">
                                        CEO & Founder
                                    </button>
                                </div>
                                <p className="mb-3 text-sm font-medium  text-blue">
                                    CSE - Lovely Professional University.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="relative overflow-hidden transition duration-300 transform md:mx-0 mx-6 rounded-md shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                            <Image
                                className=" w-full md:h-[350px] h-[300px] "
                                src={nahid}
                                alt="team"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4  transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-1 font-semibold text-gray-300">
                                    Nahid Hasan
                                </p>

                                <div>
                                    <button className="text-xs mb-2 bg-purple-600 text-gray-300 px-3 py-1 rounded-md">
                                        Co-Founder & Developer
                                    </button>
                                </div>
                                <p className="mb-3 text-sm font-medium  text-blue">
                                    CSE - Southeast University.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="relative overflow-hidden transition duration-300 transform md:mx-0 mx-6 rounded-md shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                            <Image
                                className=" w-full md:h-[350px] h-[300px] "
                                src={shykat}
                                alt="team"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4  transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-1 font-semibold text-gray-300">
                                    Shykat Raha
                                </p>

                                <div>
                                    <button className="text-xs mb-2 bg-purple-600 text-gray-300 px-3 py-1 rounded-md">
                                        Co-Founder and Web Developer
                                    </button>
                                </div>
                                <p className="mb-3 text-sm font-medium  text-blue">
                                    CSE - Lovely Professional University.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="relative overflow-hidden transition duration-300 transform md:mx-0 mx-6 rounded-md shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                            <Image
                                className=" w-full md:h-[350px] h-[300px] "
                                src={mati}
                                alt="team"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4  transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-1 font-semibold text-gray-300">
                                    Mahabuba Hasan Mati
                                </p>

                                <div>
                                    <button className="text-xs mb-2 bg-purple-600 text-gray-300 px-3 py-1 rounded-md">
                                        Chief Marketing Officer
                                    </button>
                                </div>
                                <p className="mb-3 text-sm font-medium  text-blue">
                                    EEE - BUET.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="relative overflow-hidden transition duration-300 transform md:mx-0 mx-6 rounded-md shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                            <Image
                                className=" w-full md:h-[350px] h-[300px] "
                                src={ananna}
                                alt="team"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4  transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                <p className="mb-1 font-semibold text-gray-300">
                                    Mehra Khatun Ananna
                                </p>

                                <div>
                                    <button className="text-xs mb-2 bg-purple-600 text-gray-300 px-3 py-1 rounded-md">
                                        Admin Assistant
                                    </button>
                                </div>
                                <p className="mb-3 text-sm font-medium  text-blue">
                                    Sociology - Rabindra University, Bangladesh.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatePresence>
    );
};

export default Team;
