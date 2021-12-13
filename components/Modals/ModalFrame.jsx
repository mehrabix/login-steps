

const ModalFrame = (props) => {
    return (
        <>
            <div onClick={props.onClick} dir="rtl" className={`${props.showModal == true ? "h-screen w-screen" : "h-0 w-0 overflow-hidden"} absolute font-Shabnam  flex justify-center items-center bg-[#000000b9] `}>
                {props.children}
            </div>
            </>
    )
}
export default ModalFrame;