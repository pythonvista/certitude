import React from "react";
import Image from "next/image";
import { Footer, Header, SubHeader, MoreInfo } from "@components";

export default function LiveInCare() {
  return (
    <div>
      <Header />
      <main className="w-[89%] mx-auto mb-10">
        <SubHeader title={"Live in Care"} img={"bg-types-of-care"} />
        <MainInfo />
        <MoreInfo />
      </main>
      <Footer />
    </div>
  );
}

function MainInfo() {
  return (
    <section className="bg-dandelion font-poppins text-eerie-80 space-y-20 px-16 py-20 mb-10">
      <div className="flex gap-16">
        <div className="relative min-w-[300px] w-[40%] h-[300px]">
          <Image src="/who-we-are.png" alt="who-we-are" fill />
        </div>
        <div className="flex-1 [&>p]:text-base [&>p]:leading-8 space-y-4 [&>p]:font-light [&>h4]:text-xl [&>h4]:font-medium [&>h3]:font-semibold [&>h3]:text-3xl ">
          <h3>Live in care</h3>
          <p>
            Live-in care helps you live the life you want, on your own terms, in
            your own home, close to family and friends. We ensure that with our
            person-centred approach, we will put together a unique package of
            care with a carefully chosen carer. Together, we’ll help you stay in
            the home you know and love.
          </p>
          <p>Live-in care means you can keep the same daily routines</p>

          <p>
            With a spare room in your home, your carer will be there to support
            you each day, as much or as little as you like and according to what
            matters to you most.
          </p>
          <p>
            For more information, please contact us using details on our contact
            page.
          </p>
        </div>
      </div>
      <div className="font-light space-y-5">
        <h3>HOW LIVE-IN CARE WORKS</h3>
        <h4 className="font-medium">
          This is best suited for individuals and their families who prefer to
          know that there is always a dedicated carer at hand, whatever the time
          of day.
        </h4>
        <p>
          Another advantage of living care is the fact that with our service,
          constant care and companionship will be available to you 24/7. We are
          flexible and can vary the support desired which might include:
          personal care, support with mobility and medication, social visits,
          preparing meals and feeding as required. Our carers can also help you
          maintain your home and give support with housekeeping, cleaning,
          laundry and shopping, as well as trips out.
        </p>
        <p>
          Such support round the clock will allow you and your loved ones to
          spend quality family time together.
        </p>
        <p>
          Call us or email today and one of our friendly advisers will explain
          the process to you on how live-in care works.
        </p>
        <h3 className="font-bold text-xl">Who is live in care for?</h3>
        <p>
          Living care can be for anyone who needs round the clock care and
          support at home. This includes:
        </p>
        <ul className="list-disc pl-4">
          {[
            "People who have been or are going to be discharged from hospital. Your discharge from hospital can at times depend on whether you have the right level of care available to you at home. families might not be able to provide such level of care and deal with other personal and family commitments. We also have a dedicated on-call team and carers which means that we can often respond within 24 hours if you or your loved one is being discharged from hospital and commence care almost immediately.",
            "People who are have home carers or visiting carers can also switch to live in care if their needs have changed and they require more support",
            "Some people who have stayed in a residential setting might not like it and prefer their independence in their home with support. Live-in care might be the best option for such ones.",
          ].map((item) => (
            <li key={item} className="pl-2">
              {item}
            </li>
          ))}
        </ul>
        <h5 className="font-bold">
          For more information about live in care, call us today on
          +447533906575 or email us : tonabay@gmail.com
        </h5>
      </div>
    </section>
  );
}
