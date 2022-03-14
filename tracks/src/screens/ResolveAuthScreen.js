import React, { useContext, useEffect } from "react";
import { Text } from "react-native";
import { Context as authContext } from "../context/authContext";

const ResolveAuthScreen = () => {

    const { tryLocalSignin } = useContext(authContext)

    useEffect(() => {
        tryLocalSignin()
    }, [])

    return null;
}

export default ResolveAuthScreen