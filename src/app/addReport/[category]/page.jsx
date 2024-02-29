"use client";
import React, {useState} from "react";
import toast from "react-hot-toast";
const studyOptions = [
    "0 hour per week",
    "1-5 hours per week",
    "6-10 hours per week",
    "11-15 hours per week",
    "16-20 hours per week",
    "21-25 hours per week",
    "26-30 hours per week",
    "31-35 hours per week",
    "36-40 hours per week",
    "41-45 hours per week",
    "46-50 ++ hours per week",
];
const humanityOptions = [
    "0 people",
    "1 people",
    "2 people",
    "3 people",
    "4 people",
    "5 people",
    "6 people",
    "7 or more people",
];
const liesArray = [
    "0 lies",
    "1-3 lies",
    "4-6 lies",
    "7-9 lies",
    "10-13 lies",
    "14-16 lies",
    "17-19 lies",
    "20-23 lies",
    "24-26 lies",
    "27-29 lies",
    "30-33 ++ lies",
];
const orderFollowedArray = [
    "0 orders followed",
    "1-3 orders followed",
    "4-6 orders followed",
    "7-9 orders followed",
    "10-13 orders followed",
    "14-16 orders followed",
    "17-19 orders followed",
    "20-23 orders followed",
    "24-26 orders followed",
    "27-29 orders followed",
    "30-33 ++ orders followed",
];
const treePlantitionArray = [
    "0 trees planted",
    "1 tree planted",
    "2 trees planted",
    "3 trees planted",
    "4 trees planted",
    "5 trees planted",
    "6 trees planted",
    "7 trees planted",
    "8 trees planted",
    "9 trees planted",
    "10 ++ trees planted",
];

