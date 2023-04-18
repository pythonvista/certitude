import React from "react";
import Image from "next/image";
import { Footer, Header, SubHeader, MoreInfo } from "@components";

export default function ContinuingHealthCare() {
  return (
    <div>
      <Header />
      <main className="w-[89%] max-w-[1700px] mx-auto mb-10">
        <SubHeader title={"Continuing Health Care"} img={"bg-types-of-care"} />
        <MainInfo />
        <MoreInfo />
      </main>
      <Footer />
    </div>
  );
}

function MainInfo() {
  return (
    <section className="bg-dandelion font-poppins text-eerie-80 space-y-20 px-10 py-10 m:px-16 m:py-20 mb-10">
      <div className="flex gap-16 flex-col m:flex-row">
        <div className="relative z-10 min-w-[100px] w-full m:w-[40%] h-[300px]">
          <Image src="/who-we-are.png" alt="who-we-are" fill />
        </div>
        <div className="flex-1 [&>p]:text-sm m:[&>p]:text-base [&>p]:leading-8 space-y-4 [&>p]:font-light [&>h4]:text-xl m:[&>h4]:text-2xl [&>h4]:font-medium [&>h3]:font-semibold [&>h3]:text-2xl m:[&>h3]:text-3xl">
          <h3>Continuing Health Care</h3>

          <p>
            Some people with long-term complex health needs qualify for free
            social care arranged and funded solely by the NHS. This is known as
            NHS continuing healthcare. People with terminal illnesses may also
            qualify.
          </p>
          <p>
            Reto care works closely with some local continuing health care teams
            to provide such care. Service users are referred to us from local
            hospitals and hospices and we provided care for them within the
            comfort of their homes.
          </p>
          <p>To find out if you qualify, speak to your local NHS CCG.</p>
          <p>
            If you’re eligible for NHS continuing healthcare, the next stage is
            to arrange a care and support package that meets your assessed
            needs.
          </p>
          <p>
            Depending on your situation, different options could be suitable,
            including support in your own home and the option of a personal
            health budget.
          </p>
        </div>
      </div>
    </section>
  );
}
