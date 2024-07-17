import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import HomePageContext from "../../Context/HomePageContext";
import axiosInstance from "../../Context/axiosInstance";
//

// Fuction Component
export default function Drawer({ open, setOpen, dataId, datas }) {
  // sections imports
  const { heroSect, setHero } = useContext(HomePageContext);
  const { PresidentSect, setPresident } = useContext(HomePageContext);
  const { AnnounceSect, setAnnounce } = useContext(HomePageContext);
  const { StaffsSect, setStaffs } = useContext(HomePageContext);
  const { AboutUSSect, setAboutUs } = useContext(HomePageContext);

  //
  const locations = useLocation();
  const [heroUpdate, setHeros] = useState({
    title: "",
    subtitle: "",
    description: "",
  });
  const [AboutUsdata, setAboutus] = useState({
    title: "",
    subtitle: "",
    description: "",
  });
  const [presoData, setPresoData] = useState({
    title: "",
    subtitle: "",
    description: "",
  });
  const [AnnounceData, setAnnounceData] = useState({
    title: "",
    description: "",
  });
  const [staffs, setStaffData] = useState({
    name: "",
    position: "",
    contact1: "",
    contact2: "",
    contact3: "",
    description: "",
  });

  // data id allocaton
  const data = datas?.filter((dt) => {
    return dt.id === dataId;
  });

  useEffect(() => {
    if (locations?.pathname === "/Dashboard/heroSect/") {
      if (dataId) {
        const data = datas.find((dt) => dt.id === dataId);
        if (data) {
          setHeros({
            title: data.title,
            subtitle: data.subtitle,
            description: data.description,
          });
        }
      }
    }
    if (locations?.pathname === "/Dashboard/PresoSect/") {
      if (dataId) {
        const data = datas.find((dt) => dt.id === dataId);
        if (data) {
          setPresoData({
            title: data.title,
            subtitle: data.subtitle,
            description: data.description,
          });
        }
      }
    }
    if (locations?.pathname === "/Dashboard/Announcement/") {
      if (dataId) {
        const data = datas.find((dt) => dt.id === dataId);
        if (data) {
          setAnnounceData({
            title: data.title,
            description: data.description,
          });
        }
      }
    }
    if (locations?.pathname === "/Dashboard/StaffsSect/") {
      if (dataId) {
        const data = datas.find((dt) => dt.id === dataId);
        if (data) {
          setStaffData({
            name: data.name,
            position: data.position,
            description: data.description,
            contact1: data.contact1,
            contact2: data.contact2,
            contact3: data.contact3,
          });
        }
      }
    }
    if (locations?.pathname === "/Dashboard/AboutSect/") {
      if (dataId) {
        const data = datas.find((dt) => dt.id === dataId);
        if (data) {
          setAboutus({
            title: data.title,
            subtitle: data.subtitle,
            description: data.description,
          });
        }
      }
    }
  }, [dataId, datas, locations]);

  // handle input values assignment
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (locations?.pathname === "/Dashboard/heroSect/") {
      setHeros((data) => {
        return { ...data, [name]: value };
      });
    }
    if (locations?.pathname === "/Dashboard/PresoSect/") {
      setPresoData((data) => {
        return { ...data, [name]: value };
      });
    }
    if (locations?.pathname === "/Dashboard/Announcement/") {
      setAnnounceData((data) => {
        return { ...data, [name]: value };
      });
    }
    if (locations?.pathname === "/Dashboard/StaffsSect/") {
      setStaffData((data) => {
        return { ...data, [name]: value };
      });
    }
    if (locations?.pathname === "/Dashboard/AboutSect/") {
      setAboutus((data) => {
        return { ...data, [name]: value };
      });
    }
  };

  // Asynchronous functions to update data
  async function updateHeroSect() {
    const formData = new FormData();
    formData.append("title", heroUpdate.title);
    formData.append("subtitle", heroUpdate.subtitle);
    formData.append("description", heroUpdate.description);

    try {
      const response = await axiosInstance.put(
        `hat-api/Hero_Details/${dataId}/`,
        formData
      );
      // Update local state immediately after a successful update
      const updatedHeroSect = heroSect.map((hero) =>
        hero.id === dataId ? response.data : hero
      );
      setHero(updatedHeroSect);
      setOpen(false); // Close the drawer after update
    } catch (error) {
      console.error("Error updating the hero section:", error);
    }
  }

  // async function fpr president
  async function updatePresidentSect() {
    const formData = new FormData();
    formData.append("title", presoData.title);
    formData.append("subtitle", presoData.subtitle);
    formData.append("description", presoData.description);

    try {
      const response = await axiosInstance.put(
        `hat-api/President_Details/${dataId}/`,
        formData
      );
      // Update local state immediately after a successful update
      const updatedPresoSect = PresidentSect.map((preso) =>
        preso.id === dataId ? response.data : preso
      );
      setPresident(updatedPresoSect);
      // Close the drawer after update
      setOpen(false);
    } catch (error) {
      console.error("Error updating the president section:", error);
    }
  }
  // async function fpr Announcements
  async function UpdateAnnounceSect() {
    const formData = new FormData();
    formData.append("title", AnnounceData.title);
    formData.append("description", AnnounceData.description);

    try {
      const response = await axiosInstance.put(
        `hat-api/Announce_Details/${dataId}/`,
        formData
      );
      // Update local state immediately after a successful update
      const updatedAnnounce = AnnounceSect.map((Announce) =>
        Announce.id === dataId ? response.data : Announce
      );
      setAnnounce(updatedAnnounce);
      // Close the drawer after update
      setOpen(false);
    } catch (error) {
      console.error("Error updating the Announcement section:", error);
    }
  }
  // async function for AboutUs
  async function UpdateAboutUs() {
    const formData = new FormData();
    formData.append("title", AboutUsdata.title);
    formData.append("subtitle", AboutUsdata.subtitle);
    formData.append("description", AboutUsdata.description);

    try {
      const response = await axiosInstance.put(
        `hat-api/About_Details/${dataId}/`,
        formData
      );
      // Update local state immediately after a successful update
      const updateAboutus = AboutUSSect.map((aboutus) =>
        aboutus.id === dataId ? response.data : aboutus
      );
      setAboutUs(updateAboutus);
      // Close the drawer after update
      setOpen(false);
    } catch (error) {
      console.error("Error updating the AboutUs section:", error);
    }
  }
  // async function fpr president
  async function updateStaffSect() {
    const formData = new FormData();
    formData.append("name", staffs.name);
    formData.append("position", staffs.position);
    formData.append("contact1", staffs.contact1);
    formData.append("contact2", staffs.contact2);
    formData.append("contact3", staffs.contact3);
    formData.append("description", staffs.description);

    try {
      const response = await axiosInstance.put(
        `hat-api/Staffs_Details/${dataId}/`,
        formData
      );
      // Update local state immediately after a successful update
      const updateStaffSect = StaffsSect.map((staff) =>
        staff.id === dataId ? response.data : staff
      );
      setStaffs(updateStaffSect);
      // Close the drawer after update
      setOpen(false);
    } catch (error) {
      console.error("Error updating the Staff section:", error);
    }
  }

  const handleUpdate = (e) => {
    e.preventDefault();

    if (locations?.pathname === "/Dashboard/heroSect/") {
      updateHeroSect();
    }
    if (locations?.pathname === "/Dashboard/PresoSect/") {
      updatePresidentSect();
    }
    if (locations?.pathname === "/Dashboard/StaffsSect/") {
      updateStaffSect();
    }
    if (locations?.pathname === "/Dashboard/Announcement/") {
      UpdateAnnounceSect();
    }
    if (locations?.pathname === "/Dashboard/AboutSect/") {
      UpdateAboutUs();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative  z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0  overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto relative w-screen max-w-3xl transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <TransitionChild>
                <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <span className="absolute -inset-2.5" />
                    <span className="sr-only">Close panel</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                  </button>
                </div>
              </TransitionChild>
              <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                <div className="px-4 sm:px-6">
                  <DialogTitle className="text-base font-semibold leading-6 text-gray-900">
                    Panel title
                  </DialogTitle>
                </div>
                <div className="relative mt-6 flex-1 px-2">
                  {/* "/Dashboard/heroSect/" */}
                  {locations?.pathname === "/Dashboard/heroSect/" ? (
                    <div className="flex flex-col">
                      <div className="bg-slate-100 p-10 rounded-3xl">
                        <form onSubmit={handleSubmit}>
                          <div className="space-y-12 mt-5">
                            <div className="pb-12">
                              <h2 className="text-base xl:text-xl font-semibold leading-7 text-gray-900">
                                HeroSection Section
                              </h2>
                              <p className="mt-1 text-sm leading-6 text-gray-600">
                                Perfom CRUD to this section
                              </p>

                              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="title"
                                    className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Title
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      onChange={handleChange}
                                      defaultValue={data[0]?.title}
                                      type="text"
                                      name="title"
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
                                      defaultValue={data[0]?.subtitle}
                                      onChange={handleChange}
                                      type="text"
                                      name="subtitle"
                                      id="subtitle"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>

                                <div className="col-span-full">
                                  <label
                                    htmlFor="about"
                                    className="block  xl:text-lg text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Description
                                  </label>
                                  <div className="mt-2">
                                    <textarea
                                      defaultValue={data[0]?.description}
                                      onChange={handleChange}
                                      id="description"
                                      name="description"
                                      rows={3}
                                      className="block overflow-y-auto w-full h-[300px] rounded-2xl border-0 p-7 text-gray-900 shadow-sm ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="rounded-xl md:w-[680px] sm:w-[450px] w-full h-[300px]">
                                  <img
                                    src={`http://127.0.0.1:8000/${data[0]?.image}`}
                                    alt={data[0]?.title}
                                    className="size-40 h-[300px] object-cover rounded-xl w-full object-center"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-end items-end">
                            <motion.button
                              onClick={handleUpdate}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.8 }}
                              transition={{ type: "spring", ease: "easeOut" }}
                              className="px-7 py-2 bg-[#b67a3d] text-white rounded-3xl"
                            >
                              Update
                            </motion.button>
                          </div>
                        </form>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {/* About HAT section */}
                  {locations?.pathname === "/Dashboard/AboutSect/" ? (
                    <div className="flex flex-col">
                      <div className="bg-slate-100 p-10 rounded-3xl">
                        <form onSubmit={handleSubmit}>
                          <div className="space-y-12 mt-5">
                            <div className="pb-12">
                              <h2 className="text-base xl:text-xl font-semibold leading-7 text-gray-900">
                                AboutUS Section
                              </h2>
                              <p className="mt-1 text-sm leading-6 text-gray-600">
                                Perfom CRUD to this section
                              </p>

                              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="title"
                                    className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Title
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      onChange={handleChange}
                                      defaultValue={data[0]?.title}
                                      type="text"
                                      name="title"
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
                                      defaultValue={data[0]?.subtitle}
                                      onChange={handleChange}
                                      type="text"
                                      name="subtitle"
                                      id="subtitle"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>

                                <div className="col-span-full">
                                  <label
                                    htmlFor="about"
                                    className="block  xl:text-lg text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Description
                                  </label>
                                  <div className="mt-2">
                                    <textarea
                                      defaultValue={data[0]?.description}
                                      onChange={handleChange}
                                      id="description"
                                      name="description"
                                      rows={3}
                                      className="block overflow-y-auto w-full h-[300px] rounded-2xl border-0 p-7 text-gray-900 shadow-sm ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="rounded-xl md:w-[680px] sm:w-[450px] w-full h-[300px]">
                                  <img
                                    src={`http://127.0.0.1:8000/${data[0]?.image}`}
                                    alt={data[0]?.title}
                                    className="size-40 h-[300px] object-cover rounded-xl w-full object-center"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-end items-end">
                            <motion.button
                              onClick={handleUpdate}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.8 }}
                              transition={{ type: "spring", ease: "easeOut" }}
                              className="px-7 py-2 bg-[#b67a3d] text-white rounded-3xl"
                            >
                              Update
                            </motion.button>
                          </div>
                        </form>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {/* President section */}
                  {locations?.pathname === "/Dashboard/PresoSect/" ? (
                    <div className="flex flex-col">
                      <div className="bg-slate-100 p-10 rounded-3xl">
                        <form onSubmit={handleSubmit}>
                          <div className="space-y-12 mt-5">
                            <div className="pb-12">
                              <h2 className="text-base xl:text-2xl font-bold leading-7 text-gray-900">
                                President Section
                              </h2>
                              <p className="mt-1 text-sm leading-6 text-gray-600">
                                Perfom CRUD to this section
                              </p>

                              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="title"
                                    className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Title
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      defaultValue={data[0]?.title}
                                      type="text"
                                      name="title"
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
                                      defaultValue={data[0]?.subtitle}
                                      type="text"
                                      onChange={handleChange}
                                      name="subtitle"
                                      id="subtitle"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="col-span-full">
                                  <label
                                    htmlFor="description"
                                    className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Description
                                  </label>
                                  <div className="mt-2">
                                    <textarea
                                      defaultValue={data[0]?.description}
                                      onChange={handleChange}
                                      id="description"
                                      name="description"
                                      rows={3}
                                      className="block overflow-y-auto w-full h-[300px] rounded-2xl border-0 p-7 text-gray-900 shadow-sm ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="rounded-xl flex flex-row sm:w-[400px] gap-x-2 w-full h-[300px]">
                                  <img
                                    src={`http://127.0.0.1:8000/${data[0]?.image}`}
                                    alt={data[0]?.title}
                                    className="size-40 h-[300px] object-cover aspect-square rounded-xl w-full object-center"
                                  />
                                  <img
                                    src={`http://127.0.0.1:8000/${data[0]?.image2}`}
                                    alt={data[0]?.title}
                                    className="size-40 h-[300px] object-cover aspect-square rounded-xl w-full object-center"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-end items-end">
                            <motion.button
                              onClick={handleUpdate}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.8 }}
                              transition={{ type: "spring", ease: "easeOut" }}
                              className="px-7 py-2 bg-[#b67a3d] text-white rounded-3xl"
                            >
                              Update
                            </motion.button>
                          </div>
                        </form>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {/* Announcement section */}
                  {locations?.pathname === "/Dashboard/Announcement/" ? (
                    <div className="flex flex-col">
                      <div className="bg-slate-100 p-10 rounded-3xl">
                        <form onSubmit={handleSubmit}>
                          <div className="space-y-12 mt-5">
                            <div className="pb-12">
                              <h2 className="text-base xl:text-2xl font-bold leading-7 text-gray-900">
                                Announcement Section
                              </h2>
                              <p className="mt-1 text-sm leading-6 text-gray-600">
                                Perfom CRUD to this section
                              </p>

                              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="title"
                                    className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Title
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      defaultValue={data[0]?.title}
                                      type="text"
                                      name="title"
                                      onChange={handleChange}
                                      id="title"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="col-span-full">
                                  <label
                                    htmlFor="description"
                                    className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Description
                                  </label>
                                  <div className="mt-2">
                                    <textarea
                                      defaultValue={data[0]?.description}
                                      onChange={handleChange}
                                      id="description"
                                      name="description"
                                      rows={3}
                                      className="block overflow-y-auto w-full h-[300px] rounded-2xl border-0 p-7 text-gray-900 shadow-sm ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="rounded-xl flex flex-row sm:w-[400px] gap-x-2 w-full h-[300px]">
                                  <img
                                    src={`http://127.0.0.1:8000/${data[0]?.image}`}
                                    alt={data[0]?.title}
                                    className="size-40 h-[300px] object-cover aspect-square rounded-xl w-full object-center"
                                  />
                                  <img
                                    src={`http://127.0.0.1:8000/${data[0]?.image2}`}
                                    alt={data[0]?.title}
                                    className="size-40 h-[300px] object-cover aspect-square rounded-xl w-full object-center"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-end items-end">
                            <motion.button
                              onClick={handleUpdate}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.8 }}
                              transition={{ type: "spring", ease: "easeOut" }}
                              className="px-7 py-2 bg-[#b67a3d] text-white rounded-3xl"
                            >
                              Update
                            </motion.button>
                          </div>
                        </form>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {/* Gallery section */}
                  {locations?.pathname === "/Dashboard/GallerySect/" ? (
                    <div className="flex flex-col">
                      <div className="bg-slate-100 p-10 rounded-3xl">
                        <form onSubmit={handleSubmit}>
                          <div className="space-y-12 mt-5">
                            <div className="pb-12">
                              <h2 className="text-base xl:text-2xl font-bold leading-7 text-gray-900">
                                Gallery Section
                              </h2>
                              <p className="mt-1 text-sm leading-6 text-gray-600">
                                Perfom CRUD to this section
                              </p>
                              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="title"
                                    className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Title
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      defaultValue={data[0]?.title}
                                      type="text"
                                      onChange={handleChange}
                                      name="title"
                                      id="title"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="rounded-xl md:w-[680px] sm:w-[450px] w-full h-[300px]">
                                  <img
                                    src={`http://127.0.0.1:8000/${data[0]?.image}`}
                                    alt={data[0]?.title}
                                    className="size-40 h-[300px] object-cover rounded-xl w-full object-center"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-end items-end">
                            <motion.button
                              onClick={() => setOpen(false)}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.8 }}
                              transition={{ type: "spring", ease: "easeOut" }}
                              className="px-7 py-2 bg-[#b67a3d] text-white rounded-3xl"
                            >
                              Back
                            </motion.button>
                          </div>
                        </form>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {/* Staffs section */}
                  {locations?.pathname === "/Dashboard/StaffsSect/" ? (
                    <div className="flex flex-col">
                      <div className="bg-slate-100 p-10 rounded-3xl">
                        <form onSubmit={handleSubmit}>
                          <div className="space-y-12 mt-5">
                            <div className="pb-12">
                              <h2 className="text-base xl:text-2xl font-bold leading-7 text-gray-900">
                                Staffs Section
                              </h2>
                              <p className="mt-1 text-sm leading-6 text-gray-600">
                                Perfom CRUD to this section
                              </p>

                              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="name"
                                    className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Name
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      defaultValue={data[0]?.name}
                                      type="text"
                                      name="name"
                                      onChange={handleChange}
                                      id="name"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="position"
                                    className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Position
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      defaultValue={data[0]?.position}
                                      type="text"
                                      name="position"
                                      onChange={handleChange}
                                      id="position"
                                      autoComplete="given-name"
                                      className="block w-full rounded-2xl border-0 py-2 px-7 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="contact1"
                                    className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Email
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      defaultValue={data[0]?.contact1}
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
                                    className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Phone Number
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      defaultValue={data[0]?.contact2}
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
                                    className="block xl:text-lg text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Social Media
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      defaultValue={data[0]?.contact3}
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
                                      defaultValue={data[0]?.description}
                                      onChange={handleChange}
                                      id="description"
                                      name="description"
                                      rows={3}
                                      className="block overflow-y-auto w-full h-[300px] rounded-2xl border-0 p-7 text-gray-900 shadow-sm ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#b67a3d] sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className="rounded-xl md:w-[680px] sm:w-[450px] w-full h-[300px]">
                                  <img
                                    src={`http://127.0.0.1:8000/${data[0]?.image}`}
                                    alt={data[0]?.title}
                                    className="size-40 h-[300px] object-cover rounded-xl w-full object-center"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-end items-end">
                            <motion.button
                              onClick={handleUpdate}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.8 }}
                              transition={{ type: "spring", ease: "easeOut" }}
                              className="px-7 py-2 bg-[#b67a3d] text-white rounded-3xl"
                            >
                              Update
                            </motion.button>
                          </div>
                        </form>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
