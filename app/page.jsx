"use client";
import Image from "next/image";
import Clouds from "./components/clouds";
import Mountains from "./components/mountains";
import { useState } from "react";

export default function Home() {
  const [treeCount, setTreeCount] = useState(1);

  function onClick() {
    if (treeCount < 10) {
      setTreeCount((prev) => prev + 1);
    }
  }

  return (
    <div className="flex flex-col text-center items-center justify-center w-full mt-6">
      <Image
        src={"/logo.png"}
        width={412}
        height={90}
        alt="logo"
        className="mb-5"
      />
      <p className="text-[#787F84] font-medium text-[22px] max-w-[520px]">
        Help save the ecosystem by planting a tree, contribute through your
        donation!
      </p>
      <div className="bg-[#FFFFFF99] relative z-20 mt-[64px] w-[453px] rounded-[20px]  border-white border-2 shadow-[0px_32px_28px_0px_#E4E4E433]">
        <div className="h-[172px] px-10 py-9 border-b-2 border-b-white flex items-center justify-center">
          <h3 className="text-[#202225] font-medium text-[28px] ">Choose</h3>
        </div>
        <div className="h-[134px] px-10 py-9 flex items-center justify-between">
          <div className="flex text-[#202225] leading-10 font-semibold text-[32px] gap-2">
            <div className="flex items-center justify-center gap-1">
              {treeCount}
              <svg
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  width="32"
                  height="32"
                  rx="16"
                  fill="url(#paint0_radial_294_4843)"
                />
                <rect
                  x="0.5"
                  width="32"
                  height="32"
                  rx="16"
                  fill="url(#paint1_radial_294_4843)"
                  fill-opacity="0.2"
                />
                <g clip-path="url(#clip0_294_4843)">
                  <path
                    d="M20.8154 14.2415C20.3126 13.856 19.6924 13.6381 19.0219 13.6381C18.1335 13.6381 17.329 14.0236 16.7926 14.6438C16.7088 14.7444 16.625 14.845 16.5579 14.9455C16.6082 14.8114 16.6585 14.6773 16.7255 14.5432C17.2116 13.5711 18.2341 12.9006 19.3907 12.9006C20.0109 12.9006 20.5975 13.085 21.0836 13.4202C21.1004 13.3196 21.1004 13.2191 21.1004 13.1185C21.1004 11.9116 20.2288 10.9227 19.089 10.7383C19.0554 9.33029 17.9156 8.19048 16.5076 8.19048C15.3678 8.19048 14.3956 8.92801 14.0604 9.95048C15.1164 9.98401 16.0048 10.7048 16.2897 11.677C15.8539 11.0735 15.1331 10.688 14.3453 10.688C14.2112 10.688 14.0604 10.7048 13.9263 10.7215C12.7865 10.9227 11.9149 11.9116 11.9149 13.1017C11.9149 13.504 12.0154 13.8895 12.1831 14.2248C11.4455 14.7779 10.9762 15.6495 10.9762 16.6217C10.9762 18.2811 12.3171 19.6221 13.9766 19.6221H15.7533V23.8126C15.7533 23.9634 15.8707 24.0975 16.0383 24.0975H16.9602C17.1111 24.0975 17.2451 23.9802 17.2451 23.8126V19.6221H19.0219C20.6813 19.6221 22.0223 18.2811 22.0223 16.6217C22.0223 15.6495 21.553 14.7779 20.8154 14.2415Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <radialGradient
                    id="paint0_radial_294_4843"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(27.2177 29.3971) rotate(-129.944) scale(32.5521)"
                  >
                    <stop offset="0.436111" stop-color="#27A867" />
                    <stop offset="1" stop-color="#33E68C" />
                  </radialGradient>
                  <radialGradient
                    id="paint1_radial_294_4843"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(5.16986 4.97608) rotate(44.2205) scale(15.9165)"
                  >
                    <stop stop-color="white" />
                    <stop
                      offset="0.424767"
                      stop-color="white"
                      stop-opacity="0"
                    />
                  </radialGradient>
                  <clipPath id="clip0_294_4843">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(8.5 8)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span className="font-semibold text-[32px] leading-10 text-[#BCBEC2]">
              {" "}
              =
            </span>
            <div>$10</div>
          </div>
          <button
            onClick={onClick}
            className="rounded-[15px_15px_13px_13px] h-[68px] w-[165px] text-white active:text-[#ffffffcc ] active:p-[1px] p-[1px_2px_5px_2px] bg-[#08743E] border-2 border-white shadow-[0px_1px_1px_0px_#00000040] "
          >
            <div className="flex items-center justify-center font-bold text-base bg-[#37A16C] border-t border-b rounded-xl border-[#36BD79] w-full px-5 py-4 h-full ">
              Save the world
            </div>
          </button>
        </div>
      </div>
      <section className="-mt-[150px] relative">
        <Clouds />
        <Mountains treeCount={treeCount} />
      </section>
    </div>
  );
}
