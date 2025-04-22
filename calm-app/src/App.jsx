import { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import axios from "axios";
import { moodButtons } from "./data";
import Journal from "./pages/Journal";
import Distraction from "./pages/Distraction";
import { Navbar } from "./components";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null);



   useEffect(() => {
     const loadPost = async () => {
       setLoading(true);
       const response = await axios.get("./quotes.json");
       setQuotes(response.data);
       setLoading(false);
     };
     loadPost();
   }, []);


   useEffect(() => {
     const loadData = async () => {
       setLoading(true);
      const response = await axios.get("./buttons.json");
       setData(response.data);
       setLoading(false);
     };
     loadData();
   }, []);

  


  return (
    <>
    <Navbar />
    {/* {
      data.map((d) => (
        <button onClick={() => setSelectedCategory(d)}>{d}</button>
      ))
    }
    <div>{JSON.stringify(selectedCategory)}</div> */}
      <Home
        quotes={quotes}
        data={data}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Journal />
      {/* <Distraction /> */}
    </>
  );
}

export default App;
