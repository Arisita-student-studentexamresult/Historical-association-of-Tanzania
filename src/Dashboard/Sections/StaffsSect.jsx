import HomePageContext from "../../Context/HomePageContext";
import { PhotoIcon } from "@heroicons/react/24/solid";
import React, { useContext, useState } from "react";
import Table from "../Componentz/Table";
import { motion } from "framer-motion";
import axios from "axios";

function StaffsSect() {
  const { StaffsSect, setStaffs } = useContext(HomePageContext);
  const [staffs, setData] = useState({
    name: "",
    description: "",
    image: "",
    position: "",
    contact1: "",
    contact2: "",
    contact3: "",
  });

  // handle user inputs
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setData((data) => {
        return { ...data, [name]: files[0] };
      });
    } else {
      setData((data) => {
        return { ...data, [name]: value };
      });
    }
  };

  // prevent default form submission which refreshes the page
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Async function to create document
  // Asynchronous Fuctions
  async function postStaffsdata() {
    const formData = new FormData();
    formData.append("name", staffs.name);
    formData.append("image", staffs.image);
    formData.append("position", staffs.position);
    formData.append("contact1", staffs.contact1);
    formData.append("contact2", staffs.contact2);
    formData.append("contact3", staffs.contact3);
    formData.append("description", staffs.description);

    const { data } = await axios.post(
      "http://127.0.0.1:8000/hat-api/Staffs/",
      formData
    );
    const vibes = [data, ...StaffsSect];
    setStaffs(vibes);
  }

  return (
    <div className="px-10 flex flex-col">
      <div className="mt-20">
        <Table data={StaffsSect} />
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
                Staffs Section
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Perfom CRUD to this section
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      required
                      onChange={handleChange}
                      name="name"
                      id="name"
                      autoComplete="given-name"
                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="position"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Position
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      onChange={handleChange}
                      name="position"
                      id="position"
                      autoComplete="given-name"
                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="contact1"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      onChange={handleChange}
                      name="contact1"
                      id="contact1"
                      autoComplete="given-name"
                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="contact2"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      onChange={handleChange}
                      name="contact2"
                      id="contact2"
                      autoComplete="given-name"
                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="contact3"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Social Media
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      onChange={handleChange}
                      name="contact3"
                      id="contact3"
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
                      className="block w-full h-[300px] rounded-2xl border-0 p-7 text-gray-900 shadow-sm ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Number of Words {staffs?.description.length}
                  </p>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="cover-photo"
                    className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                  >
                    Photo
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900 px-6 py-10">
                    <div className="text-center">
                      <PhotoIcon
                        className="mx-auto h-12 w-12 text-gray-300"
                        aria-hidden="true"
                      />
                      <div className="mt-4 flex flex-row gap-x-4 items-center text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="image"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="image"
                            onChange={handleChange}
                            name="image"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="text-xs leading-5 text-gray-600">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        Name: {staffs?.image?.name}
                      </p>
                      <p className="text-xs leading-5 text-gray-600">
                        Size: {staffs?.image?.size}
                      </p>
                      <p className="text-xs leading-5 text-gray-600">
                        Type: {staffs?.image?.type}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-end items-end">
            <motion.button
              onClick={postStaffsdata}
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

export default StaffsSect;
