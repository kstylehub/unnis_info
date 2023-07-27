import { Link, useNavigate } from "react-router-dom";
import back from "../../../assets/previous.svg";
import logo from "../../../assets/logo.png";
import camera_pink from "../../../assets/SkinAnalysis/camera_pink.png";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllFeed, register } from "../../../Store/Actions/Actions";
import check from "../../../assets/SkinAnalysis/check.png";
import ModalMyPage from "../Components/ModalMyPage/ModalMyPage";


function Register() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [photo, setPhoto] = useState(null)
    const [smsNotif, setSmsNotif] = useState(1)
    const [emailNotif, setEmailNotif] = useState(0)
    const [pushNotif, setPushNotif] = useState(0)
    const [typeDevice, setTypedevice] = useState("web")
    const [token, setToken] = useState("-")
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
    const [cekDataPribadi, setCekDataPribadi] = useState(false)
    const [cekSyarat, setCekSyarat] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleSelectedCountry(val){
        setSelectedCountry(val)
    }

    function togglePasswordVisibility() {
      setIsPasswordVisible((prevState) => !prevState);
    }


    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        console.log(name);
        if (checked) {
            if (selectedCheckboxes.length < 5) {
            setSelectedCheckboxes([...selectedCheckboxes, name]);
            if(name == "syarat"){
                setCekSyarat(true)
            }
            if(name == "pribadi"){
                setCekDataPribadi(true)
            }
            }
        } else {
            setCekDataPribadi(false)
            setCekSyarat(false)
            setSelectedCheckboxes(selectedCheckboxes.filter((checkbox) => checkbox !== name));
        }
    };

    function handleSubmit(event) {
        event.preventDefault()
        const numPhone = `${selectedCountry}${phone}`
        const dataRegister = {
            username, email, password, phone:numPhone, photo, smsNotif, emailNotif, pushNotif, typeDevice, token
        }
        dispatch(register(dataRegister))
        navigate("/login")
    }
    // console.log(
    //     {email, username, password, phone: `${selectedCountry}${phone}`}
    // );
    // console.log({
    //     username, email, password, phone, photo, smsNotif, emailNotif, pushNotif, typeDevice, token
    // });
  return (
    <>
      <div className="pb-2 w-full h-full overflow-y-auto">
        <div className="top-0 sticky lg:px-8 px-4 w-full bg-white pt-2">
          <div className="flex justify-between">
            <div className="self-center">
              <Link to={"/login"}>
                <img src={back} className="w-full" />
              </Link>
            </div>
            <div className="self-center flex justify-center">
              <img src={logo} className="w-4/12" />
            </div>
            <div className="self-center">
              <img src={camera_pink} className="w-5/12" />
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center text-center py-5 px-4">
            <div className="text-20px font-bold text-lg pb-10">
                Buat Akun
            </div>
            <div className="flex w-full flex-col">
                <div className="relative h-12 w-full min-w-[200px] my-4">
                    <input
                    className="placeholder-transparent focus:placeholder-gray-400 peer h-full w-full rounded-[7px] border border-[#4ABFA1] border-t-transparent bg-gray-100 px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-[#4ABFA1] placeholder-shown:border-t-[#4ABFA1] focus:border-2 focus:border-[#4ABFA1] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder="Masukkan alamat email anda"
                    type="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-[#4ABFA1] transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-[#4ABFA1] before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-[#4ABFA1] after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-[#4ABFA1] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#4ABFA1] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-[#4ABFA1] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-[#4ABFA1] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Email
                    </label>
                </div>
                <div className="relative h-12 w-full min-w-[200px] my-4">
                    <input
                    className="placeholder-transparent focus:placeholder-gray-400 peer h-full w-full rounded-[7px] border border-[#4ABFA1] border-t-transparent bg-gray-100 px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-[#4ABFA1] placeholder-shown:border-t-[#4ABFA1] focus:border-2 focus:border-[#4ABFA1] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder="Masukkan username anda"
                    type="text"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-[#4ABFA1] transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-[#4ABFA1] before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-[#4ABFA1] after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-[#4ABFA1] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#4ABFA1] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-[#4ABFA1] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-[#4ABFA1] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Username
                    </label>
                </div>
                <div className="relative h-12 w-full min-w-[200px] my-4">
                    <input
                    className="placeholder-transparent focus:placeholder-gray-400 peer h-full w-full rounded-[7px] border border-[#4ABFA1] border-t-transparent bg-gray-100 px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-[#4ABFA1] placeholder-shown:border-t-[#4ABFA1] focus:border-2 focus:border-[#4ABFA1] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder="Masukkan password anda"
                    type={isPasswordVisible ? "text" : "password"}
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
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
                <div className="flex justif-center">
                    <div className="relative h-12 w-2/12 min-w-[100px] my-4 mr-2">
                        <ModalMyPage handleSelectedCountry={handleSelectedCountry}/>
                    </div>
                    <div className="relative h-12 w-10/12 min-w-[200px] my-4">
                        <input
                        className="placeholder-transparent focus:placeholder-gray-400 peer h-full w-full rounded-[7px] border border-[#4ABFA1] border-t-transparent bg-gray-100 px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-[#4ABFA1] placeholder-shown:border-t-[#4ABFA1] focus:border-2 focus:border-[#4ABFA1] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder="Masukkan nomor handphone anda"
                        type="text"
                        value={phone}
                        onChange={(e)=> setPhone(e.target.value)}
                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-[#4ABFA1] transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-[#4ABFA1] before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-[#4ABFA1] after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-[#4ABFA1] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#4ABFA1] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-[#4ABFA1] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-[#4ABFA1] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Nomor Handphone
                        </label>
                    </div>
                </div>
            </div>  
            <div className="h-0.5 my-5 bg-gray-200"></div>
            <div className="flex items-center">
                <input 
                    className="h-4 w-4 mx-3" 
                    type="checkbox" 
                    disabled checked>
                </input>
                <div className="font-bold mx-2">
                    Setuju
                </div>
            </div>
            <div className="h-0.5 mt-5 mb-3 bg-gray-200"></div>

            <div className="flex flex-row justify-center items-center px-2 py-2">
                <div className="w-1/12">
                    <input 
                        className="h-4 w-4" 
                        type="checkbox" 
                        name="syarat"
                        checked={selectedCheckboxes.includes('syarat')}
                        onChange={handleCheckboxChange}>
                    </input>    
                </div>
                <div className="px-6 text-left text-base">
                    (penting) Saya menyetujui seluruh Syarat dan Ketentuan
                </div>
                <div className="flex justify-center items-center px-2">
                    <svg
                      className="w-4 h-4 text-[#4ABFA1] dark:text-[#4ABFA1]"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 8 14"
                    >
                      <path
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                      />
                    </svg>
                  </div>
            </div>
            <div className="flex flex-row justify-center items-center px-2 py-2">
                <div className="w-1/12">
                    <input 
                        className="h-4 w-4" 
                        type="checkbox" 
                        name="pribadi"
                        
                        checked={selectedCheckboxes.includes('pribadi')}
                        onChange={handleCheckboxChange}>
                    </input>    
                </div>
                <div className="px-6 text-left text-base">
                    (penting) persetujuan penggunaan dan pengumpulan informasi pribadi
                </div>
                <div className="flex justify-center items-center px-2">
                    <svg
                      className="w-4 h-4 text-[#4ABFA1] dark:text-[#4ABFA1]"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 8 14"
                    >
                      <path
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                      />
                    </svg>
                  </div>
            </div>
            <div className="flex flex-row justify-center px-2 py-2">
                <div className="w-1/12">
                    <input 
                        className="h-4 w-4" 
                        type="checkbox" 
                        disabled checked>
                    </input>    
                </div>
                <div className="flex flex-col text-left text-base px-6">
                    (penting) Saya menyetujui seluruh Syarat dan Ketentuan
                    <div className="flex flex-row pt-3 justify-evenly">
                        <div className="flex flex-row justify-center items-center">
                            <input 
                                className="w-1/12 h-4 w-4" 
                                type="checkbox" 
                                name="email"
                                
                                checked={selectedCheckboxes.includes('email')}
                                onChange={handleCheckboxChange}>
                            </input>    
                            <div className="lg:px-3 px-1">
                                Email
                            </div>
                        </div>
                        <div className="flex flex-row justify-center items-center">
                            <input 
                                className="w-1/12 h-4 w-4" 
                                type="checkbox" 
                                name="notification"
                                
                                checked={selectedCheckboxes.includes('notification')}
                                onChange={handleCheckboxChange}>
                            </input>
                            <div className="lg:px-3 px-1">
                                Notification
                            </div>
                        </div>
                        <div className="flex flex-row justify-center items-center">
                            <input 
                                className="w-1/12 h-4 w-4" 
                                type="checkbox" 
                                name="sms"
                                
                                checked={selectedCheckboxes.includes('sms')}
                                onChange={handleCheckboxChange}>
                            </input>
                            <div className="lg:px-3 px-1">
                                SMS
                            </div>
                        </div>
                    </div>
                    <div className="text-xs text-gray-600 my-3">
                        Saya menerima pemberian informasi mengenai segala bentuk promosi dan acara
                    </div>
                </div>
                <div className="flex justify-center items-center px-2">
                    <svg
                      className="w-4 h-4 text-[#4ABFA1] dark:text-[#4ABFA1]"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 8 14"
                    >
                      <path
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                      />
                    </svg>
                  </div>
            </div>
            <button disabled={cekDataPribadi && cekSyarat ? false : true} className={cekDataPribadi && cekSyarat ? "w-full bg-[#4ABFA1] text-white font-bold py-4" : "w-full bg-gray-400 text-white font-bold py-4"} type="submit">
                Setuju & Daftar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
