import JournalContext from "../../context/JournalContext";
import React, { useContext } from "react";
import EntryItem from "./EntryItem";
import Modal from "../Modal";

const EntryList = () => {
  const {
    entries,
    clearItems,
    showModal,
    setModalData,
    setShowModal,
    journalEntry,
    thanksGiving,
    handleEdit,
    handleDelete,
  } = useContext(JournalContext);

  const viewModalHandler = (data) => {
    setModalData(data);
    setShowModal(true);
  };

  return (
    <>
      <h1 className="flex items-center justify-center text-[1.1em] md:text-3xl mt-16 font-bold mb-3">
        Journal Entries
      </h1>
      {showModal && <Modal />}
      <div className="">
        <p className="grid md:grid-cols-2 container mx-auto gap-6 space-y-10">
          {entries.map((entry) => (
            <div className="">
              <div
                className="border-4 rounded-2xl py-6 px-5 cursor-pointer h-full"
                onClick={() => viewModalHandler(entry)}
              >
                <div>
                  {entry.journalEntry.length > 300
                    ? entry.journalEntry.slice(0, 300) + `... ${"read more"}`
                    : entry.journalEntry}
                </div>
                <div className="mt-6">
                  <div className="font-bold">I am thankful for...</div>
                  <div>
                    {entry.thanksGiving.length > 30
                      ? entry.thanksGiving.slice(0, 30) + `... ${"read more"}`
                      : entry.thanksGiving}
                  </div>
                </div>
              </div>
              <EntryItem key={entry.id} entry={entry} />
            </div>
          ))}
        </p>
      </div>
      <div className="flex justify-end">
        {entries.length > 0 && (
          <button
            onClick={clearItems}
            className="border-red-500 border-2 px-4 py-1 text-[1em] cursor-pointer rounded-sm hover:bg-red-400"
          >
            clear entries
          </button>
        )}
      </div>
    </>
  );
};

export default EntryList;
