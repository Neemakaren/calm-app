
import JournalContext from "../../context/JournalContext";
import React, { useContext } from "react";

const EntryItem = ({entry}) => {
  // const { entries } = useContext(JournalContext);

  const {id, data, thanks} = entry
  
 
  return (
    <li>
      <div>
        <span>
           {data}
        </span>
        <span>
           {thanks}
        </span>
      </div>

      <div>
        <button aria-label="edit button"></button>
        <button aria-label="delete button"></button>
      </div>
    </li>
  );
};

export default EntryItem;
