import { Link } from "react-router-dom";
import React, { useState } from 'react';
import face from "../../../../assets/SkinAnalysis/face_color.png";

function SkinPageSix () {
    
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;

        if (checked) {
            if (selectedCheckboxes.length < 2) {
            setSelectedCheckboxes([...selectedCheckboxes, name]);
            }
        } else {
            setSelectedCheckboxes(selectedCheckboxes.filter((checkbox) => checkbox !== name));
        }
    };

    return (
        <>
        <div className="pt-12 pb-6">
            <div className="flex flex-col text-center justify-center items-center">
                <p className="font-bold lg:text-xl text-lg">2. Analisa Kulit</p>
            </div>
            <div className="font-semibold text-base py-6 text-center">
                Pilih maksimal 2 bagian pada wajahmu yang memiliki banyak masalah kulit
            </div>
            <div className="mt-3 flex w-full justify-center items-center px-2">
                <img src={face} className="lg:w-6/12 w-6/12 md:w-3/12 sm:w-3/12" />
            </div>
        </div>
        <div className="flex justify-center">
            <div className="flex flex-col mx-1">
                <div className="flex flex-row my-2">
                    <input 
                        className="h-4 w-4" 
                        type="checkbox" 
                        name="Penuaan"
                        id="name1"
                        checked={selectedCheckboxes.includes('Penuaan')}
                        onChange={handleCheckboxChange}
                        style={{
                            borderRadius: '100%',
                            backgroundColor: '#F9E5E9',
                          }}
                        >
                    </input>
                    <div className="bg-[#F9E5E9] h-4 w-4 ml-1"></div>
                    <div className="px-2 text-xs">Penuaan</div>
                </div>
                <div className="flex flex-row my-2">
                    <input 
                        className="h-4 w-4" 
                        type="checkbox" 
                        name="KulitKering"
                        id="name2"
                        checked={selectedCheckboxes.includes('KulitKering')}
                        onChange={handleCheckboxChange}>
                    </input>
                    <div className="bg-[#F6F7E7] h-4 w-4 ml-1"></div>
                    <div className="px-2 text-xs">Kulit Kering</div>
                </div>
            </div>
            <div className="flex flex-col mx-1">
                <div className="flex flex-row my-2">
                    <input 
                        className="h-4 w-4" 
                        type="checkbox" 
                        name="PoriPori"
                        id="name3"
                        checked={selectedCheckboxes.includes('PoriPori')}
                        onChange={handleCheckboxChange}>
                    </input>
                    <div className="bg-[#E6EEF4] h-4 w-4 ml-1"></div>
                    <div className="px-2 text-xs">Pori-pori</div>
                </div>
                <div className="flex flex-row my-2">
                    <input 
                        className="h-4 w-4" 
                        type="checkbox" 
                        name="Jerawat"
                        id="name4"
                        checked={selectedCheckboxes.includes('Jerawat')}
                        onChange={handleCheckboxChange}>
                    </input>
                    <div className="bg-[#F4ECE6] h-4 w-4 ml-1"></div>
                    <div className="px-2 text-xs">Berjerawat</div>
                </div>
            </div>
            <div className="flex flex-col mx-1">
                <div className="flex flex-row my-2">
                    <input 
                        className="h-4 w-4" 
                        type="checkbox" 
                        name="BekasJerawat"
                        id="name5"
                        checked={selectedCheckboxes.includes('BekasJerawat')}
                        onChange={handleCheckboxChange}>
                    </input>
                    <div className="bg-[#E6F4E7] h-4 w-4 ml-1"></div>
                    <div className="px-2 text-xs">Bekas Jerawat</div>
                </div>
                <div className="flex flex-row my-2">
                    <input 
                        className="h-4 w-4" 
                        type="checkbox" 
                        name="SelKulitMati"
                        id="name6"
                        checked={selectedCheckboxes.includes('SelKulitMati')}
                        onChange={handleCheckboxChange}>
                    </input>
                    <div className="bg-[#E8E7F7] h-4 w-4 ml-1"></div>
                    <div className="px-2 text-xs">Sel Kulit Mati</div>
                </div>
            </div>
        </div>
        <div className="flex flex-col">
            <Link to={"/skinsectiontwo/pagefive"}>
                <div className="absolute text-lg text-center w-6/12 border-r-2 border-white bottom-0 left-0 py-5 bg-[#4ABFA1] text-white">
                    Kembali
                </div>
            </Link>   
            <Link to={"/skinsectionthree"}>
                <div className="absolute text-lg text-center w-6/12 bottom-0 right-0 py-5 bg-[#4ABFA1] text-white">
                    Lanjut
                </div>
            </Link> 
        </div>
        </> 
    )
}

export default SkinPageSix;