import axios from "axios";
import { createContext, useState, useEffect, useContext } from "react";
import { v4 as uuidV4 } from "uuid";
import { fetchData, youtubeOptions } from "../utils/FetchData";

const JournalContext = createContext();

// const initialEntries = [
//   {
//     id: uuidV4(),
//     journalEntry:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, distinctio.",
//     thanksGiving:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, distinctio.",
//   },
//   {
//     id: uuidV4(),
//     journalEntry:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, distinctio.",
//     thanksGiving:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, distinctio.",
//   },
//   {
//     id: uuidV4(),
//     journalEntry:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, distinctio.",
//     thanksGiving:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, distinctio.",
//   },
// ];

const initialEntries = localStorage.getItem("entries")
  ? JSON.parse(localStorage.getItem("entries"))
  : [];

export const JournalProvider = ({ children }) => {
  const [entries, setEntries] = useState(initialEntries);

  const [journalEntry, setJournalEntry] = useState("");
  const [thanksGiving, setThanksGiving] = useState("");

  const [alert, setAlert] = useState({ show: false });

  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);

  const [modalData, setModalData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [buttonValue, setButtonValue] = useState([]);
  const [loading, setLoading] = useState(false);

  const [cheerUp, setCheerUp] = useState([]);

  const [meditationData, setMeditationData] = useState([]);

  const [here, setHere] = useState([])

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const response = await axios.get("./buttons.json");
      setButtonValue(response.data);
      setLoading(false);
    };
    loadData();
  }, []);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const response = await axios.get("./cheer.json");
      setCheerUp(response.data);
      setLoading(false);
    };
    loadData();
  }, []);

  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  useEffect(() => {
    const fetchMeditationData = async () => {

      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const videoDetailData = await fetchData(`${youtubeSearchUrl}/search?query=meditation`, youtubeOptions)
      // const videoDetailData = await fetchData(
      //   `${youtubeSearchUrl}/search?query=${response.name}`,
      //   youtubeOptions
      // );
      setMeditationData(videoDetailData.contents);
    };
    fetchMeditationData();
  }, [id]);

  // const fetchMeditationData = async (id) => {
  //   const youtubeSearchUrl =
  //     "https://youtube-search-and-download.p.rapidapi.com";

  //   const videoDetailData = await fetchData(
  //     `${youtubeSearchUrl}/search?query=${id}`,
  //     youtubeOptions
  //   );
  //   setMeditationData(videoDetailData.contents);
  // };

  const handleJournalEntry = (e) => {
    setJournalEntry(e.target.value);
  };
  const handleThanksGiving = (e) => {
    setThanksGiving(e.target.value);
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (journalEntry !== "" && thanksGiving !== "") {
      if (edit) {
        let tempEntries = entries.map((item) => {
          return item.id === id
            ? { ...item, journalEntry, thanksGiving }
            : item;
        });
        setEntries(tempEntries);
        setEdit(false);
        handleAlert({ type: "success", text: "item edited" });
      } else {
        const singleEntry = { id: uuidV4(), journalEntry, thanksGiving };
        setEntries([...entries, singleEntry]);
        handleAlert({ type: "success", text: "item added" });
      }

      setJournalEntry("");
      setThanksGiving("");
    } else {
      handleAlert({
        type: "danger",
        text: "charge can't be empty value and amount value has to be bigger than zero",
      });
    }
  };

  const clearItems = () => {
    setEntries([]);
    handleAlert({ type: "danger", text: "all items deleted" });
  };

  const handleDelete = (id) => {
    let tempEntries = entries.filter((item) => item.id !== id);
    setEntries(tempEntries);
    handleAlert({ type: "danger", text: "item deleted" });
  };

  const handleEdit = (id) => {
    let data = entries.find((item) => item.id === id);
    let { journalEntry, thanksGiving } = data;
    setJournalEntry(journalEntry);
    setThanksGiving(thanksGiving);
    setEdit(true);
    setId(id);
  };

  return (
    <JournalContext.Provider
      value={{
        buttonValue,
        cheerUp,
        entries,
        journalEntry,
        thanksGiving,
        handleJournalEntry,
        handleThanksGiving,
        handleSubmit,
        handleDelete,
        clearItems,
        handleEdit,
        edit,
        setModalData,
        showModal,
        setShowModal,
        modalData,
        meditationData,
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
