import React from "react";
import Image from "next/image";
import { Footer, Header, SubHeader, MoreInfo } from "@components";

export default function HomeCare() {
  return (
    <div>
      <Header />
      <main className="w-[89%] mx-auto mb-10">
        <SubHeader title={"Home Care"} img={"bg-types-of-care"} />
        <MainInfo />
        <section className="relative my-10">
          <img
            src="/contact-bg.jpg"
            alt="contact-bg"
            className="h-[356px] absolute inset-0 w-full object-cover"
          />
          <div className="bg-aegean relative max-w-[500px] p-10 text-white font-poppins space-y-7 font-light [&_*]:leading-7 top-10 -left-7 ml-auto mb-20">
            <p>
              Home care gives individuals the much deserved extra support,
              reassurance and companionship that may be needed for you to
              continue living at home as independently as is possible.
            </p>
            <p>Our home care services include:</p>
            <ul className="list-disc list-inside">
              {[
                "support with personal care",
                "toileting and incontinence care",
                "support with light household chores",
                "support with mobility and transfers",
                "support with medication administration",
                "Meal preparations and feeding",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              Home care does not mean that you are glued to your home. Our team
              of dedicated carers can also support you to pursue your hobbies,
              interests and attend and take part in social events that you enjoy
              within the community. We can even give you the necessary support
              while you are ion holiday.
            </p>
            <p>
              We ensure that we enable you to remain as independent as possible
              and support you with aspects of daily living that you might
              struggle with.
            </p>
            <div>
              <h4 className="font-bold text-xl">
                Types of homecare we provide:{" "}
              </h4>
              <ul className="list-disc list-inside">
                {[
                  "Daily care",
                  "waking nights",
                  "dementia care",
                  "social care",
                  "care for people with learning difficulties",
                  "weekly care",
                  "live-in or 24/7 care",
                  "palliative care",
                  "elderly care",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <MoreInfo />
      </main>
      <Footer />
    </div>
  );
}
function MainInfo() {
  return (
    <section className="bg-dandelion font-poppins text-eerie-80 space-y-20 px-16 py-20">
      <div className="flex gap-16">
        <div className="relative min-w-[300px] w-[50%] h-[330px]">
          <Image src="/what-do-we-do.png" alt="what-do-we-do" fill />
        </div>
        <div className="flex-1 [&>p]:text-base [&>p]:leading-8 space-y-4 [&>p]:font-light [&>h4]:text-2xl [&>h4]:font-medium ">
          <h4>Home Care</h4>
          <p>
            Domiciliary care is provided for people who still have their own
            homes but who require additional support with household tasks,
            personal care or any other activity that allows them to maintain
            their independence and quality of life.
          </p>
          <p>
            Our care workers will become an essential part of our clients' daily
            routine. We understand that our clients have complex and unique
            needs and we tailor our care packages to our clients' individual
            needs.
          </p>
        </div>
      </div>
    </section>
  );
}
