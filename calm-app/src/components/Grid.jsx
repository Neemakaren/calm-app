import React, { useContext } from 'react'
import { data } from '../data' 
import { Link, useParams } from 'react-router-dom';
import JournalContext from '../context/JournalContext';

const Grid = () => {
  const { cheerUp, meditationData } =
    useContext(JournalContext);
  

  return (
    <section className="">
      <p className="text-center text-2xl font-bold my-6 pb-9">
        How Can I Distract You Today?
      </p>
      <section className="grid grid-cols-1 gap-2 px-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 md:gap-2 xl:gap-4 container mx-auto shadow-none mt-4">
        <div className="relative">
          {cheerUp.slice(0, 2).map((product, id) => (
            <>
              <Link
                key={id}
                to={`/distraction/${product.id}`}
              >
                <div className="group relative mb-3 flex h-[15em] items-end overflow-hidden md:h-[20em] rounded-md scroll-smooth hover:-translate-y-2 ease-in duration-150">
                  <img
                    src={product.profile}
                    loading="lazy"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover object-center border-4"
                  />
                  <div className="absolute inset-0 m-4 bg-pink-100 bg-opacity-60  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute h-full w-full p-4 flex items-center justify-center">
                      <h3 className="text-2xl font-bold text-black flex items-center text-center">
                        {product.description}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>

        <div className="sm:mt-16 md:mt-16 lg:mt-24 relative">
          {cheerUp.slice(2, 3).map((product, id) => (
            <Link key={id} to={`/distraction/${product.id}`}>
              <div className="group relative flex h-[20em] items-end overflow-hidden md:h-[30em] rounded-md scroll-smooth hover:-translate-y-3 ease-in duration-150">
                <img
                  src={product.profile}
                  loading="lazy"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover object-center border-4"
                />
                <div className="absolute inset-0 m-4  bg-pink-100 bg-opacity-60  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute h-full w-full p-4 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-black flex items-center text-center">
                      {product.description}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="relative">
          {cheerUp.slice(3, 5).map((product, id) => (
            <Link key={id} to={`/distraction/${product.id}`}>
              <div className="group relative mb-3 flex h-[15em] items-end overflow-hidden rounded-md md:h-[20em] scroll-smooth hover:-translate-y-2 ease-in duration-150">
                <img
                  src={product.profile}
                  loading="lazy"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover object-center border-4"
                />
                <div className="absolute inset-0 m-4 bg-pink-100 bg-opacity-60 opacity-0  group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute h-full w-full p-4 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-black flex items-center text-center">
                      {product.description}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
}

export default Grid