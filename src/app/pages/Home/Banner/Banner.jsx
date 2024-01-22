const Banner = () => {
    return (
        <div className="md:py-24 py-16 ">
            <div className="container">
                <div className="md:flex justify-between md:space-x-10">
                    <div className="md:w-[50%]">
                        <h3 className="md:text-3xl text-xl mb-2 dark:text-slate-50 text-gray-900">
                            You will learn easily
                        </h3>
                        <h3 className="heading text-start md:text-6xl">
                            We will teach the
                            <br />
                            <span className="textGradient"> STORY</span>
                        </h3>
                    </div>
                    <div className="md:w-[50%] mt-10 md:mt-0">
                        <p className="md:text-end desc md:ml-20">
                            Edupy Academy is a platform where we create passion
                            for learning, where every student can thrive through
                            this experience, and shape a bright future for
                            generations to come.
                        </p>
                        <div className="flex flex-row  md:justify-end mt-7">
                            <button className="btn-primary mr-4 text-gray-700">
                                New Batch
                            </button>
                            <button className="btn-primary bg-gray-600 hover:bg-gray-700">
                                Free Seminar
                            </button>
                        </div>
                    </div>
                </div>{" "}
            </div>
        </div>
    );
};

export default Banner;
