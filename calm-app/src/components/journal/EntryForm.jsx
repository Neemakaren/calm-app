import JournalContext from '../../context/JournalContext';
import { vec8 } from '../../assets/images/index';
import React, {useContext} from 'react'

const EntryForm = () => {
  const { journalEntry,
        thanksGiving,
        handleJournalEntry,
        handleThanksGiving,
        handleSubmit,} = useContext(JournalContext)
  return (
    // <div className="container mx-auto my-10 ">
    //   <h1 className="flex items-center justify-center text-[1.1em] md:text-3xl font-bold py-8">
    //     My Journal
    //   </h1>
    //   <div className="w-40">
    //     <img src={vec8} alt="" />
    //   </div>
    //   <form className="h-96 flex flex-col gap-4">
    //     <textarea
    //       required
    //       maxLength="1000"
    //       placeholder="start your conversation here...."
    //       className="outline-none w-full h-full pl-10 pt-4 rounded-4xl text-[18px] border-b-[2px] bg-gray-100 placeholder-gray-400 resize-none font-Cedarville leading-loose "
    //     ></textarea>
    //     <div className="h-40">
    //       <h1 className="flex items-center justify-center text-[1.1em] md:text-3xl font-bold py-8">
    //         ThanksGiving
    //       </h1>
    //       <textarea
    //         name=""
    //         id=""
    //         placeholder="start your conversation here...."
    //         className="outline-none w-full h-full pl-10 pt-4 rounded-4xl text-[18px] border-b-[2px] bg-gray-100 placeholder-gray-400 resize-none font-Cedarville leading-loose "
    //       ></textarea>
    //     </div>
    //   </form>
    //   <div>
    //     <button>Save</button>
    //   </div>
    // </div>

    <form onClick={handleSubmit}>
      <div>
        <div>
          <label htmlFor="My Journal">My Journal</label>
          <input
            type="text"
            id="My Journal"
            name="My Journal"
            value={journalEntry}
            onChange={handleJournalEntry}
            placeholder="start your conversation here...."
          />
        </div>
        <div>
          <label htmlFor="thanks">Thanks</label>
          <input
            type="text"
            id="thanks"
            name="thanks"
            value={thanksGiving}
            onChange={handleThanksGiving}
            placeholder="start your conversation here...."
          />
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default EntryForm