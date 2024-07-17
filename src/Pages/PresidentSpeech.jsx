import React, { useContext } from "react";
import HomePageContext from "../Context/HomePageContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Dots } from "react-activity";

function PresidentSpeech() {
  const { PresidentSect } = useContext(HomePageContext);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-[#b67a3d] relative bg-opacity-15 py-20">
      <div className="flex container mx-auto flex-col md:flex-row">
        {PresidentSect?.slice(0, 1).map((dt) => {
          return (
            <div
              key={dt.id}
              className="flex flex-col md:flex-row justify-between w-full gap-x-10"
            >
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center justify-center gap-y-3"
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-3xl bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={`http://127.0.0.1:8000/${dt.image}`}
                    alt={dt.subtitle}
                    className="h-[400px] w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <p className="w-[300px] mt-2 font-medium justify-center text-center ">
                  {dt.subtitle}
                </p>
              </motion.div>
              <div className="flex flex-col gap-y-4">
                <h1 className="md:text-5xl text-gray-800 tracking-tighter font-extrabold max-w-2xl">
                  {dt.title}
                </h1>
                <h1 className="lg:text-3xl text-gray-700 font-semibold">
                  {dt.subtitle}
                </h1>
                <motion.div
                  initial={{ opacity: 0, x: 200 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="flex flex-col gap-y-2"
                >
                  <p className="xl:text-xl md:text-xl max-w-5xl line-clamp-6  text-justify tracking-tighter">
                    {dt.description}
                  </p>
                  <div className="mt-2">
                    <Link
                      onClick={scrollToTop}
                      to={"President/"}
                      className="px-6 py-2 mt-2 hover:ring-2 hover:ring-black hover:bg-opacity-0 hover:text-black font-medium rounded-3xl bg-[#b67a3d] text-white"
                    >
                      ReadMore
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
      {PresidentSect?.length === 0 ? (
        <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center ">
          <Dots color="#b67a3d" size={40} speed={0.7} animating={true} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default PresidentSpeech;
