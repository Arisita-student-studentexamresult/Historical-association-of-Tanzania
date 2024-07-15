"use client";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import HomePageContext from "../../Context/HomePageContext";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function Notification({ open, setOpen, dataId }) {
  // herosecttion
  const { setHero, heroSect } = useContext(HomePageContext);
  // president section
  const { PresidentSect, setPresident } = useContext(HomePageContext);
  // gallery section
  const { gallerySect, setGallery } = useContext(HomePageContext);
  // Staffs Section
  const { StaffsSect, setStaffs } = useContext(HomePageContext);
  // Announcement section
  const { AnnounceSect, setAnnounce } = useContext(HomePageContext);
  //AboutUs section
  const { AboutUSSect, setAboutUs } = useContext(HomePageContext);

  // routing
  const locations = useLocation();

  // Hero Section of landing page
  async function deleteHeroSect() {
    const hero = heroSect?.filter((pt) => pt.id !== dataId);
    setHero(hero);
    try {
      await axios.delete(
        `http://127.0.0.1:8000/hat-api/Hero_Details/${dataId}/`
      );
    } catch (error) {
      setHero(heroSect);
    }
  }
  // Announcements Section
  async function deleteAnnouncement() {
    const Announce = AnnounceSect?.filter((pt) => pt.id !== dataId);
    setAnnounce(Announce);
    try {
      await axios.delete(
        `http://127.0.0.1:8000/hat-api/Announce_Details/${dataId}/`
      );
    } catch (error) {
      setAnnounce(Announce);
    }
  }

  // Staffs Section
  async function deleteStaff() {
    const staff = StaffsSect?.filter((pt) => pt.id !== dataId);
    setStaffs(staff);
    try {
      await axios.delete(
        `http://127.0.0.1:8000/hat-api/Staffs_Details/${dataId}/`
      );
    } catch (error) {
      setStaffs(staff);
    }
  }

  // Gallery section
  async function deletePicturesSect() {
    const pictures = gallerySect?.filter((pt) => pt.id !== dataId);
    setGallery(pictures);
    try {
      await axios.delete(
        `http://127.0.0.1:8000/hat-api/Gallery_Details/${dataId}/`
      );
    } catch (error) {
      setGallery(pictures);
    }
  }

  // AboutUs section
  async function deleteAboutUsSect() {
    const aboutUs = AboutUSSect?.filter((pt) => pt.id !== dataId);
    setAboutUs(aboutUs);
    try {
      await axios.delete(
        `http://127.0.0.1:8000/hat-api/About_Details/${dataId}/`
      );
    } catch (error) {
      setAboutUs(aboutUs);
    }
  }

  // preso function
  async function deletePresoSect() {
    const preso = PresidentSect?.filter((pt) => pt.id !== dataId);
    setPresident(preso);
    try {
      await axios.delete(
        `http://127.0.0.1:8000/hat-api/President_Details/${dataId}/`
      );
    } catch (error) {
      setPresident(preso);
    }
  }

  // delete Logic
  const handleDelete = () => {
    if (locations?.pathname === "/Dashboard/heroSect/") {
      deleteHeroSect();
    }
    if (locations?.pathname === "/Dashboard/PresoSect/") {
      deletePresoSect();
    }
    if (locations?.pathname === "/Dashboard/GallerySect/") {
      deletePicturesSect();
    }
    if (locations?.pathname === "/Dashboard/StaffsSect/") {
      deleteStaff();
    }
    if (locations?.pathname === "/Dashboard/Announcement/") {
      deleteAnnouncement();
    }
    if (locations?.pathname === "/Dashboard/AboutSect/") {
      deleteAboutUsSect();
    }
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <ExclamationTriangleIcon
                    aria-hidden="true"
                    className="h-6 w-6 text-red-600"
                  />
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle
                    as="h3"
                    className="text-base font-semibold leading-6 text-gray-900"
                  >
                    Delete data
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Are you sure you want to delete? note your data will be
                      permanently removed. This action cannot be undone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={handleDelete}
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                Delete
              </button>
              <button
                type="button"
                data-autofocus
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
