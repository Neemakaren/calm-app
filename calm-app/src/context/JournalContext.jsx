import { createContext, useState, useEffect, useContext } from "react";

const JournalContext = createContext();

const initialEntries = [
  {
    id: 1,
    data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, distinctio.",
    thanks:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, distinctio.",
  },
  {
    id: 2,
    data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, distinctio.",
    thanks:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, distinctio.",
  },
  {
    id: 3,
    data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, distinctio.",
    thanks:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, distinctio.",
  },
];

export const JournalProvider = ({ children }) => {
  const [entries, setEntries] = useState(initialEntries);

  const [journalEntry, setJournalEntry] = useState("");
  const [thanksGiving, setThanksGiving] = useState("");

  const handleJournalEntry = (e) => {
    setJournalEntry(e.target.value);
  };
  const handleThanksGiving = (e) => {
    setThanksGiving(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <JournalContext.Provider
      value={{
        entries,
        journalEntry,
        thanksGiving,
        handleJournalEntry,
        handleThanksGiving,
        handleSubmit,
      }}
    >
      {children}
    </JournalContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(JournalContext);
};

export default JournalContext;
