import axios from "axios";
import { ChevronDown, Triangle } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function Aum() {
  const [aum, setAum] = useState([]);

  useEffect(() => {
    const fetchAUM = async () => {
      try {
        const res = await axios.get("/api/aum");
        // console.log(res?.data);
        setAum(res?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAUM()
  },[]);

  
  return (
    <div className="flex flex-col md:flex-row gap-6 ">
      {aum.map((text, id) => (
        <div key={id} className="bg-white w-full py-4 shadow-lg rounded-lg">
          {/* Top right button */}
          <div className="flex justify-end px-4">
            <button className="px-4 cursor-pointer py-1 text-sm font-semibold border-2 border-red-500 rounded-lg bg-red-100 text-red-500 hover:text-red-600 transition-colors">
              View Report
            </button>
          </div>

          {/* Content */}
          <div className="flex flex-col items-center gap-2 text-black mt-3">
            <div className="flex flex-col items-center">
              <p className="text-sm font-medium text-gray-600">{text.title}</p>
              <h1 className="text-3xl font-bold my-3">
                AUM <span className="text-red-600">{text.value}</span>{" "}
                <span className="text-base font-normal">{text.unit}</span>
              </h1>
              <span
                className={`text-sm font-semibold flex items-center gap-1 ${
                  text?.changeType === "up" ? "text-green-600" : "text-red-600"
                }`}
              >
                <Triangle
                  size={15}
                  className={text?.changeType === "up" ? "" : "rotate-180"}
                />
                {text.momChange} MoM
              </span>
            </div>
          </div>

          {/* Bottom right buttons */}
          <div className="flex justify-end items-center gap-1 px-4 mt-4 text-sm text-sky-600 n select-none">
            <button className="font-medium transition">View Trade</button>
            <span>
              <ChevronDown size={16} />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
