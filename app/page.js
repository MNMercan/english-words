"use client";
import { useEffect, useState } from "react";
import Badge from "@/components/badge";

import data from "@/data/words";

export default function Home() {
  const [isEnglish, setIsEnglisg] = useState(true);
  const changeLanguage = () => {
    setIsEnglisg(!isEnglish)
  };
  return (
    <>
      <h1 className="text-center mb-5">English Words</h1>
      <button
        onClick={changeLanguage}
        type="button"
        className="text-white w-48 self-center bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        {isEnglish === true ? "EN" : "TR"}
      </button>

      <ul className="grid grid-cols-5 justify-center gap-3 w-4/5 self-center ">
        {data.slice(0, 10).map((item, index) => (
          <li key={index} className="list-none text-center">
            <Badge word={isEnglish === true ? item.word.en : item.word.tr} />
          </li>
        ))}
      </ul>
    </>
  );
}
