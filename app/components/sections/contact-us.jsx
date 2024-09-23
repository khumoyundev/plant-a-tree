"use client";
import Image from "next/image";

function ContactUs() {
  return (
    <section className="py-[96px] w-full">
      <h1 className="text-[#202225] font-semibold text-5xl text-center">
        Contact us{" "}
      </h1>
      <div className="container items-center mx-auto flex gap-[64px] px-[32px]">
        <div className="grid grid-rows-3 gap-12">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h5>Email</h5>
              <p>Our friendly team is here to help.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8"></div>
          <div></div>
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default ContactUs;
