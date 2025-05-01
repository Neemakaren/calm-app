import JournalContext from "../../context/JournalContext";
import { vec8 } from "../../assets/images/index";
import React, { useContext } from "react";

const EntryForm = () => {
  const {
    journalEntry,
    thanksGiving,
    handleJournalEntry,
    handleThanksGiving,
    handleSubmit,
    edit
  } = useContext(JournalContext);
  return (
    <>
      <div className="container mx-auto mt-14">
      </div>
      <div className="gap-4 container mx-auto">
        <form className="h-full p-4" onSubmit={handleSubmit}>
          <div className="col-span-10">
            <label
              htmlFor="My Journal"
              className="flex items-center justify-center text-[1.1em] md:text-3xl font-bold pb-3"
            >
              My Journal
            </label>
            <div className="w-40">
              <img src={vec8} alt="" />
            </div>
            <textarea
              type="text"
              id="My Journal"
              name="My Journal"
              value={journalEntry}
              onChange={handleJournalEntry}
              rows={11}
              placeholder="start your entry here...."
              className="outline-none w-full h-full pl-10 pt-4 rounded-2xl text-[18px] border-b-[2px] bg-gray-100 placeholder-gray-400 resize-none font-Cedarville leading-loose "
            ></textarea>
          </div>
          <div className="">
            <label
              htmlFor="thanks"
              className="flex items-center justify-center text-[1.1em] md:text-3xl font-bold pb-3"
            >
              Thanks
            </label>
            <textarea
              type="text"
              id="thanks"
              name="thanks"
              value={thanksGiving}
              onChange={handleThanksGiving}
              rows={3}
              placeholder="start your conversation here...."
              className="outline-none w-full h-full pl-10 pt-4 rounded-2xl text-[18px] border-b-[2px] bg-gray-100 placeholder-gray-400 resize-none font-Cedarville leading-loose "
            ></textarea>
          </div>
          <div className="flex justify-end pt-2">
            <button className="border-[#C2D738] border-2 px-8 py-1 text-[1.2em] cursor-pointer rounded-sm hover:bg-[#C2D738]">
              {edit ? "edit" : "submit"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EntryForm;
