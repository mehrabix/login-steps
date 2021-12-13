import Link from "next/link";
import { useState, useContext } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { UserDataContext } from "../components/UserDataProvider";


export default function Home() {

  const router = useRouter();

  const [userData, setUserData] = useContext(UserDataContext);
  const [emailborder, setEmailBorder] = useState("border-black");
  const [passwordborder, setPasswordBorder] = useState("border-black");
  const [emailErrorMessage, setEmailMessageText] = useState("");
  const [passwordErrorMessage, setPasswordMessageText] = useState("");
  const [messageBoxText, setMessageBoxText] = useState("");
  const [messageBoxColor, setMessageBoxColor] = useState("");
  const [messageBoxDisplay, setMessageBoxDisplay] = useState("h-0 overflow-hidden");

  const handlePasswordInputValidation = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (email === "") {
      setEmailBorder("border-red-600");
      setEmailMessageText("ایمیل خود را وارد کنید");
    }
    if (password === "") {
      setPasswordBorder("border-red-600");
      setPasswordMessageText("رمز عبور خود را وارد کنید");
    }
    if (email !== "" && password !== "")
    {
      const user = userData.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        Cookies.set("user", JSON.stringify(user));
        setMessageBoxDisplay("h-16");
        setMessageBoxColor("border-[#299603] bg-[#33AE08]");
        setMessageBoxText("با موفقیت وارد داشبورد شدید");
        router.push("/dashboard");
        
      } else {
        setEmailBorder("border-red-600");
        setPasswordBorder("border-red-600");
        setEmailMessageText("خطای ورود");
        setMessageBoxDisplay("h-16");
        setMessageBoxColor("border-[#AD2929] bg-[#CB444A]");
        setPasswordMessageText(" خطای ورود");
        setMessageBoxText("ایمیل یا رمز عبور اشتباه است");
      }
      
    }
  };

  return (
    <>
      <div dir="rtl" className="h-screen flex justify-center items-center relative">
        <div className="bg-white w-[90vw] h-[60vh] md:w-[70vw] md:h-[50vh] lg:w-[32vw] lg:h-[59vh] mx-auto my-auto rounded-lg shadow-lg">
          <form
            onSubmit={(e) => handlePasswordInputValidation(e)}
            className="flex flex-col justify-center mx-[10%] h-full  font-Shabnam space-y-4"
          >
            <p className="text-xl font-ShabnamBold text-[#434F67]">
              ورود به حساب کاربری
            </p>

            <div className="flex flex-col items-start w-full">
              <label>ایمیل</label>
              <input
                id="email"
                type="email"
                placeholder="ایمیل خود را وارد کنید..."
                className={`w-full border-2 p-2 rounded-md   ${emailborder}`}
              />
              <p className="text-sm text-red-600">{emailErrorMessage}</p>
            </div>
            <div className="flex flex-col items-start w-full">
              <label>رمز عبور</label>
              <input
                id="password"
                type="password"
                placeholder="رمز عبور خود را وارد کنید..."
                className={`w-full border-2 p-2 rounded-md ${passwordborder}`}
              />
              <p className="text-sm text-red-600">{passwordErrorMessage}</p>
            </div>
            <div className="flex flex-col items-start w-full">
              <button
                id="button"
                className="bg-black text-white w-full py-2 rounded-md"
              >
                ورود به حساب کاربری
              </button>
              <div className="flex items-center mt-3">
                <p className="text-xs md:text-sm">رمز عبور خود را فراموش کرده اید؟</p>

                <div className="text-[#007BFF] font-ShabnamBold text-xs md:text-sm mr-1">
                  <Link href="#" className="" href="/forget">
                    بازیابی رمز عبور
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className={`w-[234px] border-l-8 ${messageBoxColor} absolute transition-all ease-linear duration-300 left-6 bottom-6 ${messageBoxDisplay} font-Shabnam text-white flex justify-center items-center `}>
          {messageBoxText}
        </div>
      </div>
    </>
  );
}
