import React from "react";

function SubHeader({ title, img }) {
  return (
    <section>
      <h3 className="text-center font-lemon text-4xl text-eerie-80 my-6">
        Certitude <span className="text-basil">Care Services</span>
      </h3>
      <div
        className={`${img} h-[180px] grid place-items-center bg-cover font-poppins font-bold text-4xl text-white w-full bg-no-repeat`}
      >
        <h4>{title}</h4>
      </div>
    </section>
  );
}

export default SubHeader;
