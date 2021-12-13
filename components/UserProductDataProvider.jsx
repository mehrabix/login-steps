import { useState, useEffect, createContext } from "react";
import Cookies from "js-cookie";

export const UserProductDataContext = createContext({
    userProductData: [],
    setUserData: () => { },
});


export const UserProductDataProvider = (props) => {

    const [userProductDataApi, setProductDataApi] = useState([]);

    useEffect(() => {
        Cookies.set("userProductData", JSON.stringify(productData));
        setProductDataApi(JSON.parse(Cookies.get("userProductData")));
    }, []);

    const [productData, setProductData] = useState([
        {
            id: 1,
            name: "گوشی موبایل Iphone 13 Pro Max",
            price: "40000000 تومان",
            group: "پل",
            releaseDate: "21 تیر ۱۴۰۰",
        },
        {
            id: 2,
            name: "گوشی موبایل Iphone 13 A2634",
            price: "28500000 تومان",
            group: "پل",
            releaseDate: "21 تیر ۱۴۰۰",
        },
        {
            id: 3,
            name: "گوشی موبایل Iphone 13 ۲۰۲۰",
            price: "45000400 تومان",
            group: "پل",
            releaseDate: "21 تیر ۱۴۰۰",
        },
        {
            id: 4,
            name: "گوشی موبایل هواوی ۲۵۶۶",
            price: "82520000 تومان",
            group: "هواوی",
            releaseDate: "21 تیر ۱۴۰۰",
        },
        {
            id: 5,
            name: "گوشی موبایل هواوی ۱۸۵۲۲",
            price: "40000000 تومان",
            group: "هواوی",
            releaseDate: "21 تیر ۱۴۰۰",
        },
    ]);


    return (
        <UserProductDataContext.Provider value={[userProductDataApi, setProductDataApi]}>
            {props.children}
        </UserProductDataContext.Provider>
    )

    
}