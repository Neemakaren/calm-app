import React from "react";
import { Navbar, Hero, Empower, Mood, Grid } from "../components";
import Side from "../components/Side";

const Home = ({ quotes, setSelectedCategory, selectedCategory }) => {
  return (
    <>
      <Navbar />
      <Hero />
      <Mood
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <Grid />
      <Empower quotes={quotes} />
      {/* <Side /> */}

      {/* <CarouselDemo /> */}
    </>
  );
};

export default Home;
