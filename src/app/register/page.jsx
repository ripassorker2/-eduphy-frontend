"use client";
import {resistationSchema} from "@/schemas";
import {useFormik} from "formik";
import Image from "next/image";
import {useEffect, useState} from "react";
import toast from "react-hot-toast";
import userImg from "../../assets/images.png";
import {useUserContext} from "@/context/AuthProvider";
import {useRouter} from "next/navigation";

const Register = () => {
    const {userId} = useUserContext();
    const [file, setFile] = useState(null);

    const router = useRouter();

    useEffect(() => {
        if (userId) {
            router.push("/");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId]);

    const initialResisterValues = {
        fullName: "",
        email: "",
        dateOfBirth: "",
        profileImage: "",
        contactNumber: "",
        parmanentAddress: "",
        educationalQualification: "",
        nidOrBirthNumber: "",
        password: "",
        confirmPassword: "",
    };

    const {values, errors, touched, handleBlur, handleChange, handleSubmit} =
        useFormik({
            initialValues: initialResisterValues,
            validationSchema: resistationSchema,

            onSubmit: (values, action) => {
                if (!file) {
                    return toast.error("Profile picture is required.");
                }

                const formData = new FormData();
                formData.append("image", file);
                fetch(
                    `https://api.imgbb.com/1/upload?key=2f212d1835f034b597e27b088435a1cc`,
                    {
                        method: "POST",
                        body: formData,
                    }
                )
                    .then((res) => res.json())
                    .then((data) => {
                        const userInfo = {
                            fullName: values.fullName,
                            email: values.email,
                            profileImage: data.data.display_url,
                            dateOfBirth: values.dateOfBirth,
                            contactNumber: values.contactNumber,
                            parmanentAddress: values.parmanentAddress,
                            // educationalQualification:
                            //     values.educationalQualification,
                            nidOrBirthNumber: values.nidOrBirthNumber,
                            password: values.password,
                        };

                        fetch(
                            `https://eduphy-server.vercel.app/api/v1/user/create`,
                            {
                                method: "POST",
                                headers: {
                                    "content-type": "application/json",
                                },
                                body: JSON.stringify(userInfo),
                            }
                        )
                            .then((res) => res.json())
                            .then((data) => {
                                console.log(data);
                                if (data.success) {
                                    toast.success("User created Successfully.");
                                    router.push("/login");
                                    action.resetForm();
                                } else {
                                    return toast.error(
                                        data.errorMessage[0].message
                                    );
                                }
                            })
                            .catch((err) => {
                                return toast.error(err);
                            });
                    })
                    .catch((err) => {
                        return toast.error(err);
                    });
            },
        });

    return (
        <div>
            <div className="">
                <div className="container ">
                    <div className="py-14 dark:text-secondaryText text-gray-900">
                        <section className="max-w-5xl dark:bg-black1 w-auto p-6 mx-auto rounded-md shadow-md register-bg ">
                            <h2 className="text-2xl dark:text-secondaryText text-gray-900 font-semibold">
                                Sign Up on
                                <span className="textGradient"> Eduphy</span>
                            </h2>
                            <form onSubmit={handleSubmit} className="">
                                <div className="mt-5">
                                    {file ? (
                                        <div className="w-full flex justify-center items-center flex-col p-3">
                                            <label
                                                htmlFor="file"
                                                className="relative">
                                                <Image
                                                    src={URL.createObjectURL(
                                                        file
                                                    )}
                                                    className="h-28 w-28 rounded-full"
                                                    alt="profile"
                                                    width={100}
                                                    height={100}
                                                />
                                                <input
                                                    type="file"
                                                    name="file"
                                                    id="file"
                                                    accept=".png,.jpg,.jpeg"
                                                    className="hidden"
                                                    onChange={(e) =>
                                                        setFile(
                                                            e.target.files[0]
                                                        )
                                                    }
                                                />
                                            </label>
                                        </div>
                                    ) : (
                                        <div className="w-full flex justify-center items-center flex-col p-3">
                                            <label
                                                htmlFor="file"
                                                className="relative">
                                                <Image
                                                    src={userImg}
                                                    className="h-24 w-24 rounded-full"
                                                    alt="profile"
                                                    width={100}
                                                    height={100}
                                                />

                                                <input
                                                    type="file"
                                                    name="profileImg"
                                                    id="file"
                                                    accept=".png,.jpg,.jpeg"
                                                    className="hidden"
                                                    onChange={(e) =>
                                                        setFile(
                                                            e.target.files[0]
                                                        )
                                                    }
                                                />
                                            </label>
                                        </div>
                                    )}
                                </div>

                                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="name">Full name</label>
                                        <input
                                            id="name"
                                            name="fullName"
                                            type="text"
                                            className="block w-full px-4 py-2 mt-2 dark:bg-primaryBg border dark:text-gray-100 border-gray-600 rounded-md focus:border-[#00bd29] focus:outline-none placeholder:text-gray-500"
                                            placeholder="Enter full name..."
                                            value={values.fullName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            required
                                        />
                                        {errors.fullName &&
                                            touched.fullName && (
                                                <p className="text-red-600 text-sm">
                                                    {errors.fullName}
                                                </p>
                                            )}
                                    </div>
                                    <div>
                                        <label htmlFor="email">
                                            Email Address
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            className="block w-full px-4 py-2 mt-2 dark:bg-primaryBg border dark:text-gray-100 border-gray-600 rounded-md focus:border-[#00bd29] focus:outline-none "
                                            placeholder="Enter email..."
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            required
                                        />
                                        {errors.email && touched.email && (
                                            <p className="text-red-600 text-sm">
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="dateOfBirth">
                                            Date of Birth
                                        </label>
                                        <input
                                            id="dateOfBirth"
                                            name="dateOfBirth"
                                            type="date"
                                            className="block w-full px-4 py-2 mt-2 dark:bg-primaryBg border dark:text-gray-100 border-gray-600 rounded-md focus:border-[#00bd29] focus:outline-none "
                                            value={values.dateOfBirth}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            required
                                        />
                                        {errors.dateOfBirth &&
                                            touched.dateOfBirth && (
                                                <p className="text-red-600 text-sm">
                                                    {errors.dateOfBirth}
                                                </p>
                                            )}
                                    </div>
                                    <div>
                                        <label htmlFor="nidOrBirthNumber">
                                            NID or Birth Registration number
                                        </label>
                                        <input
                                            id="nidOrBirthNumber"
                                            name="nidOrBirthNumber"
                                            type="text"
                                            className="block w-full px-4 py-2 mt-2 dark:bg-primaryBg border dark:text-gray-100 border-gray-600 rounded-md focus:border-[#00bd29] focus:outline-none "
                                            placeholder="Enter NID or Birth number..."
                                            value={values.nidOrBirthNumber}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            required
                                        />
                                        {errors.nidOrBirthNumber &&
                                            touched.nidOrBirthNumber && (
                                                <p className="text-red-600 text-sm">
                                                    {errors.nidOrBirthNumber}
                                                </p>
                                            )}
                                    </div>
                                    <div>
                                        <label htmlFor="contactNumber">
                                            Contact Number
                                        </label>
                                        <input
                                            id="contactNumber"
                                            name="contactNumber"
                                            type="text"
                                            className="block w-full px-4 py-2 mt-2 dark:bg-primaryBg border dark:text-gray-100 border-gray-600 rounded-md focus:border-[#00bd29] focus:outline-none "
                                            placeholder="Enter contact number..."
                                            value={values.contactNumber}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            required
                                        />
                                        {errors.contactNumber &&
                                            touched.contactNumber && (
                                                <p className="text-red-600 text-sm">
                                                    {errors.contactNumber}
                                                </p>
                                            )}
                                    </div>

                                    <div>
                                        <label htmlFor="parmanentAddress">
                                            Permanent Address
                                        </label>
                                        <input
                                            id="parmanentAddress"
                                            name="parmanentAddress"
                                            type="text"
                                            className="block w-full px-4 py-2 mt-2 dark:bg-primaryBg border dark:text-gray-100 border-gray-600 rounded-md focus:border-[#00bd29] focus:outline-none "
                                            placeholder="Enter address..."
                                            value={values.parmanentAddress}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            required
                                        />
                                        {errors.parmanentAddress &&
                                            touched.parmanentAddress && (
                                                <p className="text-red-600 text-sm">
                                                    {errors.parmanentAddress}
                                                </p>
                                            )}
                                    </div>
                                    {/* <div>
                                        <label for="qualification">
                                            Educational Qualification
                                        </label>
                                        <input
                                            id="qualification"
                                            name="qualification"
                                            type="text"
                                            className="block w-full px-4 py-2 mt-2 dark:bg-primaryBg border dark:text-gray-100 border-gray-600 rounded-md focus:border-[#00bd29] focus:outline-none "
                                            placeholder="email"
                                            required
                                        />
                                    </div> */}
                                    <div>
                                        <label htmlFor="password">
                                            Password
                                        </label>
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            className="block w-full px-4 py-2 mt-2 dark:bg-primaryBg border dark:text-gray-100 border-gray-600 rounded-md focus:border-[#00bd29] focus:outline-none "
                                            placeholder="Enter password..."
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            required
                                        />
                                        {errors.password &&
                                            touched.password && (
                                                <p className="text-red-600 text-sm">
                                                    {errors.password}
                                                </p>
                                            )}
                                    </div>
                                    <div>
                                        <label htmlFor="confirmPassword">
                                            Confirm Password
                                        </label>
                                        <input
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            type="password"
                                            className="block w-full px-4 py-2 mt-2 dark:bg-primaryBg border dark:text-gray-100 border-gray-600 rounded-md focus:border-[#00bd29] focus:outline-none "
                                            placeholder="Confirm password..."
                                            value={values.confirmPassword}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            required
                                        />
                                        {errors.confirmPassword &&
                                            touched.confirmPassword && (
                                                <p className="text-red-600 text-sm">
                                                    {errors.confirmPassword}
                                                </p>
                                            )}
                                    </div>
                                </div>

                                <div className="flex justify-end mt-6">
                                    <button
                                        type="submit"
                                        className="btn-primary">
                                        Sign up
                                    </button>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
