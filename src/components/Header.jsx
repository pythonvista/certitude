import React from "react";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsFillTelephoneFill } from "react-icons/bs";

export default function Header() {
  return (
    <header className="bg-emerald ">
      <div className="font-poppins text-white font-semibold flex justify-between w-[89%] mx-auto py-7  max-w-[1700px]">
        <ul className="flex gap-4">
          {[
            {
              name: "Home",
              url: "/",
            },
            {
              name: "About Us",
              url: "/about-us",
            },
            {
              name: "Funding Your Care",
              url: "/funding-your-care",
            },
            {
              name: "Types of Care",
              url: "/types-of-care",
            },
            {
              name: "Contact Us",
              url: "/contact-us",
            },
          ].map((item) =>
            item.name === "Types of Care" ? (
              <li key={item.name} className="group/item relative">
                <p className="flex items-center cursor-pointer ">
                  {item.name}
                  <BiChevronDown />
                </p>
                <ul
                  className={`absolute group-hover/item:scale-y-100 scale-y-0 top-full bg-basil origin-top transition-all font-segoe -left-[30%] w-[220px] z-50`}
                >
                  {[
                    {
                      name: "Specialist Services",
                      url: "/specialist-services",
                    },
                    {
                      name: "Home care",
                      url: "/home-care",
                    },
                    {
                      name: "Community Assistance",
                      url: "/community-assistant",
                    },
                    {
                      name: "Live in Care",
                      url: "/live-in-care",
                    },
                    {
                      name: "Continuing Health Care",
                      url: "/continuing-health-care",
                    },
                  ].map((item) => (
                    <li
                      key={item.name}
                      className="hover:bg-maverick px-5 py-3 transition-all"
                    >
                      <Link href={item.url}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.name}>
                <Link href={item.url}>{item.name}</Link>
              </li>
            )
          )}
        </ul>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <BsFillTelephoneFill className="mt-1" />
            <p className="font-segoe">+447533906575</p>
          </div>
          <FaFacebookF />
          <BsTwitter />
        </div>
      </div>
    </header>
  );
}
