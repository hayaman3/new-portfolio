"use client";
import React, { useState, useEffect, FunctionComponent } from "react";
import classNames from "classnames";
import { IconContext } from "react-icons";
import {
  GoHome,
  GoPerson,
  GoProjectRoadmap,
  GoImage,
  GoMail,
  GoX,
} from "react-icons/go";
import { GrAppsRounded } from "react-icons/gr";

const Header: FunctionComponent = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        setheaderShadow(true);
      } else {
        setheaderShadow(false);
      }
    });
  }, []);

  const [showMenu, setToggleMenu] = useState<boolean>(false);
  const [activeNav, setActiveNav] = useState<string>("");
  const [headerShadow, setheaderShadow] = useState<boolean>(false);

  const navLinkClass = classNames(
    "flex",
    "flex-col",
    "items-center",
    "text-sm",
    "md:text-[.813rem]",
    "text-title",
    "font-medium",
    "duration-300",
    "hover:text-black",
    "hover:scale-120",
  );

  const navActiveLinkClass = classNames("text-black", "scale-120");

  return (
    <header
      className={classNames(
        "w-full",
        "fixed",
        "top-0",
        "left-0",
        "z-50",
        "bg-zinc-50",
        "sm:top-[initial]",
        "sm:bottom-0",
        headerShadow
          ? "opacity-95 shadow-[0px_-1px_4px_rgba(0,0,0,0.15)]"
          : "shadow-none",
      )}
    >
      <nav
        aria-labelledby="page navigation"
        className="
          mx-auto
          flex
					h-[4.5rem]
					max-w-[968px]
					items-center
					justify-between
					gap-x-4
					md:mx-6
          sm:h-12
          xs:mx-4
			"
      >
        <h1 className="font-medium text-title">&lt; Kevin / &gt;</h1>
        <div
          className={classNames(
            "sm:fixed",
            "sm:-bottom-full",
            "sm:left-0",
            "sm:w-full",
            "sm:bg-zinc-50",
            "sm:pt-8",
            "sm:pb-12",
            "sm:px-6",
            "sm:shadow-[0px_-1px_4px_rgba(0,0,0,0.15)]",
            "xs:pt-8",
            "xs:px-1",
            "xs:pb-12",
            showMenu ? "sm:bottom-0" : "",
          )}
        >
          <ul className="mt-5 flex gap-x-8 sm:grid sm:grid-cols-[repeat(3,1fr)] sm:gap-8 sm:font-bold xs:gap-0">
            <IconContext.Provider
              value={{ className: "hidden text-xl sm:block" }}
            >
              <li aria-labelledby="navigation item">
                <a
                  href="#home"
                  onClick={() => setActiveNav("#home")}
                  className={classNames(
                    "text-black",
                    navLinkClass,
                    activeNav === "#home" ? navActiveLinkClass : "",
                  )}
                >
                  <GoHome />
                  Home
                </a>
              </li>

              <li aria-labelledby="navigation item">
                <a
                  href="#about"
                  onClick={() => setActiveNav("#about")}
                  className={classNames(
                    navLinkClass,
                    activeNav === "#about" ? navActiveLinkClass : "",
                  )}
                >
                  <GoPerson />
                  About
                </a>
              </li>

              <li aria-labelledby="navigation item">
                <a
                  href="#skills"
                  onClick={() => setActiveNav("#skills")}
                  className={classNames(
                    navLinkClass,
                    activeNav === "#skills" ? navActiveLinkClass : "",
                  )}
                >
                  <GoProjectRoadmap />
                  Skills
                </a>
              </li>

              <li aria-labelledby="navigation item">
                <a
                  href="#portfolio"
                  onClick={() => setActiveNav("#portfolio")}
                  className={classNames(
                    navLinkClass,
                    activeNav === "#portfolio" ? navActiveLinkClass : "",
                  )}
                >
                  <GoImage />
                  Portfolio
                </a>
              </li>

              <li aria-labelledby="navigation item">
                <a
                  href="#contact"
                  onClick={() => setActiveNav("#contact")}
                  className={classNames(
                    navLinkClass,
                    activeNav === "#contact" ? navActiveLinkClass : "",
                  )}
                >
                  <GoMail />
                  Contact
                </a>
              </li>
            </IconContext.Provider>
          </ul>
          <button
            onClick={() => {
              setToggleMenu(!showMenu);
              console.log(showMenu);
            }}
            type="button"
          >
            <GoX className=" hidden cursor-pointer bg-zinc-50 stroke-1 text-title sm:absolute sm:bottom-5 sm:right-5 sm:block sm:text-xl  sm:hover:text-black" />
          </button>
        </div>
        <button
          className="hidden bg-zinc-50 font-normal text-title sm:block sm:text-lg"
          onClick={() => setToggleMenu(!showMenu)}
          type="button"
        >
          <GrAppsRounded />
        </button>
      </nav>
    </header>
  );
};

export default Header;
