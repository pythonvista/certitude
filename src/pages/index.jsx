import { Header } from "@components";
import Image from "next/image";

export default function Home() {
  const mainOne = [
    "bg-[url('/hero-section-bg.png')]",
    "bg-[url('/hero-section-bg.png')]",
    "bg-[url('/hero-section-bg.png')]",
    "bg-[url('/hero-section-bg.png')]",
  ];
  return (
    <div>
      <Header />
      <main>
        <h3 className="text-center font-lemon text-4xl text-eerie-80 my-6">
          Certitude <span className="text-basil">Care Services</span>
        </h3>
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
      </main>
    </div>
  );
}
