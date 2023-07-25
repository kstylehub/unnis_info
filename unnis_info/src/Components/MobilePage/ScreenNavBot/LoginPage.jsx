import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../assets/LG_unnis_green.svg";
import back from "../../../assets/previous.svg";
import Google from "../../../assets/IC_google.svg"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../Store/Actions/Actions";

function LoginPage() {
    const user = useSelector((state)=> state.ReducerUser.dataUser)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleSubmit() {
        dispatch(login(email,password))
        navigate('/my-page')
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
              <input
                type="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                placeholder="Email"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-[#4ABFA1] focus:ring-1 focus:ring-[#4ABFA1]
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 
    "
              />
              <input
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Password"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-[#4ABFA1] focus:ring-1 focus:ring-[#4ABFA1]
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 mt-6
    "
              />
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
                <img src={Google} className="w-30 h-30 m-5"/>
            </div>
            <div className="border rounded-lg">
                <img src={Google} className="w-30 h-30 m-5"/>
            </div>
          </div>
          <div className="flex justify-center mt-8 gap-x-4">
            <div>
                <p className="text-slate-400">Don't have an account</p>
            </div>
            <div>
                <p className="underline text-orange-500">Sign Up</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
