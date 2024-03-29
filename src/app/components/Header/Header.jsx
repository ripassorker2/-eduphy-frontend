"use client";
import ThemeSwitcher from "@/utils/ThemeSwitcher";
import logo from "../../../assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import {HiBars3} from "react-icons/hi2";
import {useUserContext} from "@/context/AuthProvider";
import {Menu, Transition} from "@headlessui/react";
import {Fragment, useState} from "react";
import {DiGoogleAnalytics} from "react-icons/di";
import {CgProfile} from "react-icons/cg";
import {FiLogIn} from "react-icons/fi";
import {MdOutlineCancel} from "react-icons/md";

const manuItem = [
    {
        link: "/",
        name: "Profile",
        icon: <CgProfile className="mr-2 h-5 w-5" aria-hidden="true" />,
    },

    {
        link: "/addReport",
        name: "Add Report",
        icon: <DiGoogleAnalytics className="mr-2 h-5 w-5" aria-hidden="true" />,
    },
];

const Header = () => {
    const {user, setUserId} = useUserContext();
    const [open, setOpen] = useState(false);
    console.log(user);

    const handleLogOut = () => {
        setUserId("");
        localStorage.removeItem("userId");
        localStorage.removeItem("accessToken");
    };
    return (
        <header className="dark:bg-[#001d30] bg-slate-100 sticky top-0 z-[999999]">
            <div className="container">
                <div className="flex justify-between items-center md:py-6 py-7">
                    <Link
                        href={"/"}
                        className="flex items-center justify-between">
                        <Image src={logo} height={100} width={110} alt="logo" />
                    </Link>

                    <div className="">
                        <ul className="md:flex hidden  items-center justify-center space-x-8">
                            <li>
                                <Link
                                    className="text-primaryText dark:text-secondaryText hover:text-blue text-lg dark:hover:text-blue duration-300 "
                                    href={"/"}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-primaryText dark:text-secondaryText hover:text-blue text-lg dark:hover:text-blue duration-300 "
                                    href={"/"}>
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-primaryText dark:text-secondaryText hover:text-blue text-lg dark:hover:text-blue duration-300 "
                                    href={"/"}>
                                    Marketplace
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-primaryText dark:text-secondaryText hover:text-blue text-lg dark:hover:text-blue duration-300 "
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
                                                            <Link
                                                                href={`${item.link}`}
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
                                                            </Link>
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
                        <ul
                            className={`md:hidden flex flex-col space-y-3 text-center dark:bg-primaryBg bg-secondaryBg fixed w-full top-14 overflow-y-auto bottom-0 py-10 mt-7 pl-4 duration-500 ${
                                open ? "left-0" : "left-[-100%]"
                            }`}>
                            <li className="mt-14">
                                <Link
                                    className="text-primaryText dark:text-secondaryText hover:text-blue text-lg dark:hover:text-blue duration-300 "
                                    href={"/"}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-primaryText dark:text-secondaryText hover:text-blue text-lg dark:hover:text-blue duration-300 "
                                    href={"/"}>
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-primaryText dark:text-secondaryText hover:text-blue text-lg dark:hover:text-blue duration-300 "
                                    href={"/"}>
                                    Marketplace
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-primaryText dark:text-secondaryText hover:text-blue text-lg dark:hover:text-blue duration-300 "
                                    href={"/"}>
                                    About
                                </Link>
                            </li>
                            <div className="mt-3">
                                <ThemeSwitcher />
                            </div>
                            {user && (
                                <Menu
                                    as="div"
                                    className="relative inline-block mt-[6px]">
                                    <Menu.Button className="tooltip tooltip-left">
                                        <div className="flex flex-col items-center justify-center">
                                            <Image
                                                src={user.profileImage}
                                                className="rounded-full border border-gray-600  w-[40px] h-[40px]"
                                                alt=""
                                                width={40}
                                                height={40}
                                            />
                                            <p className="text-base mt-1 font-semibold">
                                                {user?.fullName}
                                            </p>
                                        </div>
                                    </Menu.Button>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95">
                                        <Menu.Items className="absolute right-16 top-11  mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md background primary-text shadow-lg bg-gray-100 dark:bg-black1   focus:outline-none">
                                            <div className="px-1 py-1 ">
                                                {manuItem?.map((item, i) => (
                                                    <Menu.Item key={i}>
                                                        {({active}) => (
                                                            <Link
                                                                href={`${item.link}`}
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
                                                            </Link>
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
                    <div
                        className="text-3xl md:hidden dark:text-gray-300 text-gray-800"
                        onClick={() => setOpen(!open)}>
                        {open ? <MdOutlineCancel /> : <HiBars3 />}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
