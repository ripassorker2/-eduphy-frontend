"use client";
import ThemeSwitcher from "@/utils/ThemeSwitcher";
import logo from "../../../assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import {IoMenu} from "react-icons/io5";
import {useUserContext} from "@/context/AuthProvider";
import {Menu, Transition} from "@headlessui/react";
import {Fragment} from "react";
import {DiGoogleAnalytics} from "react-icons/di";

import {CgProfile} from "react-icons/cg";
import {FiLogIn} from "react-icons/fi";

const manuItem = [
    {
        link: "/",
        name: "Profile",
        icon: <CgProfile className="mr-2 h-5 w-5" aria-hidden="true" />,
    },

    // {
    //     link: "/",
    //     name: "Report",
    //     icon: <DiGoogleAnalytics className="mr-2 h-5 w-5" aria-hidden="true" />,
    // },
];

const Header = () => {
    const {user, setUserId} = useUserContext();

    const handleLogOut = () => {
        setUserId("");
        localStorage.removeItem("userId");
        localStorage.removeItem("accessToken");
    };
    return (
        <header className="dark:bg-[#001d30] bg-slate-100 sticky top-0 z-[999999]">
            <div className="container">
                <div className="flex justify-between items-center py-5">
                    <Link
                        href={"/"}
                        className="flex items-center justify-between">
                        <Image src={logo} height={100} width={110} alt="logo" />
                    </Link>

                    <div className="hidden md:block">
                        <ul className="flex items-center justify-center space-x-8">
                            <li>
                                <Link
                                    className="text-primaryText dark:text-secondaryText hover:text-blue text-base dark:hover:text-blue duration-300 "
                                    href={"/"}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-primaryText dark:text-secondaryText hover:text-blue text-base dark:hover:text-blue duration-300 "
                                    href={"/"}>
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-primaryText dark:text-secondaryText hover:text-blue text-base dark:hover:text-blue duration-300 "
                                    href={"/"}>
                                    Marketplace
                                </Link>
                            </li>
                            {/* <li>
                                <Link
                                    className="text-primaryText dark:text-secondaryText hover:text-blue text-base dark:hover:text-blue duration-300 "
                                    href={"/"}>
                                    Courses
                                </Link>
                            </li> */}
                            <li>
                                <Link
                                    className="text-primaryText dark:text-secondaryText hover:text-blue text-base dark:hover:text-blue duration-300 "
                                    href={"/"}>
                                    About
                                </Link>
                            </li>

                            {user && (
                                <Menu
                                    as="div"
                                    className="relative inline-block mt-[6px]">
                                    <Menu.Button className="tooltip tooltip-left">
                                        <Image
                                            src={user.profileImage}
                                            className="rounded-full border border-gray-600  w-[40px] h-[40px]"
                                            alt=""
                                            width={40}
                                            height={40}
                                        />
                                    </Menu.Button>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95">
                                        <Menu.Items className="absolute right-0 top-11  mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md background primary-text shadow-lg bg-gray-100 dark:bg-black1   focus:outline-none">
                                            <div className="px-1 py-1 ">
                                                {manuItem?.map((item, i) => (
                                                    <Menu.Item key={i}>
                                                        {({active}) => (
                                                            <div
                                                                // href={`${item.link}`}
                                                                className={`${
                                                                    active
                                                                        ? "bg-[#00bd29] text-white"
                                                                        : ""
                                                                } group flex w-full items-center rounded-md px-2 py-2 text-base`}>
                                                                {active ? (
                                                                    <span>
                                                                        {
                                                                            item.icon
                                                                        }
                                                                    </span>
                                                                ) : (
                                                                    <span>
                                                                        {
                                                                            item.icon
                                                                        }
                                                                    </span>
                                                                )}
                                                                {item.name}
                                                            </div>
                                                        )}
                                                    </Menu.Item>
                                                ))}
                                                <Menu.Item>
                                                    {({active}) => (
                                                        <div
                                                            onClick={
                                                                handleLogOut
                                                            }
                                                            className={`${
                                                                active
                                                                    ? "bg-[#00bd29] text-white"
                                                                    : ""
                                                            } group flex w-full items-center rounded-md px-2 py-2 text-base`}>
                                                            {active ? (
                                                                <FiLogIn
                                                                    className="mr-2 h-5 w-5"
                                                                    aria-hidden="true"
                                                                />
                                                            ) : (
                                                                <FiLogIn
                                                                    className="mr-2 h-5 w-5"
                                                                    aria-hidden="true"
                                                                />
                                                            )}
                                                            Log out
                                                        </div>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            )}

                            <div className="mt-3">
                                <ThemeSwitcher />
                            </div>
                            {!user?.email && (
                                <li>
                                    <Link
                                        className="btn-primary text-gray-800"
                                        href={"/login"}>
                                        Login
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="md:hidden block">
                        <IoMenu size={28} className="mr-2" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;