const ReportCategoryPage = ({params}) => {
    const decodedString = decodeURIComponent(params?.category);

    const generateID = (index) => `studyOption${index}`;
    const [selectedOption, setSelectedOption] = useState(null);
    const [extraFeilds, setextraFeilds] = useState({
        bookRead: 0,
        religiousActivity: 0,
        personalDevelopment: 0,
    });

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    // Function to handle radio button change
    const handleOptionChangeExtra = (event) => {
        const {name, value} = event.target;
        setextraFeilds({
            ...extraFeilds,
            [name]: value,
        });
    };

    const calculateAverage = (selectedOption) => {
        const [lowerBound, upperBound] = selectedOption?.split("-");
        if (upperBound) {
            const avg = (parseInt(lowerBound) + parseInt(upperBound)) / 2;
            return parseInt(avg);
        } else {
            return parseInt(lowerBound);
        }
    };

    const handleSubmit = () => {
        const data = {
            category: decodedString,
            point: 0,
        };

        if (
            !selectedOption &&
            !extraFeilds.bookRead &&
            !extraFeilds.personalDevelopment &&
            !extraFeilds.religiousActivity
        ) {
            return toast.error("Please select option.");
        }

        if (decodedString == "Hard Working Level") {
            data.point = calculateAverage(selectedOption) * 2;
        } else if (decodedString == "Humanity Level") {
            const number = parseInt(selectedOption?.split(" ")[0]);
            data.point = number * 5;
        } else if (decodedString == "Honesty Level") {
            data.point = calculateAverage(selectedOption) * 10;
        } else if (decodedString == "Relationship with Parents") {
            data.point = calculateAverage(selectedOption) * 2;
        } else if (decodedString == "Tree plantitaion") {
            const number = parseInt(selectedOption?.split(" ")[0]);
            data.point = number * 15;
        } else {
            data.point =
                parseInt(extraFeilds.bookRead) +
                parseInt(extraFeilds.personalDevelopment) +
                parseInt(extraFeilds.religiousActivity);
        }
        toast.success("Submitted Success");
        console.log(data);
    };

    return (
        <div className="container">
            <div className="my-16">
                {decodedString == "Hard Working Level" && (
                    <div>
                        <h2 className="text-lg mb-4">
                            1. What is your weekly study routine like?
                        </h2>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-6">
                            {studyOptions.map((option, index) => (
                                <label
                                    key={index}
                                    htmlFor={generateID(index)}
                                    className="flex items-center space-x-2 text-base bg-black1 rounded-md px-4 py-3">
                                    <input
                                        type="radio"
                                        name="studyRoutine"
                                        id={generateID(index)}
                                        value={option}
                                        onChange={handleOptionChange}
                                    />
                                    <p>{option}</p>
                                </label>
                            ))}
                        </div>
                    </div>
                )}
                {decodedString == "Humanity Level" && (
                    <div>
                        <h2 className="text-lg mb-4">
                            1.How many people have you helped in the past week?
                        </h2>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-6">
                            {humanityOptions.map((option, index) => (
                                <label
                                    key={index}
                                    htmlFor={generateID(index)}
                                    className="flex items-center space-x-2 text-base bg-black1 rounded-md px-4 py-3">
                                    <input
                                        type="radio"
                                        name="humanityLevel"
                                        id={generateID(index)}
                                        value={option}
                                        onChange={handleOptionChange}
                                    />
                                    <p>{option}</p>
                                </label>
                            ))}
                        </div>
                    </div>
                )}
                {decodedString == "Honesty Level" && (
                    <div>
                        <h2 className="text-lg mb-4">
                            1.During the past week, how many lies have you told?
                        </h2>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-6">
                            {liesArray.map((lie, index) => (
                                <label
                                    key={index}
                                    className="flex items-center space-x-2 text-base bg-black1 rounded-md px-4 py-3">
                                    <input
                                        type="radio"
                                        name="liesCount"
                                        value={lie}
                                        id={generateID(index)}
                                        onChange={handleOptionChange}
                                    />
                                    <p>{lie}</p>
                                </label>
                            ))}
                        </div>
                    </div>
                )}
                {decodedString == "Relationship with Parents" && (
                    <div>
                        <h2 className="text-lg mb-4">
                            1. How many orders of your parents have you followed
                            in the concerned week?
                        </h2>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-6">
                            {orderFollowedArray.map((option, index) => (
                                <label
                                    key={index}
                                    className="flex items-center space-x-2 text-base bg-black1 rounded-md px-4 py-3">
                                    <input
                                        type="radio"
                                        name="ordersFollowed"
                                        value={option}
                                        id={generateID(index)}
                                        onChange={handleOptionChange}
                                    />
                                    <p>{option}</p>
                                </label>
                            ))}
                        </div>
                    </div>
                )}
                {decodedString == "Tree plantitaion" && (
                    <div>
                        <h2 className="text-lg mb-4">
                            1. How many trees planting in last one month?
                        </h2>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-6">
                            {treePlantitionArray.map((option, index) => (
                                <label
                                    key={index}
                                    className="flex items-center space-x-2 text-base bg-black1 rounded-md px-4 py-3">
                                    <input
                                        type="radio"
                                        name="treePlantation"
                                        value={option}
                                        onChange={handleOptionChange}
                                    />
                                    <p>{option}</p>
                                </label>
                            ))}
                        </div>
                    </div>
                )}
                {decodedString == "Extra curricular activities" && (
                    <div>
                        <div className="mb-6">
                            <h2 className="text-lg mb-2">
                                1. Did you read any books outside of textbooks
                                in last week?
                            </h2>
                            <div className="flex space-x-6 items-center">
                                <label className="flex items-center space-x-2 ">
                                    <input
                                        type="radio"
                                        name="bookRead"
                                        value="10"
                                        onChange={handleOptionChangeExtra}
                                    />
                                    <p>Yes</p>
                                </label>
                                <label className="flex items-center space-x-2 ">
                                    <input
                                        type="radio"
                                        name="bookRead"
                                        value="0"
                                        onChange={handleOptionChangeExtra}
                                    />
                                    <p>No</p>
                                </label>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-lg mb-2">
                                2. Did you participate in any religious
                                activities in last week?
                            </h2>
                            <div className="flex space-x-6 items-center">
                                <label className="flex items-center space-x-2 ">
                                    <input
                                        type="radio"
                                        name="religiousActivity"
                                        value="10"
                                        onChange={handleOptionChangeExtra}
                                    />
                                    <p>Yes</p>
                                </label>
                                <label className="flex items-center space-x-2 ">
                                    <input
                                        type="radio"
                                        name="religiousActivity"
                                        value="0"
                                        onChange={handleOptionChangeExtra}
                                    />
                                    <p>No</p>
                                </label>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-lg mb-2">
                                3. Did you perform any activities for personal
                                development in last week?
                            </h2>
                            <div className="flex space-x-6 items-center">
                                <label className="flex items-center space-x-2 ">
                                    <input
                                        type="radio"
                                        name="personalDevelopment"
                                        value="10"
                                        onChange={handleOptionChangeExtra}
                                    />
                                    <p>Yes</p>
                                </label>
                                <label className="flex items-center space-x-2 ">
                                    <input
                                        type="radio"
                                        name="personalDevelopment"
                                        value="0"
                                        onChange={handleOptionChangeExtra}
                                    />
                                    <p>No</p>
                                </label>
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex justify-end mt-5">
                    <button onClick={handleSubmit} className="btn-primary">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReportCategoryPage;
