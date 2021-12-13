
const EditProduct = (props) => { 
    return (
        
            <div className="flex flex-col w-[35%] h-[43vh] rounded-lg overflow-hidden cursor-default ">
                <div className="bg-white w-full h-[15%] px-12 flex items-center border-b-2 text-lg">ویرایش محصول</div>
                <div className="bg-white w-full h-[87%] px-12 flex gap-y-4 flex-col items-center justify-center">
                    <div className="flex flex-col gap-y-2 w-full">
                        <label className="px-1">نام محصول</label>
                        <p className="py-3 border-2 px-3 border-black rounded-lg">گوشی سامسونگ ۵۶۴۶۶۵</p>
                    </div>
                    <div className="flex flex-col gap-y-2 w-full">
                        <label className="px-1">قیمت</label>
                        <div className="flex justify-between py-3 border-2 px-3 border-black rounded-lg">
                            <p className="">۱۰,۶۹۹,۰۰۰</p>
                            <p className="text-[#393939]">تومان</p>
                        </div>
                    </div>
                    <button className="bg-black mr-auto text-white px-5 py-3 mt-4 rounded-md flex ">ثبت ویرایش</button>
                    
                </div>
            </div>
        
    )
}

export default EditProduct