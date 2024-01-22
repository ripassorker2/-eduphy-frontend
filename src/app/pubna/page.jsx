/* eslint-disable @next/next/no-img-element */
"use client";
import {motion} from "framer-motion";
import pic1 from "../../assets/seminar1/pic1.jpg";
import pic2 from "../../assets/seminar1/pic2.jpg";
import pic3 from "../../assets/seminar1/pic3.jpg";
import pic4 from "../../assets/seminar1/pic4.jpg";
import Image from "next/image";
const PubnaSeminar = () => {
    return (
        <div className="container">
            <div className="py-24">
                <motion.div
                    whileInView={{opacity: [0, 1]}}
                    transition={{duration: 0.7, delay: 0}}
                    className="w-full rounded-lg">
                    <iframe
                        className="w-full md:min-h-[600px]"
                        src={"https://www.youtube.com/embed/CmEom-ooLmc"}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-10 mt-16">
                    <motion.div
                        whileInView={{opacity: [0, 1], x: [-20, 0]}}
                        transition={{duration: 0.7, delay: 0.7}}>
                        <Image
                            src={pic1}
                            className="rounded-md w-full md:h-[420px]"
                            alt="Description"
                        />
                    </motion.div>

                    <motion.div
                        whileInView={{opacity: [0, 1], x: [-20, 0]}}
                        transition={{duration: 0.7, delay: 0.9}}>
                        <Image
                            src={pic2}
                            className="rounded-md w-full md:h-[420px]"
                            alt="Description"
                        />
                    </motion.div>

                    <motion.div
                        whileInView={{opacity: [0, 1], x: [-20, 0]}}
                        transition={{duration: 0.7, delay: 1.1}}>
                        <Image
                            src={pic3}
                            className="rounded-md w-full md:h-[420px]"
                            alt="Description"
                        />
                    </motion.div>

                    <motion.div
                        whileInView={{opacity: [0, 1], x: [-20, 0]}}
                        transition={{duration: 0.7, delay: 1.3}}>
                        <Image
                            src={pic4}
                            className="rounded-md w-full md:h-[420px]"
                            alt="Description"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default PubnaSeminar;
