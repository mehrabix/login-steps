import { useContext } from "react";
import { UserDataContext } from "../components/UserDataProvider";


const test = () => {

    const [userData, setUserData] = useContext(UserDataContext);


    return (
        <>
            <div>{
            
                userData.map((a) => {
                   return <div>{a.email}</div>
                })
            
            }</div>
            </>
    )
}
export default test;