import Sidebar from "../../../components/main/Sidebar";
import { useRouter } from "next/router";


const addProduct = () => {
    const router = useRouter();

    const SideBarOptions = (props) => {
        return (
            <>

                <li onClick={props.onClick} className={`w-full  cursor-pointer px-4 py-2 rounded-md ${props.isActive == true ? "text-[#2169F5] bg-[#DFEAFF]" : ""}`}>{props.Name}</li>

            </>
        )
    }



    return (
        <>
            <div dir="rtl" className="flex w-full font-Shabnam text-right ">
                <div className="w-[18%] bg-white h-screen p-4">
                    <h3 className="mb-6">محصولات</h3>
                    <ul className="items-center gap-y-1  flex flex-col">
                        <SideBarOptions onClick={() => router.push("/dashboard")} Name="همه محصولات" isActive={false} />
                        <SideBarOptions onClick={() => router.push("dashboard/addProduct")} Name="افزودن محصول" isActive={true} />
                        <SideBarOptions onClick={() => router.push("dashboard/addProduct")} Name="محصولات ارسال شده" isActive={false} />
                    </ul>
                </div>
            </div>
            </>
    )
}
export default addProduct;