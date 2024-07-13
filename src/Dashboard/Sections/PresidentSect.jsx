import HomePageContext from "../../Context/HomePageContext";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import Table from "../Componentz/Table";
import axios from "axios";

function PresidentSect() {
  const { PresidentSect, setPresident } = useContext(HomePageContext);
  const [presoData, setData] = useState({
    title: "",
    subtitle: "",
    description: "",
    image: null,
    image2: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" || name === "image2") {
      setData((data) => {
        return { ...data, [name]: files[0] };
      });
    } else {
      setData((data) => {
        return { ...data, [name]: value };
      });
    }
  };

  // Asynchronous Fuctions
  async function posPresotdata() {
    const formData = new FormData();
    formData.append("title", presoData.title);
    formData.append("subtitle", presoData.subtitle);
    formData.append("description", presoData.description);
    formData.append("image", presoData.image);
    formData.append("image2", presoData.image2);

    try {
      const { data } = await axios.post(
        "http://127.0.0.1:8000/hat-api/President/",
        formData
      );
      const vibes = [data, ...PresidentSect];
      setPresident(vibes);
    } catch (error) {
      console.error(error);
    }
  }
  // Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="px-10 flex flex-col">
      <div className="mt-20">
        <Table data={PresidentSect} />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-slate-100 p-10 rounded-3xl"
      >
        <form onSubmit={handleSubmit}>
          <div className="space-y-12 mt-5">
            <div className="pb-12">
              <h2 className="text-base xl:text-xl font-semibold leading-7 text-gray-900">
                President Section
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Perfom CRUD to this section
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="title"
                    className="block  xl:text-lg text-sm font-medium leading-6 text-gray-900"
                  >
                    Title
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="title"
                      required
                      onChange={handleChange}
                      id="title"
                      autoComplete="given-name"
                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="subtitle"
                    className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                  >
                    Subtitle
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="subtitle"
                      onChange={handleChange}
                      id="subtitle"
                      autoComplete="given-name"
                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="description"
                    className="block  xl:text-lg text-sm font-medium leading-6 text-gray-900"
                  >
                    Description
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="description"
                      onChange={handleChange}
                      name="description"
                      rows={3}
                      className="block p-7 w-full h-[300px]  rounded-2xl border-0 text-gray-900 shadow-sm ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    number of words {presoData?.description.length}
                  </p>
                </div>
                {/* image1 */}
                <div className="col-span-full">
                  <label
                    htmlFor="cover-photo"
                    className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                  >
                    Photo1
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900 px-6 py-10">
                    <div className="text-center">
                      <PhotoIcon
                        className="mx-auto h-12 w-12 text-gray-300"
                        aria-hidden="true"
                      />
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="image"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="image"
                            name="image"
                            required
                            onChange={handleChange}
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="text-xs leading-5 text-gray-600">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        Name: {presoData?.image?.name}
                      </p>
                      <p className="text-xs leading-5 text-gray-600">
                        Size: {presoData?.image?.size}
                      </p>
                      <p className="text-xs leading-5 text-gray-600">
                        Type: {presoData?.image?.type}
                      </p>
                    </div>
                  </div>
                </div>
                {/* image2 */}
                <div className="col-span-full">
                  <label
                    htmlFor="cover-photo"
                    className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                  >
                    Photo2
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900 px-6 py-10">
                    <div className="text-center">
                      <PhotoIcon
                        className="mx-auto h-12 w-12 text-gray-300"
                        aria-hidden="true"
                      />
                      <div className="mt-4 flex flex-row items-center gap-x-4 text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="image2"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="image2"
                            name="image2"
                            required
                            onChange={handleChange}
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="text-xs leading-5 text-gray-600">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        Name: {presoData?.image2?.name}
                      </p>
                      <p className="text-xs leading-5 text-gray-600">
                        Size: {presoData?.image2?.size}
                      </p>
                      <p className="text-xs leading-5 text-gray-600">
                        Type: {presoData?.image2?.type}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-end items-end">
            <motion.button
              onClick={posPresotdata}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: "spring", ease: "easeOut" }}
              className="px-7 py-2 bg-[#b67a3d] text-white rounded-3xl"
            >
              Add
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default PresidentSect;
