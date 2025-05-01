import { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import axios from "axios";
import { moodButtons } from "./data";
import Journal from "./pages/Journal";
import Distraction from "./pages/Distraction";
import { Navbar } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      const response = await axios.get("./quotes.json");
      setQuotes(response.data);
      setLoading(false);
    };
    loadPost();
  }, []);

  // useEffect(() => {
  //   const loadData = async () => {
  //     setLoading(true);
  //     const response = await axios.get("./buttons.json");
  //     setButtonValue(response.data);
  //     setLoading(false);
  //   };
  //   loadData();
  // }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home quotes={quotes} />} />
          <Route path="/journal" element={<Journal />} />
          {/* <Route path="distraction">
            <Route index element={<Home />} />
            <Route path=":choice" element={<Distraction />} />
          </Route> */}
          <Route path="/distraction/:cheerId" element={<Distraction />} />
        </Routes>
      </BrowserRouter>

      {/* {
      data.map((d) => (
        <button onClick={() => setSelectedCategory(d)}>{d}</button>
      ))
    }
    <div>{JSON.stringify(selectedCategory)}</div> */}
    </>
  );
}

export default App;
