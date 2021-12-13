import { useState, useEffect, createContext } from "react";
import Cookies from "js-cookie";

export const UserDataContext = createContext({
    userData: [],
    setUserData: () => {},
});


export const UserDataProvider = (props) => {

    const [userDataApi, setUserDataApi] = useState([]);


    useEffect(() => {
        Cookies.set("userData", JSON.stringify(userData));
        setUserDataApi(JSON.parse(Cookies.get("userData")));
    }, []);


    const [userData, setUserData] = useState([
        {
            id: 1,
            email: "test1@google.com",
            password: "123",
        },
        {
            id: 2,
            email: "test2@google.com",
            password: "1234",
        },
        {
            id: 3,
            email: "test3@google.com",
            password: "12345",
        },
        {
            id: 4,
            email: "test4@google.com",
            password: "123456",
        },
        {
            id: 5,
            email: "test5@google.com",
            password: "1234567",
        },
    ]);

    return (
        <UserDataContext.Provider value={[userDataApi, setUserDataApi]}>
            {props.children}
        </UserDataContext.Provider>
    )

}