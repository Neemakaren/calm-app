import JournalContext from "../../context/JournalContext";
import React, { useContext } from "react";
import EntryItem from "./EntryItem";

const EntryList = () => {
  const { entries } = useContext(JournalContext);
  return (
    <div>
      <ul>
        {entries.map((entry) => {
          return <EntryItem entry={entry}/>;
        })}
      </ul>
      {entries.length > 0 && <button>clear entries</button>}
    </div>
  );
};

export default EntryList;
