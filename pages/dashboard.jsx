import Link from "next/link";

const dashboard = () => {
    return (
        <>
            <div className="flex w-full font-Shabnam text-right ">
                <div className="w-[82%] bg-[#F2F6FB]  h-screen">
                    

                </div>
                <div className="w-[18%] bg-white h-screen p-4">
                    <h3 className="mb-6">محصولات</h3>
                    <ul className="items-center gap-y-1  flex flex-col">
                        <Link href="#">
                            <li className="bg-[#DFEAFF] cursor-pointer w-full text-[#2169F5 px-4 py-2 rounded-md text-[#2169F5] ]">همه محصولات</li>

                        </Link>
                        <Link href="#">
                            <li className=" w-full text-[#2169F5 cursor-pointer px-4 py-2 rounded-md text-black ]">افزودن محصول</li>

                        </Link>
                        <Link href="#">
                            <li className=" w-full text-[#2169F5 cursor-pointer px-4 py-2 rounded-md text-black ]">محصولات ارسال شده</li>

                        </Link>

                    </ul>
                </div>
            </div>
            </>
    );
}
export default dashboard;