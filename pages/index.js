import Link from "next/link";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export default function Home() {
  const userData = [
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
  ];

  useEffect(() => {
    Cookies.set("userData", JSON.stringify(userData));
    setUserDataApi(JSON.parse(Cookies.get("userData")));

  }, []);

  
  const [userDataApi, setUserDataApi] = useState([]);
  const [emailborder, setEmailBorder] = useState("border-black");
  const [passwordborder, setPasswordBorder] = useState("border-black");
  const [emailErrorMessage, setEmailMessageText] = useState("");
  const [passwordErrorMessage, setPasswordMessageText] = useState("");

  const handlePasswordInputValidation = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // check if inputs are empty
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
      const user = userDataApi.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        Cookies.set("user", JSON.stringify(user));
        window.location.href = "/dashboard";
      } else {
        setEmailBorder("border-red-600");
        setPasswordBorder("border-red-600");
        setEmailMessageText("ایمیل  اشتباه است");
        setPasswordMessageText(" رمز عبور اشتباه است");
      }
      
    }
  };

  return (
    <>
      {/* {
        userDataApi.map((user) => {
          return (
            <div key={user.id}>
              <h1>{user.email}</h1>
              <h1>{user.password}</h1>
            </div>
          );
        }
        )
    }   */}
      <div dir="rtl" className="h-screen flex justify-center items-center">
        <div className="bg-white w-[90vw] h-[50vh] md:w-[70vw] md:h-[50vh] lg:w-[32vw] lg:h-[59vh] mx-auto my-auto rounded-lg shadow-lg">
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
                <p className="text-sm">رمز عبور خود را فراموش کرده اید؟</p>

                <div className="text-[#007BFF] font-ShabnamBold text-sm mr-1">
                  <Link className="" href="/forget">
                    بازیابی رمز عبور
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
