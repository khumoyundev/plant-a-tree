"use client";
import Image from "next/image";

function Plant() {
  return (
    <section className="py-[96px] bg-[#F5F6F7] bg-no-repeat bg-right w-full">
      <div className="container items-center mx-auto flex gap-[64px] h-[576px] px-[32px]  bg-[url('/images/plant.png')]  bg-cover">
        <div className="flex flex-col gap-4 max-w-[576px]">
          <h1 className="text-[#202225] font-semibold text-4xl">
            Where do we plant them?{" "}
          </h1>
          <p className="text-[#787F84] text-[22px] font-medium">
            1-6000 🌳 : HUNGARY, H-4251 Nyíradony, 0426/30 <br />
            HUNGARY, H-6500 BAJA, 0154/4 <br />
            HUNGARY, H-6500 BAJA, 0154/5 <br />
            HUNGARY, H-6500 BAJA, 0154/8 <br />
            HUNGARY, H-6500 BAJA, 0154/9 <br />
            HUNGARY, H-2051 Biatorbágy, 0192/11 <br />
            HUNGARY, H-2051 Biatorbágy, 0193/2 <br />
            HUNGARY, H-2051 Biatorbágy, 0194/12 <br />
            HUNGARY, H-2051 Biatorbágy, 0194/13
          </p>
        </div>
      </div>
    </section>
  );
}

export default Plant;
