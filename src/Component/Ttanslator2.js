import axios from "axios";
import React, { useState, useEffect } from "react";
import { MdOutlineCompareArrows } from "react-icons/md";

const Translator2 = () => {
    const [from, setFrom] = useState("en");
    const [to, setTo] = useState("ar");
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [options, setOptions] = useState([]);

    console.log(from);

    useEffect(() => {
        axios
            .get("https://libretranslate.com/languages", {
                headers: { accept: "application/json" },
            })
            .then((res) => {
                console.log(res.data);
                setOptions(res.data);
            })
            .catch((error) => {
                console.error("Error fetching language options:", error);
            });
    }, []);

    const translate = () => {
        const params = new URLSearchParams();
        params.append("q", input);
        params.append("source", from);
        params.append("target", to);
        params.append("api_key", "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");

        axios
            .post("https://libretranslate.de/translate", params, {
                headers: {
                    accept: "application/json",
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            })
            .then((res) => {
                console.log(res.data);
                setOutput(res.data.translatedText);
            })
            .catch((error) => {
                console.error("Error translating text:", error);
            });
    };

    return (
        <div className=" ">
            <div className=" mx-auto gap-5  lg:flex  lg:justify-between    py-3 px-8 rounded-md ">
                <div className="   flex items-center lg:justify-start justify-center lg:w-1/2 gap-5">
                    <span className="font-medium  text-lg hidden xl:block">Detect language </span>
                    <span onClick={() => setFrom('en')} className={`font-medium  text-lg ${from == 'en' ? 'text-blue-500' : 'text-black'}`}>English</span>
                    <span onClick={() => setFrom('fr')} className={`font-medium  text-lg ${from == 'fr' ? 'text-blue-500' : 'text-black'}`}>French</span>
                    <select
                        className=" bg-transparent font-medium text-lg text-gray-700 focus:outline-none cursor-pointer sco px-2"
                        onChange={(event) => setFrom(event.target.value)}
                        value={from}
                    >
                        {options.map((option) => (
                            <option key={option.code} value={option.code} >
                                {option.name}
                            </option>
                        ))}
                    </select>
                </div>

                <MdOutlineCompareArrows className=" text-2xl text-blue-500 mx-auto lg:mx-0 my-4 lg:my-0" />

                <div className="   flex items-center lg:justify-end justify-center gap-5 lg:w-1/2 mb-7 lg:mb-0">
                    <span onClick={() => setTo('en')} className={`font-medium  text-lg ${from == 'en' ? 'text-blue-500' : 'text-black'}`}>English</span>
                    <span onClick={() => setTo('fr')} className={`font-medium  text-lg ${from == 'fr' ? 'text-blue-500' : 'text-black'}`}>French</span>
                    <select
                        className=" bg-transparent font-medium text-lg text-gray-700 focus:outline-none cursor-pointer sco px-2"
                        onChange={(event) => setTo(event.target.value)}
                        value={to}
                    >
                        {options.map((option) => (
                            <option key={option.code} value={option.code}  >
                                {option.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="lg:flex justify-center gap-10 mx-auto  ">
                <div className="w-full mb-10 lg:mb-0">
                    <textarea
                        onInput={(event) => setInput(event.target.value)}
                        cols="30"
                        rows="12"
                        className="text-center  text-lg font-medium mr-2 w-full rounded-xl p-5 focus:outline-none resize-none  bg-blue-50 border border-blue-200 placeholder:text-black text-black"
                        placeholder="Enter Your Text"
                    ></textarea>
                </div>
                <div className="w-full">
                    <textarea
                        value={output}
                        cols="30"
                        rows="12"
                        className="text-center  text-lg font-medium mr-2 w-full rounded-xl p-5 focus:outline-none resize-none  bg-blue-50 border border-blue-200 placeholder:text-black text-black"
                        placeholder="Translation"
                    ></textarea>
                </div>
            </div>
            <div className="text-center py-8">
                <button
                    onClick={translate}
                    className=" bg-gray-800 hover:bg-gray-700  text-white text-md font-semibold rounded-lg px-8 py-1.5 pt-2"
                >
                    Translate
                </button>
            </div>
        </div>
    );
};

export default Translator2;