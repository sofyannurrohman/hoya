import { useState } from "react";
import Nav from "./navbar";
import Logo from "./logo";
import classnames from "classnames";

export default function Navbar() {
  const [offcanvas, setOffcanvas] = useState(false);

  return (
    <>
      <div className="flex items-center py-10">
        <div className="w-full md:w-3/4 sm:w-1/2 lg:ml-60">
          <Logo />
        </div>
        <div className="w-full hidden md:block">
          <Nav dir="horizontal" scheme="light" />
        </div>
        <div className="w-9/12 md:hidden text-right">
          <svg
            className="w-6 h-6 inline-block text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setOffcanvas(true)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>

      <div
        className={classnames(
          "fixed bg-white z-10 top-0 h-full w-full p-10 md:hidden transition-all",
          offcanvas ? "right-0" : "-right-full"
        )}
      >
        <svg
          className="absolute top-8 right-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setOffcanvas(false)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <Nav scheme="dark" dir="vertical" />
      </div>
    </>
  );
}
