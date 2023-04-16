import React from "react";
import Image from "next/image";
import { Footer, Header, SubHeader, MoreInfo } from "@components";

export default function SpecialistServices() {
  return (
    <div>
      <Header />
      <main className="w-[89%] max-w-[1700px] mx-auto mb-10">
        <SubHeader title={"Specialist Services"} img={"bg-types-of-care"} />
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
          <h3>Specialist Services</h3>
          <h4>End of life care</h4>
          <p>
            Our care givers deliver palliative care of an exceptionally high
            standards sensitively allowing our clients to have the dignity they
            deserve to help them to continue living independently.
          </p>
          <h4>Care for people with illness or disability</h4>

          <p>
            As well as providing day to day personal care{" "}
            <span className="font-bold">CERTITUDE CARE</span> team can also
            offer the support, motivation and encouragement needed to maintain
            our clients' independence. Our caring sensitive team understand the
            need to listen to our clients' needs and to help them to make their
            own life decisions whether big or small. Even in the case of severe
            disability, we can help the individual live a full and enjoyable
            lives.
          </p>
          <p>
            We focus on the most important aspects of our clients care whilst
            never forgetting to ensure our service provision is SMART - Specific
            - Measurable - Adaptable - Reassuring - and Timely.
          </p>

          <p>
            As well as the above, we also specialise in providing the following
            types of care:
          </p>

          <p>
            Dementia care, Learning disabilities, Personal care, Physical
            disabilities, Sensory impairments, Caring for adults under 65 yrs,
            Caring for adults over 65 yrs
          </p>
        </div>
      </div>
    </section>
  );
}
