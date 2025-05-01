import JournalContext from "../../context/JournalContext";
import React, { useContext } from "react";

const EntryItem = ({ entry }) => {
  const { handleDelete, handleEdit, showModal, setModalData, setShowModal } =
    useContext(JournalContext);

     const viewModalHandler = (data) => {
       setModalData(data);
       setShowModal(true);
     };

  const { id, journalEntry, thanksGiving } = entry;

  return (
    <div className="">
      {/* <div
        className="border-4 rounded-2xl div-5 cursor-pointer h-full p-4"
        onClick={() => viewModalHandler(id)}
      >
        <div>
          {journalEntry.length > 300
            ? journalEntry.slice(0, 300) + `... ${"read more"}`
            : journalEntry}
        </div>
        <div className="mt-6">
          <div className="font-bold">I am thankful for...</div>
          <div>
            {thanksGiving.length > 30
              ? thanksGiving.slice(0, 30) + `... ${"read more"}`
              : thanksGiving}
          </div>
        </div>
      </div> */}

      <div className="flex gap-4 mt-4">
        <button
          aria-label="edit button"
          onClick={() => handleEdit(id)}
          className="border-[#C2D738] border-2 px-4 py-1 text-[1em] cursor-pointer rounded-sm hover:bg-[#C2D738]"
        >
          edit
        </button>
        <button
          aria-label="delete button"
          onClick={() => handleDelete(id)}
          className="border-red-500 border-2 px-4 py-1 text-[1em] cursor-pointer rounded-sm hover:bg-red-400"
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default EntryItem;
