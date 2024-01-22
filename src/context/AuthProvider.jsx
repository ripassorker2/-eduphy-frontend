"use client";
import {getUserInfoFromToken} from "@/utils/getUserInfoFromToken";
import React, {createContext, useContext, useEffect, useState} from "react";

export const UserContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState("");

    useEffect(() => {
        setToken(localStorage.getItem("accessToken") || "");
        setUserId(localStorage.getItem("userId") || "");
        if (userId) {
            // const decodedInfo = getUserInfoFromToken(token);
            fetch(`https://eduphy-server.vercel.app/api/v1/user/${userId}`, {
                headers: {
                    authorization: `${token}`,
                },
            })
                .then((res) => res.json())
                .then((data) => setUser(data.data));
        } else {
            setUser(null);
        }
    }, [userId]);

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        token,
        setToken,
        userId,
        setUserId,
    };
    return (
        <UserContext.Provider value={authInfo}>{children}</UserContext.Provider>
    );
};

export const useUserContext = () => useContext(UserContext);
