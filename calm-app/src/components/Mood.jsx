import React, {useContext, useState} from "react";
import { vec6, vec7, vec8 } from "../assets/images";
import { Link } from "react-router-dom";
import JournalContext from "../context/JournalContext";



const Mood = () => {

  const {buttonValue} = useContext(JournalContext)

  const [value, setValue] = useState(null)

  const handleClick = (e) => {
    setValue(e.target.value)
  }


  return (
    <main className="my-10 bg-[#f0f3df] pt-10">
      <div className="-ml-5 w-20">
        <img src={vec6} alt="" className="right-0" />
      </div>
      <div className="flex flex-col items-center justify-center gap-3 ">
        <h1 className=" text-[1.4em] md:text-3xl font-bold">Hello Karen,</h1>
        <p className="text-center font-sans md:text-[1.2em] tracking-wider leading-7 font-bold">
          How are you feeling today?
        </p>
      </div>

      <div className="flex flex-row  flex-wrap items-center justify-center space-y-3 space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-10 mt-10 pt-7">
        {buttonValue.map((btn, id) => (
          <button
            key={id}
            value={btn.name}
            className="border-[#C2D738] border-2 px-8 py-1 text-[1.2em] cursor-pointer rounded-sm hover:bg-[#C2D738]"
            onClick={handleClick}
          >
            {btn.name}
          </button>
        ))}
      </div>
      <div className="flex justify-center">
      <p>I feel {value}</p>

      </div>
      <div className="flex  items-center justify-center gap-10 my-5">
        <p className=" text-2xl font-bold">You Want To Talk About It?</p>
        <Link to="/journal">
          <button className="border-[#C2D738] border-2 px-8 py-1 text-[1.2em] cursor-pointer rounded-sm hover:bg-[#C2D738]">
            let's talk
          </button>
        </Link>
      </div>
      <div className="flex justify-between mb-0">
        <div className="opacity-70">
          <img src={vec8} alt="" className="w-28" />
        </div>
        <div className="">
          <img src={vec7} alt="" className=" w-20" />
        </div>
      </div>
    </main>
  );
};

export default Mood;
