import Link from "next/link";
import React from "react";
const data = [
    {
        title: "Hard Working Level",
    },
    {
        title: "Humanity Level",
    },
    {
        title: "Honesty Level",
    },
    {
        title: "Relationship with Parents",
    },
    {
        title: "Tree plantitaion",
    },
    {
        title: "Extra curricular activities",
    },
];

const AddReportPage = () => {
    return (
        <div className="container">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-10 my-16">
                {data?.map((dt, i) => (
                    <div
                        key={i}
                        className="dark:bg-black1 shadow-lg rounded-md px-6 py-8  text-center">
                        <div>
                            <h3 className="text-xl ">{dt?.title}</h3>
                            <Link
                                href={`/addReport/${dt.title}`}
                                className="underline">
                                <span> Go here</span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AddReportPage;
