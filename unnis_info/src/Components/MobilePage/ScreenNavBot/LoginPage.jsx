import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../assets/LG_unnis_green.svg";
import back from "../../../assets/previous.svg";
import Google from "../../../assets/IC_google.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../Store/Actions/Actions";

function LoginPage() {
  const user = useSelector((state) => state.ReducerUser?.dataUser);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  function handleSubmit() {
    dispatch(login(email, password));
    navigate("/my-page");
  }

  return (
    <>
      <div className="absolute top-0 w-full h-full bg-white px-5">
        <div className="text-[#343A40] bg-white pb-3 z-20 ">
          <div className="flex justify-between sticky ">
            <div className="mt-4">
              <Link to={"/my-page"}>
                <img src={back} className="w-full" />
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <img src={Logo} className="w-[200px]" />
          </div>
          <div className="">
            <form onSubmit={handleSubmit}>
              <div className="relative h-12 w-full min-w-[200px] my-4">
                <input
                  className="placeholder-transparent focus:placeholder-gray-400 peer h-full w-full rounded-[7px] border border-[#4ABFA1] border-t-transparent bg-gray-100 px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-[#4ABFA1] placeholder-shown:border-t-[#4ABFA1] focus:border-2 focus:border-[#4ABFA1] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder="Masukkan alamat email anda"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-[#4ABFA1] transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-[#4ABFA1] before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-[#4ABFA1] after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-[#4ABFA1] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#4ABFA1] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-[#4ABFA1] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-[#4ABFA1] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Email
                </label>
              </div>
              <div className="relative h-12 w-full min-w-[200px] my-4">
                <input
                  className="placeholder-transparent focus:placeholder-gray-400 peer h-full w-full rounded-[7px] border border-[#4ABFA1] border-t-transparent bg-gray-100 px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-[#4ABFA1] placeholder-shown:border-t-[#4ABFA1] focus:border-2 focus:border-[#4ABFA1] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder="Masukkan alamat email anda"
                  type={isPasswordVisible ? "text" : "password"}
                //   type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-[#4ABFA1] transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-[#4ABFA1] before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-[#4ABFA1] after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-[#4ABFA1] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#4ABFA1] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-[#4ABFA1] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-[#4ABFA1] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Password
                </label>
                <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                        onClick={togglePasswordVisibility}
                 
                    >
                        {isPasswordVisible ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                            />
                        </svg>
                        ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                            />
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                        )}
                    </button>
              </div>
              <div className="text-sm text-center py-2 bg-[#4ABFA1] text-white mt-6">
                <button type="submit">Login</button>
              </div>
            </form>
            <div className="flex justify-end text-xs text-slate-400 underline mt-4">
              <p>Forgot Your Password?</p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <div className=""></div>
            <div>
              <p className="text-slate-400">Login dengan akun medsos</p>
            </div>
            <div className=""></div>
          </div>
          <div className="flex justify-center mt-5 gap-x-16">
            <div className="border rounded-lg">
              <img src={Google} className="w-30 h-30 m-5" />
            </div>
            <div className="border rounded-lg">
              <img src={Google} className="w-30 h-30 m-5" />
            </div>
          </div>
          <div className="flex justify-center mt-8 gap-x-4">
            <div>
              <p className="text-slate-400">Don't have an account</p>
            </div>
            <Link to={"/register"}>
              <div>
                <p className="underline text-orange-500">Sign Up</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
