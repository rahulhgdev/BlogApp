import { useState } from "react";
import ImageKit from "./ImageKit";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full flex h-16 md:h-20 items-center justify-between">
      {/* logo */}
      <div className="flex items-center gap-4 text-2xl">
        {/* <img src="/logo.png" className="w-8 h-8" alt="" /> */}
        {/* <Image urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT} src="/logo.png" className="w-8 h-8" alt="logo" /> */}

        <ImageKit src="/logo.png" className="w-8 h-8" alt="Logo" />
        <span>Blogger</span>
      </div>
      {/* mobile menu */}
      <div className="md:hidden">
        <div
          className="text-3xl cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "X" : "☰"}
          {/* mobile menu list */}
          <div
            className={`w-full h-screen flex flex-col gap-8 text-lg items-center justify-center bg-[#e6e6ff] absolute top-16 transition-all ease-in-out ${open ? "-right-0" : "-right-[100%]"}`}
          >
            <a href="/">Home</a>
            <a href="/">Trending</a>
            <a href="/">Most Popular</a>
            <a href="/">About</a>
            <a href="">
              <button className="px-4 py-2 rounded-3xl bg-blue-800 text-white hover:bg-blue-900">
                Login 👋
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* desktop menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <a href="/">Home</a>
        <a href="/">Trending</a>
        <a href="/">Most Popular</a>
        <a href="/">About</a>
        <a href="">
          <button className="px-4 py-2 rounded-3xl bg-blue-800 text-white hover:bg-blue-900">
            Login 👋
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
