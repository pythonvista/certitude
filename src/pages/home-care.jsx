import React from "react";
import Image from "next/image";
import { Footer, Header, SubHeader, MoreInfo, CustomHead } from "@components";

export default function HomeCare() {
  return (
    <div>
      <CustomHead
        descriptionContent={`Home care gives individuals the much deserved extra support, reassurance and companionship that may be needed for you to continue living at home as independently as is possible.`}
        pageName={"Home Care"}
      />
      <Header />
      <main className="w-[89%] mx-auto max-w-[1700px] mb-10">
        <SubHeader title={"Home Care"} img={"bg-types-of-care"} />
        <MainInfo />
        <section className="relative my-10">
          <div className="h-[356px] relative m:absolute m:inset-0 w-full">
            <Image
              src="/contact-bg.jpg"
              alt="contact-bg"
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div className="bg-aegean relative w-full mx-auto m:max-w-[500px] p-5 [&>p]:text-sm m:[&>p]:text-base  m:p-10 text-white font-poppins space-y-7 font-light [&_*]:leading-7 top-10 m:-left-7 ml-auto mb-20">
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
                <li key={item} className="text-sm m:text-base ">
                  {item}
                </li>
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
              <h4 className="font-bold text-lg m:text-xl">
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
                  <li key={item} className="text-sm m:text-base ">
                    {item}
                  </li>
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
    <section className="bg-dandelion font-poppins text-eerie-80 space-y-20 px-10 py-10 m:px-16 m:py-20">
      <div className="flex gap-16 flex-col m:flex-row">
        <div className="relative z-10 min-w-[100px] w-full m:w-[50%] h-[300px]">
          <Image src="/what-do-we-do.png" alt="what-do-we-do" fill />
        </div>
        <div className="flex-1 [&>p]:text-sm m:[&>p]:text-base [&>p]:leading-8 space-y-4 [&>p]:font-light [&>h4]:text-xl m:[&>h4]:text-2xl [&>h4]:font-medium ">
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
