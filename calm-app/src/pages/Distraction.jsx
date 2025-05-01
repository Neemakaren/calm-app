import React, { useContext } from "react";
import { data } from "../data";
import { useParams } from "react-router-dom";
import JournalContext from "../context/JournalContext";

const Distraction = () => {
  const { cheerId } = useParams();
  const { meditationData } = useContext(JournalContext);
console.log(meditationData)

  if (!meditationData.length) return <h1>Loading...</h1>;

  return (
    <main className="pt-24">
      <div className="text-center">
        {data
          .filter((item) => item.id == cheerId)
          .map((cat, id) => (
            <div key={id}>
              <h2 className=" text-2xl  font-bold">
                You picked {cat.description}, Here are some suggestions to help
                you along
              </h2>
              <div>{cat.description}</div>
            </div>
          ))}
        <div className="grid grid-cols-2 items-center gap-2 px-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 md:gap-2 xl:gap-4 container mx-auto shadow-none mt-4">
          {meditationData.slice(0, 1).map((item, id) => (
            <div>
              <a
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src={item.video.thumbnails[0].url}
                  alt={item.video.title}
                  className="w-full rounded-sm"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Distraction;
