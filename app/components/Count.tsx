"use client";
import { useState } from "react";

const Page = () => {
  interface NumberDictionary {
    [key: number]: JSX.Element;
  }
  const [num, setNum] = useState(0);
  const [numDict, setNumDict] = useState<NumberDictionary>({});

  const handleNum = () => {
    setNum(num + 1);
    handleCheckOdd(num);
    handleDisplayNums(num);
  };

  const handleCheckOdd = (params: number) => {
    if (params % 2 === 0) {
      return <p>{params} is a even number</p>;
    } else {
      return <p>{params} is an odd number</p>;
    }
  };
  const handleDisplayNums = (params: number) => {
    setNumDict((prevDict) => ({
      ...prevDict, // Spread the previous Record
      [params]: <p key={params}>{params},</p>,
    }));
  };

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center text-center">
        <p className="mb-5">
          We are learning{" "}
          <span className="text-teal-400">NextJS & TypeScript</span>
        </p>
        <button className="btn bg-teal-600 text-white mb-5" onClick={handleNum}>
          You clicked me {num} times
        </button>
        {handleCheckOdd(num)}
        <div className="mt-5">
          <p className="text-teal-400	">
            These are the numbers you clicked so far:
          </p>
          <div className="flex flex-wrap mx-1 items-center justify-center">
            {Object.values(numDict)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
