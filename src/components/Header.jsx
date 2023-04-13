import React from "react";
import { BsTwitter, BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-emerald">
      <div className="font-poppins text-white font-semibold flex justify-between w-[89%] mx-auto py-7">
        <ul className="flex gap-4">
          {[
            "Home",
            "About Us",
            "Funding Your Care",
            "Types of Care",
            "Contact Us",
          ].map((item) => (
            <li key={item}>{item}</li>
          ))}
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
