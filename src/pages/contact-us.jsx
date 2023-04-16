import React from "react";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Footer, Header, SubHeader, MoreInfo } from "@components";

export default function ContactUs() {
  return (
    <div>
      <Header />
      <main className="w-[89%] max-w-[1700px] mx-auto mb-10 space-y-10">
        <SubHeader title={"Contact US"} img={"bg-types-of-care"} />
        <section className="bg-contact-bg p-16">
          <div className="max-w-[600px] ml-auto bg-aegean p-10 font-poppins text-white">
            <h4 className="text-4xl font-bold">Contact US</h4>
            <div className="flex gap-3 mt-2">
              <FaMapMarkerAlt className="mt-2" />{" "}
              <p className="font-light leading-7">
                <span className="font-semibold">Certitude Care Service</span>{" "}
                <br />
                90 Lightwood Road <br />
                Stoke on Trent, <br />
                ST34JF
              </p>
            </div>
            <div className="flex items-center gap-3 font-light mt-6">
              <FaPhoneAlt />
              <p>
                T. <a href="tel:+447533906575">+447533906575</a>
              </p>
            </div>
            <div className="flex items-center gap-3 font-light">
              <MdEmail />
              <p>
                E:{" "}
                <a href="mailto:tonabay@gmail.com.uk">tonabay@gmail.com.uk</a>
              </p>
            </div>
          </div>
        </section>
        <MoreInfo />
      </main>
      <Footer />
    </div>
  );
}
