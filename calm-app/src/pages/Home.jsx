import React from "react";
import { Navbar, Hero, Empower, Mood, Grid } from "../components";

const Home = ({ quotes, data, setSelectedCategory, selectedCategory }) => {
  return (
    <>
      <Navbar />
      <Hero />
      <Mood
        data={data}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <Grid />
      <Empower quotes={quotes} />

      {/* <CarouselDemo /> */}
    </>
  );
};

export default Home;
