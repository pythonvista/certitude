import { Header } from "@components";
import Image from "next/image";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { BiChevronRight } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <h3 className="text-center font-lemon text-4xl text-eerie-80 my-6">
          Certitude <span className="text-basil">Care Services</span>
        </h3>
        <HeroDisplay />
        <div className="w-[89%] mx-auto space-y-10 my-10">
          <DisplayFeatures />
          <WelcomeCertitude />
          <MoreInfo />
        </div>
      </main>
      <Footer />
    </div>
  );
}
function HeroDisplay() {
  return (
    <div
      className={`${mainOne[0]} h-[550px] flex justify-center items-center bg-no-repeat bg-cover`}
    >
      <div className="bg-white-90 min-w-[650px] font-segoe py-9 space-y-6 text-maverick">
        <h5 className="text-center font-normal text-2xl">
          Trusted Providers of <br />
          <span className="text-4xl text-center font-bold">
            Support and home care <br /> for your loved ones
          </span>
        </h5>
        <button className="bg-basil px-4 py-2 w-fit mx-auto block">
          More about us
        </button>
      </div>
    </div>
  );
}
function DisplayFeatures() {
  return (
    <div className="flex font-poppins justify-center xl:justify-between items-center mx-auto gap-4 flex-wrap">
      {mainFeatures.map((item) => (
        <Link href={item.url} key={item.heading}>
          <div className="w-[290px] text-center bg-basil">
            <div className="relative h-[250px]">
              <Image
                src={item.img}
                alt={item.heading}
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="space-y-4 p-6">
              <h4 className="font-semibold text-xl">{item.heading}</h4>
              <p>{item["sub-heading"]}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

function WelcomeCertitude() {
  return (
    <section className="bg-certitude-intro-bg h-[600px] bg-cover bg-no-repeat flex justify-center items-center font-poppins">
      <div className="w-[750px] mx-auto text-center text-white text-xl">
        <h4 className="text-4xl font-bold mb-6">
          Welcome to Certitude Care Service
        </h4>
        <p className="mb-1">
          Certitude Care Service recognises the importance of community, of
          supporting and influencing how we live within these communities now,
          in the past and in the future. Reto Care Ltd are proud to be on the
          Staffordshire/Cheshire boarders; we are the local independent care
          providers of choice.
        </p>
        <p>
          Our flexible approach to personal care means that we are also able to
          provide a comprehensive support service for respite or emergency
          situations – often a preferred alternative to moving into residential
          care. This can be a simple drop-in service or more comprehensive
          24-hour live-in care, depending upon the requirements of the customer
          and their family.
        </p>
        <button className="bg-aegean text-base font-segoe px-6 py-2 w-fit mx-auto mt-10 block">
          Find Out More
        </button>
      </div>
    </section>
  );
}
export function MoreInfo() {
  return (
    <div className="bg-for-more-info-bg font-semibold py-14 font-poppins">
      <p className="text-3xl text-white text-center">
        For more information please contact{" "}
        <span className="underline decoration-2">+447533906575</span>
      </p>
    </div>
  );
}
export function Footer() {
  function Input({ placeholder, type }) {
    return <input type={type} placeholder={placeholder} className="p-4" />;
  }
  const captchaRef = React.useRef(null);
  return (
    <footer className="bg-basil">
      <div className="w-[89%] mx-auto font-poppins py-10">
        <div className="bg-white p-6">
          <Image
            src="/asset_cqclogo_update.png"
            alt="asset_cqclogo_update"
            width={150}
            height={50}
          />
          <h4 className="font-semibold text-lg my-2">Certitude Care Service</h4>
          <div className="bg-light-silver-40 p-4 space-y-2">
            <p className="text-base font-medium">CQC overall rating</p>
            <div className="flex items-center gap-4">
              <p className="text-lg font-semibold">Good</p>
              <GoPrimitiveDot size={22} className="text-north-texas-green" />
            </div>
            <p className="text-base font-light">16 February 2023</p>
            <button className="bg-white text-palatinate px-4 py-1 font-medium flex items-center border-eerie-50 border rounded-md">
              See the report <BiChevronRight size={30} />
            </button>
          </div>
        </div>
        <div className="space-y-8">
          <h4 className="text-center font-medium text-3xl my-5">
            Contact Us Today
          </h4>
          <div className="flex gap-6 justify-between">
            <div className="font-light text-lg">
              <h5 className="text-xl font-semibold">Certitude Care Service</h5>
              <p>
                90 Lightwood Road <br />
                Stoke on Trent, <br />
                ST34JF
              </p>
              <p className="mt-4">
                T. <a href="tel:+447533906575">+447533906575</a>
              </p>
              <p>
                E:{" "}
                <a href="mailto:tonabay@gmail.com.uk">tonabay@gmail.com.uk</a>
              </p>
              <div className="flex items-center gap-2 mt-1">
                <FaMapMarkerAlt />
                <p>View Map</p>
              </div>
            </div>
            <div className=" flex flex-col gap-3 mt-4">
              <Input type={"text"} placeholder={"Full Name*"} />
              <Input type="email" placeholder="Email*" />
              <Input type="text" placeholder="Phone Number" />
              <ReCAPTCHA
                sitekey="6Ldk74clAAAAAADLRsZAZ3o_fDxLRKxTfIRm628b"
                ref={captchaRef}
              />
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="privacy-policy"
                  id="privacy-policy"
                />
                <label htmlFor="privacy-policy">
                  I have read and agree to the{" "}
                  <span className="underline">privacy policy</span>
                </label>
              </div>
            </div>
            <textarea
              placeholder="Message*"
              cols="30"
              rows="10"
              className="p-4 mt-4"
            />
          </div>
          <div className="flex item-center gap-5">
            <FaFacebookF />
            <BsTwitter />
          </div>
          <div className="flex item-center justify-between">
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
            <p>Web Design Company</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
const mainFeatures = [
  {
    url: "/specialist-services",
    img: "/specialist-services.png",
    heading: "Specialist Services",
    "sub-heading":
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has English.",
  },
  {
    url: "/home-care",
    img: "/home-care.png",
    heading: "Home Care",
    "sub-heading":
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has English.",
  },
  {
    url: "/specialist-services",
    img: "/community-assistant.png",
    heading: "Community Assistant",
    "sub-heading":
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has English.",
  },
  {
    url: "/specialist-services",
    img: "/live-in-care.png",
    heading: "Live in Care",
    "sub-heading":
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has English.",
  },
];
const mainOne = [
  "bg-[url('/hero-section-bg.png')]",
  "bg-[url('/hero-section-bg.png')]",
  "bg-[url('/hero-section-bg.png')]",
  "bg-[url('/hero-section-bg.png')]",
];
