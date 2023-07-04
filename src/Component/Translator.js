import axios from "axios";
import React, { useState, useEffect } from "react";
import { MdOutlineCompareArrows } from "react-icons/md";

const Translator = () => {
    const [from, setFrom] = useState("en");
    const [to, setTo] = useState("ar");
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [options, setOptions] = useState([]);

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
        <div className="py-10 ">
            <div className="xl:w-2/3 mx-auto gap-5 my-8 shadow-md lg:flex  lg:justify-between  bg-amber-400 bg-opacity-20 backdrop-blur-md py-5 px-8 rounded-md ">
                <div className="   flex items-center justify-center">
                    <span className="font-medium text-white text-lg">Your Language : </span>
                    <select
                        className=" bg-transparent font-medium text-lg text-gray-300 focus:outline-none cursor-pointer sco px-2"
                        onChange={(event) => setFrom(event.target.value)}
                        value={from}
                    >
                        {options.map((option) => (
                            <option key={option.code} value={option.code} style={{ backgroundColor: "#2f345b" }}>
                                {option.name}
                            </option>
                        ))}
                    </select>
                </div>

                <MdOutlineCompareArrows className=" text-2xl text-amber-400 mx-auto lg:mx-0 my-4 lg:my-0" />

                <div className="   flex items-center justify-center">
                    <span className="font-medium text-lg text-white ">Selected Language: </span>
                    <select
                        className=" bg-transparent font-medium text-lg text-gray-300 focus:outline-none cursor-pointer sco px-2"
                        onChange={(event) => setTo(event.target.value)}
                        value={to}
                    >
                        {options.map((option) => (
                            <option key={option.code} value={option.code} style={{ backgroundColor: "#2f345b" }} >
                                {option.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="lg:flex justify-center gap-10 mx-auto mt-20 ">
                <div className="w-full mb-10 lg:mb-0">
                    <textarea
                        onInput={(event) => setInput(event.target.value)}
                        cols="30"
                        rows="12"
                        className="text-center  text-lg font-medium mr-2 w-full rounded-xl p-5 focus:outline-none resize-none bg-opacity-30 bg-blue-800 placeholder:text-white text-white"
                        placeholder="Enter Your Text"
                    ></textarea>
                </div>
                <div className="w-full">
                    <textarea
                        value={output}
                        cols="30"
                        rows="12"
                        className="text-center  text-lg font-medium mr-2 w-full rounded-xl p-5 focus:outline-none resize-none bg-opacity-30 bg-purple-800 placeholder:text-white text-white"
                        placeholder="Translation"
                    ></textarea>
                </div>
            </div>
            <div className="text-center py-8">
                <button
                    onClick={translate}
                    className=" bg-gray-400 hover:bg-gray-500 bg-opacity-50  text-amber-400 text-md font-semibold rounded-lg px-8 py-1.5 pt-2"
                >
                    Translate
                </button>
            </div>
        </div>
    );
};

export default Translator;