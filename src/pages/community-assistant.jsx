import React from "react";
import Image from "next/image";

import { Footer, Header, SubHeader, MoreInfo } from "@components";

export default function CommunityAssistant() {
  return (
    <div>
      <Header />
      <main className="w-[89%] max-w-[1700px] mx-auto mb-10">
        <SubHeader title={"Community Assistant"} img={"bg-types-of-care"} />
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
        <div className="flex-1 [&>p]:text-sm m:[&>p]:text-base [&>p]:leading-8 space-y-4 [&>p]:font-light [&>h4]:text-lg m:[&>h4]:text-xl [&>h4]:font-medium [&>h3]:font-semibold [&>h3]:text-2xl m:[&>h3]:text-3xl ">
          <h3>Community Assistant</h3>
          <p>
            We offer a unique choice of flexible home care and support. Our
            carers are trained in a whole range of areas and can assist with
            light housework, shopping and social visits, religious visits,
            giving our clients the confidence to continue living in their own
            homes as well as keep up with their social routines.
          </p>

          <p>
            You can plan your daily routine and we can provide one to one
            support to enable you keep abreast with your home and social
            schedules.
          </p>

          <p>
            For more information, please contact us using the details on
            info@retocare.co.uk
          </p>

          <h4>What can we provide?</h4>
          <div>
            <p>We can assist you with:</p>
            <ul className="list-disc pl-3">
              {[
                "light housework",
                "shopping",
                "accompany you on social visits",
                "support you to plan your social life/ schedule",
              ].map((item) => (
                <li key={item} className="text-sm m:text-base">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
